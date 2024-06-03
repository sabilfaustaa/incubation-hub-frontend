<template>
  <AccountLayout>
    <b-col md="8" class="offset-lg-1 pb-5 mb-2 mb-lg-4 pt-md-5 mt-n3 mt-md-0">
      <div class="ps-md-3 ps-lg-0 mt-md-2 py-md-4">
        <h1 class="h2 pt-xl-1 pb-3">Dashboard</h1>

        <!-- Statistik Pengguna -->
        <h2 class="h5 text-primary mb-4">Statistik Pengguna</h2>
        <b-row class="mb-4">
          <b-col sm="6">
            <b-card class="text-center">
              <b-card-text>
                <h3>{{ totalUsers }}</h3>
                <p class="text-muted">Total Pengguna</p>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col sm="6">
            <b-card class="text-center">
              <b-card-text>
                <h3>{{ totalProjects }}</h3>
                <p class="text-muted">Total Pengajuan</p>
              </b-card-text>
            </b-card>
          </b-col>
          <!-- <b-col sm="4">
            <b-card class="text-center">
              <b-card-text>
                <h3>{{ totalTrainings }}</h3>
                <p class="text-muted">Total Pelatihan</p>
              </b-card-text>
            </b-card>
          </b-col> -->
        </b-row>

        <!-- Ringkasan Aktivitas -->
        <h2 class="h5 text-primary mb-4">Ringkasan Aktivitas</h2>
        <b-row class="mb-4">
          <b-col>
            <b-card>
              <b-card-header> Pengajuan Inkubasi Terbaru </b-card-header>
              <b-list-group flush>
                <b-list-group-item v-for="project in recentProjects" :key="project.id">
                  {{ project.title }} - {{ project.date }}
                </b-list-group-item>
              </b-list-group>
            </b-card>
          </b-col>
          <b-col>
            <b-card>
              <b-card-header> Pelatihan Terbaru </b-card-header>
              <b-list-group flush>
                <b-list-group-item v-for="training in recentTrainings" :key="training.id">
                  {{ training.title }} - {{ training.date }}
                </b-list-group-item>
              </b-list-group>
            </b-card>
          </b-col>
          <b-col>
            <b-card>
              <b-card-header> Notifikasi Terbaru </b-card-header>
              <b-list-group flush>
                <b-list-group-item
                  v-for="notification in recentNotifications"
                  :key="notification.id"
                >
                  {{ notification.message }} - {{ notification.date }}
                </b-list-group-item>
              </b-list-group>
            </b-card>
          </b-col>
        </b-row>

        <!-- Chart -->
        <h2 class="h5 text-primary mb-4">Data Visualisasi</h2>
        <b-card class="mb-4">
          <apexchart
            type="line"
            height="350"
            :options="chartOptions"
            :series="chartSeries"
          ></apexchart>
        </b-card>
      </div>
    </b-col>
  </AccountLayout>
</template>

<script setup lang="ts">
import AccountLayout from '@/layouts/AccountLayout.vue'
import { ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const totalUsers = ref(1200)
const totalProjects = ref(300)
const totalTrainings = ref(150)

const recentProjects = ref([
  { id: 1, title: 'Project A', date: '2024-05-01' },
  { id: 2, title: 'Project B', date: '2024-05-02' },
  { id: 3, title: 'Project C', date: '2024-05-03' }
])

const recentTrainings = ref([
  { id: 1, title: 'Training A', date: '2024-05-01' },
  { id: 2, title: 'Training B', date: '2024-05-02' },
  { id: 3, title: 'Training C', date: '2024-05-03' }
])

const recentNotifications = ref([
  { id: 1, message: 'Notification A', date: '2024-05-01' },
  { id: 2, message: 'Notification B', date: '2024-05-02' },
  { id: 3, message: 'Notification C', date: '2024-05-03' }
])

const chartOptions = ref({
  chart: {
    id: 'basic-line',
    toolbar: {
      show: false
    }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  }
})

const chartSeries = ref([
  {
    name: 'Pengguna',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 150, 160, 170]
  },
  {
    name: 'Pengajuan',
    data: [20, 29, 37, 36, 44, 45, 50, 58, 62, 69, 80, 90]
  },
  {
    name: 'Pelatihan',
    data: [10, 15, 23, 32, 35, 40, 45, 50, 55, 60, 65, 70]
  }
])
</script>

<style scoped>
/* Custom styles for the dashboard page */
</style>
