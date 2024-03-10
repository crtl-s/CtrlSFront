<template>
  <div class="container mx-auto d-flex flex-column justify-content-center align-items-center">
    <div class="row mt-5 mb-2"><h1>YOUR STUDY TOPICS</h1></div>
    <div class="row m-3">
      <StudyMaterialItem
        v-for="(entry, index) in entries"
        :key="index"
        :entry="entry"
        @click="navigateToDetails(entry)"
      />
    </div>
  </div>
</template>

<script setup>
import StudyMaterialItem from '../../components/StudyMaterialItem.vue'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter()
const entries = ref([])

const navigateToDetails = (entry) => {
  console.log('Navigating to details:', entry);
  const plainEntry = Object.assign({}, entry);
  console.log('Navigating to details AFTER TRANSFORMATION:', plainEntry);
  router.push({
    name: 'details', // Replace with the name of the details route
    params: { entryId: plainEntry } // Pass entry.id as a route parameter
  })
}

const fetchStudentRoadmap = async () => {
  try {
    console.log('ssss')

    const response = await fetch('http://localhost:3000/studentRoadmap', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tema: 'Flutter state menangment',
        roadmap: [
          { title: 'Osnovno o flutteru', znanje: 'HIGH' },
          { title: 'Flutter widgeti', znanje: 'MEDIUM' },
          { title: 'BLoC', znanje: 'LOW' }
        ]
      })
    })

    console.log(response)

    const roadmapData = await response.json()
    const trimmed = JSON.parse(roadmapData['response'].slice(7, -3))
    console.log(trimmed[1]['lekcija'][1]['title'])
    entries.value = trimmed[1]['lekcija']
  } catch (error) {
    console.error('Error fetching student roadmap:', error)
  }
}

onMounted(() => {
  fetchStudentRoadmap()
})
</script>

<style>
body {
  background-image: url('../../assets/images/backgrounds/light-bg.svg');
  background-position: center center;
  background-size: cover;
}
h1 {
  color: white;
  text-align: center;
}
</style>
