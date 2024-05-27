<template>
  <AccountLayout>
    <b-col md="8" class="offset-lg-1 pb-5 mb-2 mb-lg-4 pt-md-5 mt-n3 mt-md-0">
      <div class="ps-md-3 ps-lg-0 mt-md-2 py-md-4">
        <h1 class="h2 pt-xl-1 pb-3">Notifikasi</h1>

        <!-- Daftar Notifikasi -->
        <b-list-group>
          <b-list-group-item
            v-for="notification in notifications"
            :key="notification.id"
            :variant="notification.read ? 'light' : 'primary'"
            class="d-flex justify-content-between align-items-center"
          >
            <div>
              <h5 class="mb-1">{{ notification.title }}</h5>
              <p class="mb-1">{{ notification.message }}</p>
              <small>{{ notification.date }}</small>
            </div>
            <!-- <b-badge :variant="notification.read ? 'secondary' : 'warning'">
              {{ notification.read ? 'Dibaca' : 'Belum Dibaca' }}
            </b-badge> -->
          </b-list-group-item>
        </b-list-group>
      </div>
    </b-col>
  </AccountLayout>
</template>

<script setup lang="ts">
import AccountLayout from '@/layouts/AccountLayout.vue'
import { ref } from 'vue'

const notifications = ref([
  { id: 1, title: 'Notifikasi A', message: 'Pesan notifikasi A', date: '2024-05-01', read: false },
  { id: 2, title: 'Notifikasi B', message: 'Pesan notifikasi B', date: '2024-05-02', read: true },
  { id: 3, title: 'Notifikasi C', message: 'Pesan notifikasi C', date: '2024-05-03', read: false }
])
</script>

<style scoped>
/* Custom styles for the notification page */
.b-list-group-item {
  cursor: pointer;
}
.b-list-group-item:hover {
  background-color: #f7f7f7;
}
</style>
