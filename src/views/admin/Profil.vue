<template>
  <AccountLayout>
    <b-col md="8" class="offset-lg-1 pb-5 mb-2 mb-lg-4 pt-md-5 mt-n3 mt-md-0">
      <div class="ps-md-3 ps-lg-0 mt-md-2 py-md-4">
        <h1 class="h2 pt-xl-1 pb-3">Detail Akun</h1>

        <!-- Informasi Dasar -->
        <h2 class="h5 text-primary mb-4">Informasi Dasar</h2>
        <b-form class="border-bottom pb-3 pb-lg-4">
          <b-row class="pb-2">
            <b-col sm="6" class="mb-4">
              <b-form-group label="Nama Depan" label-for="fn" label-class="text-muted fs-base">
                <b-form-input
                  id="fn"
                  type="text"
                  class="form-control-lg"
                  v-model="userBasicData.firstName"
                  required
                ></b-form-input>
                <b-form-invalid-feedback>Harap masukkan nama depan Anda!</b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col sm="6" class="mb-4">
              <b-form-group label="Nama Belakang" label-for="ln" label-class="text-muted fs-base">
                <b-form-input
                  id="ln"
                  type="text"
                  class="form-control-lg"
                  v-model="userBasicData.lastName"
                  required
                ></b-form-input>
                <b-form-invalid-feedback
                  >Harap masukkan nama belakang Anda!</b-form-invalid-feedback
                >
              </b-form-group>
            </b-col>

            <b-col sm="6" class="mb-4">
              <b-form-group label="Alamat Email" label-for="email" label-class="text-muted fs-base">
                <b-form-input
                  id="email"
                  type="email"
                  class="form-control-lg"
                  v-model="userBasicData.email"
                  required
                ></b-form-input>
                <b-form-invalid-feedback
                  >Harap masukkan alamat email yang valid!</b-form-invalid-feedback
                >
              </b-form-group>
            </b-col>

            <b-col sm="6" class="mb-4">
              <b-form-group
                label="Nomor Telepon (opsional)"
                label-for="phone"
                label-class="text-muted fs-base"
              >
                <b-form-input
                  id="phone"
                  type="text"
                  class="form-control-lg"
                  v-mask="'(##) ####-####'"
                  placeholder="__ ____-____"
                  v-model="userBasicData.phone"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>

            <b-col cols="12" class="mb-4">
              <b-form-group label="Bio (opsional)" label-for="bio" label-class="text-muted fs-base">
                <b-form-textarea
                  id="bio"
                  type="text"
                  class="form-control-lg"
                  rows="4"
                  placeholder="Tambahkan bio singkat..."
                  v-model="userBasicData.bio"
                  required
                ></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>

        <!-- Alamat -->
        <h2 class="h5 text-primary pt-1 pt-lg-3 my-4">Alamat</h2>
        <b-form class="border-bottom pb-2 pb-lg-4">
          <b-row class="pb-2">
            <b-col sm="6" class="mb-4">
              <b-form-group label="Negara" label-for="country" label-class="text-muted fs-base">
                <b-form-select
                  id="country"
                  class="form-select-lg"
                  v-model="userAddressData.country"
                  :options="countryOptions"
                ></b-form-select>
                <b-form-invalid-feedback>Harap pilih negara Anda!</b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col sm="6" class="mb-4">
              <b-form-group label="Provinsi" label-for="state" label-class="text-muted fs-base">
                <b-form-select
                  id="state"
                  class="form-select-lg"
                  v-model="userAddressData.state"
                  :options="stateOptions"
                ></b-form-select>
                <b-form-invalid-feedback>Harap pilih provinsi Anda!</b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col sm="6" class="mb-4">
              <b-form-group label="Kota" label-for="city" label-class="text-muted fs-base">
                <b-form-select
                  id="city"
                  class="form-select-lg"
                  v-model="userAddressData.city"
                  :options="cityOptions"
                ></b-form-select>
                <b-form-invalid-feedback>Harap pilih kota Anda!</b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col sm="6" class="mb-4">
              <b-form-group label="Kode Pos" label-for="zip" label-class="text-muted fs-base">
                <b-form-input
                  id="zip"
                  type="text"
                  class="form-control-lg"
                  v-model="userAddressData.zip"
                  required
                ></b-form-input>
                <b-form-invalid-feedback>Harap masukkan kode pos Anda!</b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col cols="12" class="mb-4">
              <b-form-group label="Alamat " label-for="address1" label-class="text-muted fs-base">
                <b-form-input
                  id="address1"
                  type="text"
                  class="form-control-lg"
                  v-model="userAddressData.address1"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <div class="d-flex mb-3">
            <b-button variant="secondary" type="reset" class="me-3">Batal</b-button>
            <b-button variant="primary" type="submit">Simpan perubahan</b-button>
          </div>
        </b-form>
      </div>
    </b-col>
  </AccountLayout>
</template>

<script setup lang="ts">
import AccountLayout from '@/layouts/AccountLayout.vue'
import { ref } from 'vue'

const userBasicData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  bio: ''
})

const userAddressData = ref({
  country: '',
  state: '',
  city: '',
  zip: '',
  address1: '',
  address2: ''
})

const countryOptions = [
  { text: 'Pilih negara', value: null },
  { text: 'Australia', value: 'Australia' },
  { text: 'Belgia', value: 'Belgia' },
  { text: 'Kanada', value: 'Kanada' },
  { text: 'Denmark', value: 'Denmark' },
  { text: 'Indonesia', value: 'Indonesia' }
]

const stateOptions = [
  { text: 'Pilih provinsi', value: null },
  { text: 'Jawa Barat', value: 'Jawa Barat' },
  { text: 'Jawa Tengah', value: 'Jawa Tengah' },
  { text: 'Jawa Timur', value: 'Jawa Timur' },
  { text: 'Sumatera Utara', value: 'Sumatera Utara' },
  { text: 'Bali', value: 'Bali' }
]

const cityOptions = [
  { text: 'Pilih kota', value: null },
  { text: 'Jakarta', value: 'Jakarta' },
  { text: 'Surabaya', value: 'Surabaya' },
  { text: 'Bandung', value: 'Bandung' },
  { text: 'Yogyakarta', value: 'Yogyakarta' },
  { text: 'Semarang', value: 'Semarang' }
]
</script>

<style scoped>
/* Custom styles for the profile page */
</style>
