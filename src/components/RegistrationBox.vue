<template>
  <div class="container">
    <div class="row" id="row-registration">
      <div class="col vh-50">
        <form>
          <input type="text" v-model="name" placeholder="Name" />
          <input type="text" v-model="surname" placeholder="Surname" />
          <input
            for="email"
            type="email"
            placeholder="Email"
            required
            v-model="email"
            @blur="validateEmail"
          />
          <input type="password" v-model="password" placeholder="Password" />
          <input type="password-repeat" v-model="password" placeholder="Repeat password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

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
  background-color: #FF8C00;
  color: white;
  font-size: 1.3em;
  font-weight: bold;
  text-transform: uppercase;
  margin: 15px;
  padding: 7px;
}
button:hover{
    background-color: #3A4C73;
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

<script>
export default {
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      password: '',
      repeatPassword: '',
      msg: {
        email: ''
      }
    }
  },
  methods: {
    validateEmail() {
      if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.msg['email'] = 'Please enter a valid email address'
      } else {
        this.msg['email'] = ''
      }
    }
  }
}
</script>
