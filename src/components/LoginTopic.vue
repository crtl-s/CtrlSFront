<template>
  <div class="container">
    <div class="row">
      <div class="col vh-50 text-center">
        <form>
          <div class="container">
            <div class="row d-flex flex-row justify-content-end">
              <div class="col-6">
                <h2>Username</h2>
              </div>
              <div class="col-6">
                <h2>Password</h2>
              </div>
            </div>
            <div class="row d-flex flex-row justify-content-end">
              <div class="col-6">
                <input
                  type="text"
                  v-model="username"
                  placeholder="Enter your username"
                />
              </div>
              <div class="col-6">
                <input
                  type="password"
                  v-model="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="container d-flex flex-column justify-content-center align-items-center">
      <button @click="submitLogin" type="button">Login</button>
    </div>
  </div>
</template>

<style scoped>
  h2, p {
    color: #3a4c73;
  }
  form {
    text-align: center;
  }
  form input {
    margin: 10px;
    border: solid 1px black;
    padding: 5px;
    font-size: 1em;
    height: 40px;
  }
  button {
    background-color: #ff8c00;
    color: white;
    font-size: 1.3em;
    text-transform: uppercase;
    margin: 15px;
    display: block;
    padding: 7px;
    font-weight: bold;
    border: solid 1px #ff8c00;
  }
  button:hover {
    background-color: #3a4c73;
  }
</style>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    submitLogin() {
      console.log('Username:', this.username, 'Password:', this.password);
      // Implement your logic to submit the login
    }
  }
}
</script>