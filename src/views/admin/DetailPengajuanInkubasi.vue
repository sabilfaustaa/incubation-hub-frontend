<template>
  <AccountLayout>
    <b-col md="8" class="offset-lg-1 pb-5 mb-2 mb-lg-4 pt-md-5 mt-n3 mt-md-0">
      <div class="ps-md-3 ps-lg-0 mt-md-2 py-md-4">
        <h1 class="h2 pt-xl-1 pb-3">Detail Pengajuan Inkubasi</h1>

        <!-- Detail Pengajuan Inkubasi -->
        <b-card>
          <b-card-header class="d-flex justify-content-between align-items-center">
            <h5 class="mb-0">{{ pengajuan.status }}</h5>
            <b-badge :variant="statusVariant(pengajuan.status)">
              {{ pengajuan.status }}
            </b-badge>
          </b-card-header>
          <b-card-body>
            <h6 class="card-subtitle mb-2 text-muted">
              Tanggal Pengajuan: {{ pengajuan.tanggalPengajuan }}
            </h6>
            <h6 class="card-subtitle mb-2 text-muted">Dokumen: {{ pengajuan.dokumen }}</h6>
            <h6 class="card-subtitle mb-2 text-muted">Deskripsi: {{ pengajuan.deskripsi }}</h6>
            <hr />
            <br />
            <h5>Informasi Pengaju</h5>
            <p><strong>Nama:</strong> {{ pengajuan.pengaju.nama }}</p>
            <p><strong>Email:</strong> {{ pengajuan.pengaju.email }}</p>
            <p><strong>Telepon:</strong> {{ pengajuan.pengaju.telepon }}</p>
            <p><strong>Alamat:</strong> {{ pengajuan.pengaju.alamat }}</p>
            <p><strong>Institusi:</strong> {{ pengajuan.pengaju.institusi }}</p>
          </b-card-body>
          <b-card-footer class="text-right">
            <b-button variant="secondary" @click="goBack">Kembali</b-button>
          </b-card-footer>
        </b-card>
      </div>
    </b-col>
  </AccountLayout>
</template>

<script setup lang="ts">
import AccountLayout from '@/layouts/AccountLayout.vue'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const pengajuanId = route.params.id

const pengajuan = ref({
  id: pengajuanId,
  status: 'Diajukan',
  tanggalPengajuan: '2024-05-01',
  dokumen: 'Dokumen A',
  deskripsi: 'Deskripsi A',
  pengaju: {
    nama: 'John Doe',
    email: 'john.doe@example.com',
    telepon: '(021) 1234-5678',
    alamat: 'Jl. Contoh No. 123, Jakarta',
    institusi: 'Universitas Contoh'
  }
})

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

const goBack = () => {
  router.push('/admin/pengajuan-inkubasi')
}
</script>

<style scoped>
/* Custom styles for the detail page */
</style>
