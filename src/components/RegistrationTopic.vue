<template>
  <div class="container">
    <div class="row">
      <div class="col vh-50 text-center">
        <p>Here you can add topics which you would like to learn or expand your knowledge on</p>
        <form>
          <div class="container">
            <div class="row d-flex flex-row justify-content-end">
              <div class="col-6">
                <h2>TOPIC</h2>
              </div>
              <div class="col-6">
                <h2>LEVEL</h2>
              </div>
            </div>
            <div
              class="row d-flex flex-row justify-content-end"
              v-for="(topic, index) in topics"
              :key="index"
            >
              <div class="col-6">
                <input
                  type="text"
                  v-model="topic.name"
                  @input="getSuggestions(topic.name)"
                  placeholder="Topic"
                />
                <ul v-if="topic.suggestions.length > 0">
                  <li
                    v-for="(suggestion, i) in topic.suggestions"
                    :key="i"
                    @click="selectSuggestion(topic, suggestion)"
                  >
                    {{ suggestion }}
                  </li>
                </ul>
              </div>
              <div class="col-6">
                <select v-model="topic.level">
                  <option v-for="option in options" :value="option.value" :key="option.value">
                    {{ option.label }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="container d-flex flex-column justify-content-center align-items-center">
      <button @click="addTopic" id="add-topic-btn" type="button">Add another topic</button>
      <hr />
      <button @click="submitTopics" type="button">Submit</button>
    </div>
  </div>
</template>

<style scoped>
h1,
h2,
p {
  color: #3A4C73;
}
form {
  text-align: center;
}
form input,
select {
  margin: 10px;
  border: solid 1px black;
  padding: 5px;
  font-size: 1em;
  height: 40px;
}
hr{
  margin: auto;
  width: 80%;
  color: #4B6295;
  opacity: 1;
}
button {
  background-color: #ff8c00;
  color: white;
  font-size: 1.3em;
  text-transform: uppercase;
  margin: 15px;
  display: block;
  padding: 7px;

  border: solid 1px #ff8c00;
}
#add-topic-btn:hover {
  background-color: #ffedd8;
  color: #ff8c00;
  border: solid 1px #ff8c00;
}
#add-topic {
  background-color: #637bb0;
  width: 100%;
}
#row-registration {
  margin: 20px;
}
</style>

<script>
export default {
  data() {
    return {
      topics: [{ name: '', level: 'beginner', suggestions: [] }],
      options: [
        { label: 'Beginner', value: 'beginner' },
        { label: 'Intermediate', value: 'intermediate' },
        { label: 'Expert', value: 'expert' }
      ]
    }
  },
  methods: {
    addTopic() {
      this.topics.push({ name: '', level: 'beginner', suggestions: [] })
    },
    submitTopics() {
      // Here you can access this.topics array containing all topics and their levels
      console.log(this.topics)
    },
    async getSuggestions(query) {
      // Make an asynchronous request to the backend to fetch topic suggestions based on the query
      try {
        const response = await fetch(`/api/topics?s=${query}`)
        const data = await response.json()
        const index = this.topics.length - 1 // Index of the current topic being typed
        this.$set(this.topics[index], 'suggestions', data.suggestions) // Update suggestions for the current topic
      } catch (error) {
        console.error('Error fetching suggestions:', error)
      }
    },
    selectSuggestion(topic, suggestion) {
      // Set the selected suggestion as the topic name
      topic.name = suggestion
      // Clear suggestions for the current topic
      topic.suggestions = []
    }
  }
}
</script>
