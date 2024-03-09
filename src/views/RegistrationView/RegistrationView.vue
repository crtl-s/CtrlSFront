<script setup lang="ts">
import RegistrationBox from '../../components/RegistrationBox.vue'
import RegistrationTopic from '../../components/RegistrationTopic.vue'
import RegistrationLearningStyle from '../../components/RegistrationLearningStyle.vue'
</script>

<template>
  <div class="container vh-100">
    <div class="row d-flex align-items-center vh-100">
      <div class="col-5 d-flex justify-content-end">
        <img
          id="progressa-wave-img"
          src="../../assets/images/registration/progressa-wave-welcome.png"
        />
      </div>
      <div class="col-7 d-flex justify-content-start text-center">
        <div id="registration-container">
          <h1 class="m-3">REGISTER</h1>
          <RegistrationTopic />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

#progressa-wave-img {
  margin-right: -3vw;
  z-index: 5;
}
#registration-container {
  border: 1px solid black;
  width: 30vw;
  background-color: white;
}
#registration-container h1 {
  color: #3A4C73;
}
@media only screen and (max-width: 1200px) {
  #registration-container {
    width: 70vw;
  }
}
</style>
