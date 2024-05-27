<template>
  <!-- Hero -->
  <section>
    <div class="position-relative overflow-hidden pt-5" style="min-height: 90vh">
      <!-- Image -->
      <b-container fluid class="position-relative position-lg-absolute top-0 start-0 h-100">
        <b-row class="h-100 me-n4 me-n2">
          <b-col lg="7" class="position-relative">
            <div class="d-none d-sm-block d-lg-none" style="height: 400px"></div>
            <div class="d-sm-none" style="height: 300px"></div>
            <Jarallax
              custom-class="jarallax position-absolute top-0 start-0 w-100 h-100 rounded-3 rounded-start-0 overflow-hidden"
              :options="{ speed: 0.3 }"
            >
              <div
                class="jarallax-img"
                :style="{
                  backgroundImage: `url('${heroImg}')`,
                  backgroundPosition: 'top !important'
                }"
              ></div>
            </Jarallax>
          </b-col>
        </b-row>
      </b-container>

      <b-container class="position-relative zindex-5 pt-lg-5 px-0 px-lg-3">
        <b-row class="pt-lg-5 mx-n4 mx-lg-n3">
          <b-col xl="6" lg="7" class="offset-lg-5 offset-xl-6 pb-5">
            <!-- Card -->
            <div class="card bg-dark border-light overflow-hidden py-4 px-2 p-sm-4">
              <span
                class="position-absolute top-0 start-0 w-100 h-100"
                style="background-color: rgba(255, 255, 255, 0.05)"
              ></span>
              <div class="card-body position-relative zindex-5">
                <p class="fs-xl fw-bold text-primary text-uppercase mb-3">Jakarta Smart city</p>
                <h1 class="display-5 text-light pb-3 mb-3 text-capitalize">Incubation Hub</h1>
                <p class="fs-lg text-light opacity-70 mb-5">
                  Mendorong inovasi berkelanjutan, mempercepat pengembangan solusi baru, dan
                  menanamkan budaya inovasi dalam organisasi.
                </p>
                <div class="d-flex flex-column flex-sm-row">
                  <a href="#" class="btn btn-primary shadow-primary btn-lg mb-3 mb-sm-0 me-sm-4"
                    >Ajukan Inkubasi</a
                  >
                </div>
              </div>
            </div>
          </b-col>
          <b-col lg="4" class="col-xxl-3 offset-lg-8 offset-xxl-9 pt-lg-5 mt-xxl-5"> </b-col>
        </b-row>
      </b-container>
    </div>
  </section>
</template>

<script lang="ts" setup>
import heroImg from '@/assets/images/img-banner.png'
import { Icon } from '@iconify/vue'
import Jarallax from '@/components/Jarallax.vue'
</script>
