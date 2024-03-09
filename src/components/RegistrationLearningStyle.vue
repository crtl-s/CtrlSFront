<template>
  <div class="container">
    <div class="row" id="row-registration">
      <p>
        Here, we can help you choose which type of learning you would prefer. In case you already
        know your preferred learning type, simply choose it in the dropdown.
      </p>
      <div>
        <select v-model="selectedOption">
          <option value="" disabled selected>Please select an option</option>
          <option v-for="(option, index) in options" :key="index" :value="option">
            {{ option }}
          </option>
        </select>
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
#row-registration {
  margin: 20px;
}
</style>

<script>
export default {
  data() {
    return {
      selectedOption: '',
      options: ['Visual learning', 'Auditory learning', 'Learning through analogy', 'Oversimplify']
    }
  }
}
</script>
