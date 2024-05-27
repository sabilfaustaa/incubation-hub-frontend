<template>
  <AccountLayout>
    <b-col md="8" class="offset-lg-1 pb-5 mb-2 mb-lg-4 pt-md-5 mt-n3 mt-md-0">
      <div class="ps-md-3 ps-lg-0 mt-md-2 py-md-4">
        <div class="d-flex align-items-center justify-content-between pt-xl-1 pb-3">
          <h1 class="h2">Daftar Pengajuan Inkubasi</h1>
          <div>
            <router-link to="/admin/form-pengajuan-inkubasi">
              <div class="btn btn-primary">Ajukan Inkubasi</div>
            </router-link>
          </div>
        </div>

        <!-- Daftar Pengajuan Inkubasi -->
        <b-row>
          <b-col
            sm="12"
            md="6"
            lg="4"
            v-for="pengajuan in pengajuanList"
            :key="pengajuan.id"
            class="mb-4"
          >
            <b-card class="h-100">
              <b-card-header class="d-flex justify-content-between align-items-center">
                <b-badge :variant="statusVariant(pengajuan.status)">
                  {{ pengajuan.status }}
                </b-badge>
              </b-card-header>
              <b-card-body>
                <h6 class="card-subtitle mb-2 text-muted">
                  Tanggal Pengajuan: {{ pengajuan.tanggalPengajuan }}
                </h6>
                <p class="card-text">{{ pengajuan.deskripsi }}</p>
              </b-card-body>
              <b-card-footer class="text-right">
                <router-link to="/admin/detail-pengajuan-inkubasi">
                  <b-button class="btn-sm" variant="primary">Lihat Detail</b-button>
                </router-link>
              </b-card-footer>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </b-col>
  </AccountLayout>
</template>

<script setup lang="ts">
import AccountLayout from '@/layouts/AccountLayout.vue'
import { ref } from 'vue'

const pengajuanList = ref([
  {
    id: 1,
    status: 'Diajukan',
    tanggalPengajuan: '2024-05-01',
    dokumen: 'Dokumen A',
    deskripsi: 'Deskripsi A'
  },
  {
    id: 2,
    status: 'Disetujui',
    tanggalPengajuan: '2024-05-02',
    dokumen: 'Dokumen B',
    deskripsi: 'Deskripsi B'
  },
  {
    id: 3,
    status: 'Ditolak',
    tanggalPengajuan: '2024-05-03',
    dokumen: 'Dokumen C',
    deskripsi: 'Deskripsi C'
  }
])

const statusVariant = (status: string) => {
  switch (status) {
    case 'Diajukan':
      return 'warning'
    case 'Disetujui':
      return 'success'
    case 'Ditolak':
      return 'danger'
    default:
      return 'secondary'
  }
}

const viewDetails = (id: number) => {
  console.log('Viewing details for pengajuan id:', id)
  // Logic for viewing details
}
</script>

<style scoped>
/* Custom styles for the list page */
.b-card {
  transition: transform 0.2s;
}
.b-card:hover {
  transform: scale(1.02);
}
.b-card-header {
  background-color: #f7f7f7;
}
</style>
