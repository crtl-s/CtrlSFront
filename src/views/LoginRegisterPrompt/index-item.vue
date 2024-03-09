<template>
  <div class="container d-flex flex-column justify-content-center align-items-center">
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/images/hero/progressa-hero-2.svg"
      style="height: 70vh"
    />
    <h1 style="color: black">Welcome, dear student, to Progressa</h1>
    <div class="button-container">
      <router-link to="/register-method" class="page-link">
        <button
          id="register-button-progressa"
          type="button"
          class="btn btn-lg btn-custom-register mx-2"
          data-bs-toggle="button"
        >
          REGISTER
        </button>
      </router-link>
      <router-link to="/about" class="page-link">
        <button
          id="login-button-progressa"
          type="button"
          class="btn btn-lg btn-custom mx-2"
          data-bs-toggle="button"
        >
          LOGIN
        </button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
#register-button-progressa {
  width: 10rem;
  height: 3rem;
  background-color: #ff8c00;
  border: solid 1px #ff8c00;
}
#register-button-progressa:hover {
  background-color: #ffedd8 !important;
  color: #ff8c00 !important;
  border: solid 1px #ff8c00;
}
#login-button-progressa {
  width: 10rem;
  height: 3rem;
  background-color: #3a4c73;
  border: solid 1px #3a4c73;
}
#login-button-progressa:hover {
  background-color: #e3e7f1 !important;
  color: #3a4c73 !important;
  border: solid 1px #3a4c73;
}
</style>
