<template>
  <div class="container">
    <div class="row" id="row-login">
      <div class="col vh-50">
        <form @submit.prevent="login">
          <input type="text" v-model="email" placeholder="Email"/>
          <input type="password" v-model="password" placeholder="Password"/>
          <button @click="login">Login</button>
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

#row-login {
  margin: 20px;
}

@media only screen and (max-width: 1200px) {
  form input {
    width: 65vw;
  }
}
</style>

<script>
import axios from 'axios'
import {inject} from "vue";
import {app} from "../main.js"
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    //TODO Snackbar sto sam ovdje stavila ne rade njih popraviti i redirect nakon uspješnog logina na homepage
    login() {

      axios.post('login', {
        email: this.email,
        password: this.password
      }).then((res) => {
        console.log(res.data);
        let user = inject('user', null);
        app.provide('user', res.data.user);
        user.value = res.data.user;
        this.$emit('show-snackbar', true, 'Successfully logged in.');
      }).catch((err) => {
        this.$emit('show-snackbar', false, 'Credentials are not correct!.');

      });

    }
  }
}
</script>