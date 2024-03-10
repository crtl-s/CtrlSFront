<template>
  <div class="col-md-3 mb-3" @click="handleClick">
    <div class="card h-100 flex-fill">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{ entry.title }}</h5>
        <p class="card-text flex-fill" v-if="entry.condition">{{ entry.content }}</p>
        <p v-else></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  entry: Object
})

const emits = defineEmits()

const handleClick = () => {
  emits('click', props.entry) // Emit the 'click' event with the entry object
}
</script>
