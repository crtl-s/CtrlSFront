<template>
    <div>
      <canvas ref="radarChart"></canvas>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  
  export default {
    data() {
      return {
        chartData: {
          labels: ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4', 'Topic 5'],
          datasets: [
            {
              label: 'User Data',
              data: [3, 5, 2, 4, 1],
              backgroundColor: 'rgba(255, 140, 0, 0.2)',
              borderColor: 'rgba(255, 140, 0, 1)',
              borderWidth: 2,
              pointBackgroundColor: 'rgba(255, 140, 0, 1)',
            },
          ],
        },
        chartOptions: {
          scales: {
            r: {
              max: 5,
              min: 0,
              stepSize: 1,
            },
          },
        },
      };
    },
    mounted() {
      this.renderChart();
    },
    methods: {
      renderChart() {
        const ctx = this.$refs.radarChart.getContext('2d');
        new Chart(ctx, {
          type: 'radar',
          data: this.chartData,
          options: this.chartOptions,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>