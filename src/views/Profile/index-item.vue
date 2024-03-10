<template>
    <div class="page-container">
      <div class="profile-container">
        <div class="profile-card">
          <div class="profile-header">
            <img src="https://placekitten.com/150/150" alt="Profile Picture" />
            <h2>{{ user.name }}</h2>
            <p>{{ user.email }}</p>
          </div>
          <div class="profile-details">
            <div class="detail-item">
              <label>Username:</label>
              <span>{{ user.name }}</span>
            </div>
            <div class="detail-item">
              <label>Email:</label>
              <span>{{ user.email }}</span>
            </div>
            <div class="detail-item">
              <label>Date of Birth:</label>
              <span>{{ user.date_of_birth }}</span>
            </div>
            <!-- Add more details as needed -->
          </div>
        </div>
      </div>
      <div class="additional-container">
        <div class="profile-card">
          <div class="profile-header">
            <h2>Additional Information</h2>
          </div>
          <div class="profile-details">
            <div class="detail-item">
              <label>Field 1:</label>
              <span>Value 1</span>
            </div>
            <div class="detail-item">
              <label>Field 2:</label>
              <span>Value 2</span>
            </div>
            <div class="detail-item">
              <label>Field 3:</label>
              <span>Value 3</span>
            </div>
            <div style="max-width: 20rem; max-height: 20rem;">
                <RadarChart />
            </div>
            <!-- Add more details as needed -->
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  import RadarChart from '../../components/RadarChart.vue'
  </script>
  
  <style scoped>
  .page-container {
    display: flex;
    justify-content: space-between;
  }
  
  
  .additional-container {
    width: 70%;
    padding: 20px;
  }
  
  .profile-container {
    width: 30%;
    padding: 20px;
  }
  
  .profile-card {
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    height: 35rem;
  }
  
  .profile-header {
    text-align: center;
    padding: 20px;
    background-color: #3a4c73;
    color: #fff;
  }
  
  .profile-header img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }
  
  .profile-details {
    padding: 20px;
  }
  
  .detail-item {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
  
  .label {
    font-weight: bold;
  }
  
  span {
    margin-left: 10px;
    color: #555;
  }
  </style>
  
  <script>
  import {inject} from "vue";

  export default {
    data() {
      return {
       user:null
      };
    },
    created(){

      this.user = inject('user', null);
      console.log(this.user, 'user');
      if(this.user == null){
        //TODO redirect to login
      //OVO NESTO NE VALJA   this.$router.push('/login')
      }
    }
  };
  </script>