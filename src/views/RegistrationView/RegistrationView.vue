<script setup lang="ts">
import RegistrationBox from '../../components/RegistrationBox.vue'
import RegistrationTopic from '../../components/RegistrationTopic.vue'

// Get the image element
const waveImg = document.getElementById('progressa-wave-img')

// Function to add the class for animation
function startAnimation() {
  waveImg?.classList.add('move-up-down')
}

// Function to remove the class and stop the animation
function stopAnimation() {
  waveImg?.classList.remove('move-up-down')
}

// Example: Add the class when the component is mounted
document.addEventListener('DOMContentLoaded', () => {
  startAnimation()
})

// Example: Remove the class after a certain delay (e.g., 5 seconds)
setTimeout(() => {
  stopAnimation()
}, 5000) // Adjust the delay as needed
import RegistrationLearningStyle from '../../components/RegistrationLearningStyle.vue'
</script>

<template>
  <div class="container">
    <div style="margin-top: 6rem;" class="row d-flex align-items-center">
      <div class="col-5 d-flex justify-content-end">
        <img
          id="progressa-wave-img"
          src="../../assets/images/registration/progressa-wave-welcome.png"
          class="move-up-down"
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
@keyframes moveUpDown {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px); /* Adjust the distance to move up and down */
  }
}

.move-up-down {
  animation: moveUpDown 2s infinite; /* Adjust the animation duration as needed */
}

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
