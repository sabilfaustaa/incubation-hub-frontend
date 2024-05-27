<template>
  <footer class="footer bg-dark border-top border-light pt-5 pb-4 pb-lg-5" data-bs-theme="dark">
    <b-container class="pt-lg-4">
      <b-row class="pb-5">
        <b-col lg="4" md="6">
          <div class="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4">
            <img :src="logo" width="140" alt="JSC" />
          </div>
        </b-col>
        <b-col xl="6" lg="7" md="5" class="offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
          <div id="footer-links" class="row">
            <b-col lg="4">
              <h6 class="mb-2">
                <a
                  href="#useful-links"
                  class="d-block text-dark dropdown-toggle d-lg-none py-2"
                  v-b-toggle.useful_links
                  >Useful Links</a
                >
              </h6>
              <b-collapse id="useful_links" class="d-lg-block" data-bs-parent="#footer-links">
                <ul class="nav flex-column pb-lg-1 mb-lg-3">
                  <li class="nav-item">
                    <a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">Beranda</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">Kontak</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">Blog</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">Karir</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">News</a>
                  </li>
                </ul>
              </b-collapse>
            </b-col>
            <b-col xl="4" lg="5" class="pt-2 pt-lg-0">
              <h6 class="mb-2">Kontak Kami</h6>
              <a href="mailto:email@example.com" class="fw-medium">email@example.com</a>
            </b-col>
          </div>
        </b-col>
      </b-row>
      <hr class="py-4 text-white" />
      <p class="nav d-block fs-lg text-center text-md-start pb-2 pb-lg-0 mb-0">
        <span class="text-light opacity-75">
          Hak cipta &copy; 2021 JSC. Seluruh hak cipta dilindungi undang-undang dan terdaftar pada
          <br />
          Direktorat Jendral Kekayaan Intelektual Republik Indonesia.
        </span>
      </p>
    </b-container>
  </footer>
</template>

<script setup lang="ts">
import logo from '@/assets/images/logo-jsc.png'
import { Icon } from '@iconify/vue'
import EnvelopeIcon from '@iconify/icons-bx/bx-envelope'
</script>
