<template>
  <AccountLayout>
    <b-col md="8" class="offset-lg-1 pb-5 mb-2 mb-lg-4 pt-md-5 mt-n3 mt-md-0">
      <div class="ps-md-3 ps-lg-0 mt-md-2 py-md-4">
        <h1 class="h2 pt-xl-1 pb-3">Pengajuan Inkubasi</h1>

        <!-- Form Pengajuan -->
        <b-form @submit.prevent="submitForm">
          <b-row class="pb-2">
            <b-col sm="6" class="mb-4">
              <b-form-group
                label="Kategori Pengajuan"
                label-for="kategori"
                label-class="text-muted fs-base"
              >
                <b-form-select
                  id="kategori"
                  class="form-select-lg"
                  v-model="form.kategori"
                  :options="kategoriOptions"
                  required
                ></b-form-select>
                <b-form-invalid-feedback
                  >Harap pilih kategori pengajuan Anda!</b-form-invalid-feedback
                >
              </b-form-group>
            </b-col>

            <b-col sm="6" class="mb-4">
              <b-form-group
                label="Tanggal Pengajuan"
                label-for="tanggal"
                label-class="text-muted fs-base"
              >
                <b-form-input
                  id="tanggal"
                  type="date"
                  class="form-control-lg"
                  v-model="form.tanggalPengajuan"
                  required
                ></b-form-input>
                <b-form-invalid-feedback>Harap masukkan tanggal pengajuan!</b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col cols="12" class="mb-4">
              <b-form-group
                label="Dokumen Pengajuan"
                label-for="dokumen"
                label-class="text-muted fs-base"
              >
                <b-form-input
                  id="dokumen"
                  type="file"
                  class="form-control-lg"
                  v-model="form.dokumen"
                  required
                ></b-form-input>
                <b-form-invalid-feedback>Harap unggah dokumen pengajuan!</b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col cols="12" class="mb-4">
              <b-form-group
                label="Deskripsi Pengajuan"
                label-for="deskripsi"
                label-class="text-muted fs-base"
              >
                <b-form-textarea
                  id="deskripsi"
                  type="text"
                  class="form-control-lg"
                  rows="4"
                  placeholder="Tambahkan deskripsi pengajuan..."
                  v-model="form.deskripsi"
                  required
                ></b-form-textarea>
                <b-form-invalid-feedback
                  >Harap masukkan deskripsi pengajuan!</b-form-invalid-feedback
                >
              </b-form-group>
            </b-col>
          </b-row>
          <div class="d-flex mb-3">
            <b-button variant="secondary" type="reset" class="me-3">Batal</b-button>
            <b-button variant="primary" type="submit">Ajukan</b-button>
          </div>
        </b-form>
      </div>
    </b-col>
  </AccountLayout>
</template>

<script setup lang="ts">
import AccountLayout from '@/layouts/AccountLayout.vue'
import { ref } from 'vue'

const form = ref({
  kategori: '',
  tanggalPengajuan: '',
  dokumen: null,
  deskripsi: ''
})

const kategoriOptions = [
  { text: 'Pilih kategori', value: null },
  { text: 'Kategori A', value: 'A' },
  { text: 'Kategori B', value: 'B' },
  { text: 'Kategori C', value: 'C' }
]

const submitForm = () => {
  console.log('Form submitted', form.value)
  // Logic for form submission
}
</script>

<style scoped>
/* Custom styles for the form page */
</style>
