<template>
  <div class="container d-flex flex-column justify-content-center align-items-center">
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/images/hero/progressa-hero.svg"
      width="500"
      height="500"
    />
    <h1 style="color: black">Welcome, dear student, to Progressa</h1>
    <div class="button-container">
      <router-link to="/register-method" class="page-link">
        <button
          style="width: 10rem; height: 3rem"
          type="button"
          class="btn btn-lg btn-custom-register mx-2"
          data-bs-toggle="button"
        >
          REGISTER
        </button>
      </router-link>
      <router-link to="/about" class="page-link">
        <button
          style="width: 10rem; height: 3rem"
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
