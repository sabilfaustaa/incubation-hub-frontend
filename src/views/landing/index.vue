<template>
  <Navbar :absolute="false" />

  <Header />

  <ProgramHubSwiper />

  <AlurProses />

  <!-- <Services /> -->

  <!-- <CovidBanner /> -->

  <!-- <Feature /> -->

  <!-- <Brands /> -->

  <ManfaatSwiper />

  <!-- <Testimonial /> -->

  <Registrasi />

  <Footer />

  <BackToTop />
</template>

<script lang="ts" setup>
import Navbar from '@/layouts/partials/Navbar.vue'
import Header from '@/views/landing/components/Header.vue'
import Services from '@/views/landing/components/Services.vue'
import CovidBanner from '@/views/landing/components/CovidBanner.vue'
import Feature from '@/views/landing/components/Feature.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
import ProgramHubSwiper from '@/views/landing/components/ProgramHubSwiper.vue'
import AlurProses from '@/views/landing/components/AlurProses.vue'
import Brands from '@/views/landing/components/Brands.vue'
import Testimonial from '@/views/landing/components/Testimonial.vue'
import ManfaatSwiper from '@/views/landing/components/ManfaatSwiper.vue'
import Registrasi from '@/views/landing/components/Registrasi.vue'
import Footer from '@/views/landing/components/Footer.vue'
</script>
