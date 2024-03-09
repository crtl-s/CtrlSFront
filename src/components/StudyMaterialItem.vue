<template>
  <div class="col-md-3 mb-3">
    <div class="card h-100 flex-fill">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{ entry.title }}</h5>
        <p class="card-text flex-fill" v-if="entry.condition">{{ entry.content }}</p>
        <p v-else>Condition not met</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  entry: Object
})
</script>
