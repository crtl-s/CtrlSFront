<script setup lang="ts"></script>

<template>
  <div class="container d-flex flex-column justify-content-center align-items-center">
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/images/hero/progressa-hero.svg"
      width="550"
      height="550"
    />

    <router-link to="/login-register-prompt" class="page-link">
      <button type="button" class="btn btn-lg btn-custom" data-bs-toggle="button">
        Start my future
      </button>
    </router-link>
  </div>
</template>
