<template>
  <div class="container">
    <div class="row" id="row-registration">
      <div class="col vh-50 text-center">
        <p>Here you can add topics which you would like to learn or expand your knowledge on</p>
        <form>
          <div class="container ">
            <div class="row d-flex flex-row justify-content-end">
              <div class="col-6">
                <h2>TOPIC</h2>
                <input type="text" v-model="topic" placeholder="Topic" />
              </div>
              <div class="col-6">
                <h2>LEVEL</h2>
                <select v-model="selectedOption" @change="handleChange">
                  <option v-for="option in options" :value="option.value" :key="option.value">
                    {{ option.label }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="container d-flex flex-column justify-content-center align-items-center">
            <button id="add-topic" type="submit">Add another topic</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1,
h2,
p {
  color: black;
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
button {
  border: solid 1px black;
  background-color: #a04cb0;
  color: white;
  font-size: 1.3em;
  text-transform: uppercase;
  margin: 15px;
  display: block;
  padding: 7px;
}
#add-topic {
  background-color: #637bb0;
  width: 100%;
}
#row-registration{
    margin: 20px;
}
</style>

<script>
export default {
  data() {
    return {
      selectedOption: 'beginner',
      options: [
        { label: 'Beginner', value: 'beginner' },
        { label: 'Intermediate', value: 'intermediate' },
        { label: 'Expert', value: 'expert' }
      ]
    }
  },
  methods: {
    handleChange() {
      // Handle selection change if needed
    }
  }
}
</script>
