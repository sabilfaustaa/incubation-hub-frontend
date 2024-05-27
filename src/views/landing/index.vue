<template>
  <Navbar :absolute="false" />

  <Header />

  <ProgramHubSwiper />

  <!-- <Services /> -->

  <!-- <CovidBanner /> -->

  <!-- <Feature /> -->

  <!-- <Brands /> -->

  <!-- <Testimonial /> -->

  <!-- <NewsSwiper /> -->

  <Contact />

  <FinancialFooter />

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
import Brands from '@/views/landing/components/Brands.vue'
import Testimonial from '@/views/landing/components/Testimonial.vue'
import NewsSwiper from '@/views/landing/components/NewsSwiper.vue'
import Contact from '@/views/landing/components/Contact.vue'
import FinancialFooter from '@/views/landing/components/Footer.vue'
</script>
