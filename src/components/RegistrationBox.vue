<template>
  <div class="container">
    <div class="row" id="row-registration">
      <div class="col vh-50">
        <form>
          <input type="text" v-model="name" placeholder="Name"/>

          <input
              for="email"
              type="email"
              placeholder="Email"
              required
              v-model="email"
              @blur="validateEmail"
          />
          <input type="date" v-model="dateOfBirth" placeholder="Date of birth"/>

          <input type="password" v-model="password" placeholder="Password"/>

          <input type="password" v-model="repeatPassword" placeholder="Repeat password"/>
          <select v-model="educationalFieldId">
            <option v-for="field in educationalFields" :key="field.id" :value="field.id">{{ field.name }}</option>
          </select>
          <button  @click="submitFormm()">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {inject} from 'vue';

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
      }
    }
  },
  methods: {
    submitFormm() {
      event.preventDefault();
      //TODO DATUM DA SE UGASI KAD klikne vani i dase otvori kad klikne na njega - da kotrisnik nista ne može upisat.
      //TODO dropdown da ima stil isti kao svi
      console.log('usao');

        axios.post('register', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.repeatPassword,
          date_of_birth: this.dateOfBirth,
          education_type_id: this.educationalFieldId
        }).then((res) => {
          console.log(res.data);
          let user = inject('user', null);
          user.value = res.data.user;
        }).catch((err) => {
          console.log(err.response.data);
          //TODO Snackbar za erroer
          //TODO HEANDLE NAKON REGISTRACIJE
        });

    },

    validateEmail() {
      if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.msg['email'] = 'Please enter a valid email address'
      } else {
        this.msg['email'] = ''
      }
    }
  },
  created() {
    axios.get('educationType').then((res) => {
      this.educationalFields = res.data;
      console.log(this.educationalFields, 'try');
    });

    console.log('tu je');

    let user = inject('user', null);

    axios.get('isAuth').then((res) => {
      console.log('tu je 2', res.data);
      user.value = res.data.user;
    })

  },

}
</script>
<style scoped>
form {
  text-align: center;
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

@media only screen and (max-width: 1200px) {
  form input {
    width: 65vw;
  }
}
</style>

