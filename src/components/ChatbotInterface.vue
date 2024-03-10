<script setup>
import ChatbotMessage from './ChatbotMessage.vue'
</script>
<!-- ChatInterface.vue -->
<template>
  <div class="chat-interface" :class="{ 'chat-interface': true, expanded: isExpanded }">
    <div class="toggle-icon" @click="toggleChat">
      <img src="../assets/images/favicon/progressa-mini.png" alt="Chat Icon" width="100" />
    </div>
    <div class="messages" v-show="isExpanded" ref="messagesContainer">
      <div class="message" v-for="(message, index) in messages" :key="index">
        <ChatbotMessage :message="message" />
      </div>
      <input
        id="chatbot-input-field"
        type="text"
        v-model="userMessage"
        @keyup.enter="sendMessage"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
      messages: [],
      userMessage: ''
    }
  },
  methods: {
    toggleChat() {
      this.isExpanded = !this.isExpanded
      this.scrollToBottom()
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.messagesContainer
        container.scrollTop = container.scrollHeight
      })
    },
    sendMessage() {
      if (this.userMessage.trim() === '') return
      this.messages.push({ text: this.userMessage, sender: 'user' })
      // Send userMessage to the bot for processing
      // Once the bot responds, update messages with the bot's response
      this.userMessage = ''
    }
  }
}
</script>

<style>
.chat-interface {
  width: 350px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999;
  transition: height 0.9s ease;
}

.expanded {
  height: 400px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.messages {
  overflow-y: auto;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 60px;
}

.message {
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  background-color: #f0f0f0;
  word-wrap: break-word; /* Allow words to break */
  max-width: 80%; /* Set maximum width */
}

.user-message {
  background-color: #dff0d8;
}

#chatbot-input-field {
  position: fixed;
  bottom: 30px;
  right: 30px;
}

.expanded {
  height: 400px; /* Adjust height to your expanded size */
}

.toggle-icon {
  cursor: pointer;
  float: right;
}
</style>
