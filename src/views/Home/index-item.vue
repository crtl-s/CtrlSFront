<script setup></script>

<template>
  <div class="container d-flex flex-column justify-content-center align-items-center">
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/images/hero/progressa-hero-orange-2.svg"
      style="height: 80vh"
    />

    <router-link to="/login-register-prompt" class="page-link">
      <button
        type="button"
        class="btn btn-lg btn-custom"
        data-bs-toggle="button"
        id="homepage-button"
      >
        Start my future
      </button>
    </router-link>
  </div>
</template>

<style scoped>
#homepage-button {
  background-color: #3a4c73;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: bold;
}
#homepage-button:hover {
  background-color: #ff8c00 !important;
}
</style>
