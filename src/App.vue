<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import ChatbotInterface from './components/ChatbotInterface.vue'
import ChatbotMessage from './components/ChatbotMessage.vue'
</script>

<template>
  <NavBar />

  <RouterView />
  
  <ChatbotInterface />
</template>

<style scoped></style>
