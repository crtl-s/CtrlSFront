<script setup>
import { ref } from 'vue'

const audioRef = ref(null)

const absolutePath = (path) => path

const playAudio = () => {
  if (audioRef.value) {
    audioRef.value.play()
  }
}
</script>

<template>
  <div style="min-height: 35vw; min-width: 80vw; border: 2px solid black; background-color: #e6e6e6;" class="m-5">
    <div>
      <h1
        class="container d-flex flex-column justify-content-center align-items-center m-2"
        style="color: black"
      >
        LEARNING STYLE TEST
      </h1>
      <h1
        class="container d-flex flex-column justify-content-left align-items-center m-4"
        style="color: white; background-color: #637bb0; width: 2rem"
      >
        2.
      </h1>
    </div>
    <h1
      class="container d-flex flex-column justify-content-left align-items-left m-4"
      style="color: black"
    >
      Example Title or Placeholder
    </h1>
    <audio
      ref="audioRef"
      controls
      style="width: 100%; background-color: #f2f2f2; border-radius: 8px; padding: 10px"
      class="container d-flex flex-column justify-content-center align-items-center"
    >
      <source :src="absolutePath('src/assets/audio/test.mp3')" type="audio/mp3" />
      Your browser does not support the audio tag.
    </audio>
    <div class="d-flex justify-content-center align-items-center mb-4" style="margin-top: 8rem">
      <button
        style="width: 10rem; height: 3rem"
        type="button"
        class="btn btn-lg btn-custom mx-2"
        data-bs-toggle="button"
      >
        NEXT
      </button>
    </div>
  </div>
</template>
