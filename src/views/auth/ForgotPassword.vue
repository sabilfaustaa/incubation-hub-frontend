<template>
  <!-- <Navbar /> -->

  <section class="position-relative h-100 pt-5 pb-4">
    <b-container
      class="d-flex flex-wrap justify-content-center justify-content-xl-start h-100 pt-5"
    >
      <div class="w-100 align-self-end pt-1 pt-md-4 pb-4" style="max-width: 526px">
        <h1 class="text-center text-xl-start">Lupa Password</h1>

        <b-form class="mb-2" @submit.prevent="signIn">
          <div v-if="error" class="text-danger pb-2">
            Masukan username dan password dengan benar
          </div>
          <div class="position-relative mb-4">
            <b-form-group label="Email" label-for="email" label-class="fs-base">
              <b-form-input
                id="email"
                type="email"
                class="form-control-lg"
                v-model="userData.email"
                required
              ></b-form-input>
              <b-form-invalid-feedback>Email wajib diisi!</b-form-invalid-feedback>
            </b-form-group>
          </div>

          <b-button variant="primary" size="lg" type="submit" class="shadow-primary w-100"
            >Lupa Password</b-button
          >
        </b-form>

        <router-link to="/sign-in">
          <a href="#" class="btn btn-link btn-lg w-100">Kembali Ke Halaman Login</a>
        </router-link>
        <hr class="my-4" />
        <!-- <h6 class="text-center mb-4">Or sign in with your social network</h6>
          <b-row class="row-cols-1 row-cols-sm-2">
            <b-col class="mb-3">
              <a href="#" class="btn btn-icon btn-secondary btn-google btn-lg w-100">
                <Icon :icon="GoogleIcon" class="fs-xl me-2" />
                Google
              </a>
            </b-col>
            <b-col class="mb-3">
              <a href="#" class="btn btn-icon btn-secondary btn-facebook btn-lg w-100">
                <Icon :icon="FacebookIcon" class="fs-xl me-2" />
                Facebook
              </a>
            </b-col>
          </b-row> -->
        <div class="" style="min-height: 150px"></div>
      </div>
    </b-container>

    <!-- Background -->
    <div
      class="position-absolute top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block"
      :style="{ backgroundImage: `url(${bg})` }"
    ></div>
  </section>
</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue'
import bg from '@/assets/images/img-login.png'
import PasswordInput from '@/components/PasswordInput.vue'
import { useFakeAuthStore } from '@/stores/fakeAuth'
import router from '@/router'
import { useRoute } from 'vue-router'

import { Icon } from '@iconify/vue'
import GoogleIcon from '@iconify/icons-bx/bxl-google'
import FacebookIcon from '@iconify/icons-bx/bxl-facebook'

import { ref } from 'vue'

const useFakeAuth = useFakeAuthStore()

const userData = ref({
  email: 'test@test.com',
  password: 'password'
})

const error = ref(false)

const route = useRoute()

const signIn = () => {
  if (useFakeAuth.signIn(userData.value.email, userData.value.password)) {
    return router.push('/dashboard')
  }
  error.value = true
}
</script>
<style lang="css">
.form-check-label {
  font-size: 1rem !important;
}
</style>
