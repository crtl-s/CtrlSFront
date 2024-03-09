<template>
  <div class="container mx-auto d-flex flex-column justify-content-center align-items-center">
    <div class="row mt-5 mb-2"><h1>Areas of study</h1></div>
    <div class="row m-3">
      <StudyMaterialItem
        v-for="(entry, index) in entries"
        :key="index"
        :entry="entry"
        @click="navigateToDetails"
      />
    </div>
  </div>
</template>

<script setup>
import StudyMaterialItem from '../../components/StudyMaterialItem.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const entries = [
  { id: 1, title: 'Entry 1', content: 'Content 1', condition: true },
  { id: 2, title: 'Entry 2', content: 'Content 2', condition: false },
  { id: 3, title: 'Entry 3', content: 'Content 3', condition: true },
  { id: 4, title: 'Entry 3', content: 'Content 3', condition: true },
  { id: 5, title: 'Entry 1', content: 'Content 1', condition: true },
  { id: 6, title: 'Entry 2', content: 'Content 2', condition: false },
  { id: 7, title: 'Entry 3', content: 'Content 3', condition: true },
  { id: 8, title: 'Entry 3', content: 'Content 3', condition: true }
  // Add more entries here based on your database
]

const navigateToDetails = (id) => {
  router.push({ name: 'topics', params: { id } })
}
</script>

<style>
h1 {
  color: #3a4c73;
}
</style>
