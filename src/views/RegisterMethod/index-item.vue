<template>
  <div style="height: 35rem;" class="container d-flex flex-column justify-content-center align-items-center">
    <h1 class="m-4" style="color: black">How do you want to register?</h1>
    <button
      style="width: 16rem"
      type="button"
      class="btn btn-lg btn-custom m-3"
      data-bs-toggle="button"
    >
      Through my school
    </button>
    <router-link to="/register-email" class="page-link">
    <button
      style="width: 16rem"
      type="button"
      class="btn btn-lg btn-custom m-3"
      data-bs-toggle="button"
    >
      With my personal email
    </button>
    </router-link>
  </div>
</template>
