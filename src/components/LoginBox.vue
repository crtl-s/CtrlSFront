<template>
    <div class="container">
      <div class="row" id="row-login">
        <div class="col vh-50">
          <form @submit.prevent="login">
            <input type="text" v-model="username" placeholder="Username" />
            <input type="password" v-model="password" placeholder="Password" />
            <button type="submit">Login</button>
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
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        // Add your login logic here
        // For demonstration purposes, we'll just log the credentials
        console.log('Username:', this.username);
        console.log('Password:', this.password);
  
        // Reset the form after login
        this.username = '';
        this.password = '';
      }
    }
  }
  </script>