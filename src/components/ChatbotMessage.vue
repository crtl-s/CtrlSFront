<!-- ChatMessage.vue -->
<template>
  <div class="chat-message" :class="{ 'user-message': message.sender === 'user' }">
    {{ message.text }}
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.chat-message {
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  background-color: #f0f0f0;
}

.user-message {
  background-color: #dff0d8;
}
</style>
