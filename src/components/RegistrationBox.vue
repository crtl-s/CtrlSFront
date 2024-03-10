<template>
  <div class="container">
    <div class="row">
      <template>
        <div v-if="showToast" class="toast">
          {{ toastMessage }}
        </div>
      </template>
    </div>
    <div class="row" id="row-registration">
      <div class="col vh-50">
        <form>
          <input type="text" v-model="name" placeholder="Name" />

          <input
            for="email"
            type="email"
            placeholder="Email"
            required
            v-model="email"
            @blur="validateEmail"
          />
          <input
            type="date"
            v-model="dateOfBirth"
            placeholder="Date of birth"
            :readonly="!enableDateInput"
            @focus="enableDateInput = true"
            @blur="enableDateInput = false"
          />

          <input type="password" v-model="password" placeholder="Password" />

          <input type="password" v-model="repeatPassword" placeholder="Repeat password" />
          <select v-model="educationalFieldId" id="educational-fields">
            <option value="" disabled selected>Select an option</option>
            <option value="bla">bla</option>
            <option v-for="field in educationalFields" :key="field.id" :value="field.id">
              {{ field.name }}
            </option>
          </select>
          <button @click.prevent="submitFormm">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { inject } from 'vue'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      dateOfBirth: '',

      educationalFields: [],
      educationalFieldId: '',
      msg: {
        email: ''
      },
      enableDateInput: false,
      showToast: false,
      toastMessage: ''
    }
  },
  methods: {
    submitFormm() {
      console.log('usao')

      axios
        .post('register', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.repeatPassword,
          date_of_birth: this.dateOfBirth,
          education_type_id: this.educationalFieldId
        })
        .then((res) => {
          console.log(res.data)
          let user = inject('user', null)
          user.value = res.data.user

          
          const router = useRouter()
          router.push({ name: 'registration-learning-style' })
        })
        .catch((err) => {
          console.log(err.response.data)
          this.displayToast('An error occurred. Please try again later.')
        })
    },

    validateEmail() {
      if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.msg['email'] = 'Please enter a valid email address'
      } else {
        this.msg['email'] = ''
      }
    },

    displayToast(message) {
      this.message = message
      this.showToast = true

      console.log('toast shown')
      setTimeout(() => {
        this.hideToast()
      }, 3000) // Hide the toast after 3 seconds (adjust as needed)
    },
    hideToast() {
      this.showToast = false
    }
  },
  created() {
    axios.get('educationType').then((res) => {
      this.educationalFields = res.data
      console.log(this.educationalFields, 'try')
    })

    console.log('tu je')

    let user = inject('user', null)

    axios.get('isAuth').then((res) => {
      console.log('tu je 2', res.data)
      user.value = res.data.user
    })
  }
}
</script>
<style scoped>
form {
  text-align: center;
}
.toast {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
}
form input {
  width: 80%;
  margin: 10px;
  border: solid 1px black;
  padding: 5px;
}

button {
  border: none;
  background-color: #ff8c00;
  color: white;
  font-size: 1.3em;
  font-weight: bold;
  text-transform: uppercase;
  margin: 15px;
  padding: 7px;
}

button:hover {
  background-color: #3a4c73;
}

#row-registration {
  margin: 20px;
}

#educational-fields {
  width: 80%;
  margin: 10px;
  border: solid 1px black;
  padding: 5px;
}

@media only screen and (max-width: 1200px) {
  form input {
    width: 65vw;
  }
}
</style>
