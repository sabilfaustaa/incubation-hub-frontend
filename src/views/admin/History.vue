<template>
  <AccountLayout>
    <b-col md="8" class="offset-lg-1 pb-5 mb-2 mb-lg-4 pt-md-5 mt-n3 mt-md-0">
      <div class="ps-md-3 ps-lg-0 mt-md-2 py-md-4">
        <h1 class="h2 pt-xl-1 pb-3">Riwayat Pengajuan Inkubasi</h1>

        <!-- Daftar Riwayat Pengajuan Inkubasi -->
        <b-table :items="riwayatList" :fields="fields" responsive="sm" striped hover>
          <template #cell(status)="data">
            <b-badge :variant="statusVariant(data.item.status)">
              {{ data.item.status }}
            </b-badge>
          </template>
          <template #cell(dokumen)="data">
            <a href="" target="_blank" class="btn btn-sm btn-primary">Lihat File</a>
          </template>
        </b-table>
      </div>
    </b-col>
  </AccountLayout>
</template>

<script setup lang="ts">
import AccountLayout from '@/layouts/AccountLayout.vue'
import { ref } from 'vue'

const riwayatList = ref([
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

const fields = ref([
  { key: 'id', label: 'ID' },
  { key: 'status', label: 'Status' },
  { key: 'tanggalPengajuan', label: 'Tanggal Pengajuan' },
  { key: 'dokumen', label: 'Dokumen' },
  { key: 'deskripsi', label: 'Deskripsi' }
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
</script>

<style scoped>
/* Custom styles for the history page */
</style>
