<template>
  <b-col lg="3" md="4" class="border-end pb-5 mt-n5 px-5">
    <div class="position-sticky top-0">
      <div class="text-center pt-5">
        <div class="d-table position-relative mx-auto mt-2 mt-lg-4 pt-5 mb-3">
          <img
            :src="profileImage"
            class="d-block rounded-circle bg-secondary"
            width="120"
            alt="John Doe"
          />
          <b-button
            variant="light"
            size="sm"
            class="btn-icon bg-white border rounded-circle shadow-sm position-absolute bottom-0 end-0 mt-4"
            v-b-tooltip.hover.bottom
            title="Change picture"
          >
            <Icon :icon="RefreshIcon" />
          </b-button>
        </div>
        <h2 class="h5 mb-1">Defrizal</h2>
        <!-- <h2 class="h6 mb-1 fw-medium">Role User</h2> -->
        <p class="mb-3 pb-3">defrizal@gmail.com</p>
        <b-button
          variant="secondary"
          class="w-100 d-md-none mt-n2 mb-3"
          data-bs-toggle="collapse"
          data-bs-target="#account-menu"
        >
          <Icon :icon="UserDetailIcon" class="fs-xl me-2" />
          Account menu
          <Icon :icon="ChevronDownIcon" class="fs-lg ms-1" />
        </b-button>

        <div id="account-menu" class="list-group list-group-flush collapse d-md-block">
          <p class="text-start">DASHBOARD</p>
          <router-link
            :to="{ name: 'admin.dashboard' }"
            class="list-group-item list-group-item-action d-flex align-items-center"
            :class="{ active: 'admin.dashboard' === currentRouteName }"
          >
            <Icon :icon="CollectionIcon" class="fs-xl opacity-60 me-2" />
            Dashboard
          </router-link>

          <br />

          <p class="text-start">INCUBATION</p>
          <router-link
            :to="{ name: 'admin.pengajuan-inkubasi' }"
            class="list-group-item list-group-item-action d-flex align-items-center"
            :class="{ active: 'admin.pengajuan-inkubasi' === currentRouteName }"
          >
            <Icon :icon="CollectionIcon" class="fs-xl opacity-60 me-2" />
            Pengajuan Inkubasi
          </router-link>
          <router-link
            :to="{ name: 'admin.history' }"
            class="list-group-item list-group-item-action d-flex align-items-center"
            :class="{ active: 'admin.history' === currentRouteName }"
          >
            <Icon :icon="CollectionIcon" class="fs-xl opacity-60 me-2" />
            History Inkubasi
          </router-link>

          <br />
          <p class="text-start">SETTINGS</p>
          <router-link
            :to="{ name: 'admin.profil' }"
            class="list-group-item list-group-item-action d-flex align-items-center"
            :class="{ active: 'admin.profil' === currentRouteName }"
          >
            <Icon :icon="CollectionIcon" class="fs-xl opacity-60 me-2" />
            Profil
          </router-link>
          <router-link
            :to="{ name: 'admin.notifikasi' }"
            class="list-group-item list-group-item-action d-flex align-items-center"
            :class="{ active: 'admin.notifikasi' === currentRouteName }"
          >
            <Icon :icon="BellIcon" class="fs-xl opacity-60 me-2" />
            Notifikasi
          </router-link>
        </div>
      </div>
    </div>
  </b-col>
</template>

<script setup lang="ts">
import profileImage from '@/assets/images/img-ijay.png'
import { Icon } from '@iconify/vue'
import RefreshIcon from '@iconify/icons-bx/refresh'
import UserDetailIcon from '@iconify/icons-bx/bxs-user-detail'
import ChevronDownIcon from '@iconify/icons-bx/chevron-down'

import CogIcon from '@iconify/icons-bx/cog'
import LockAltIcon from '@iconify/icons-bx/lock-alt'
import BellIcon from '@iconify/icons-bx/bell'
import ChatIcon from '@iconify/icons-bx/chat'
import BookmarkIcon from '@iconify/icons-bx/bookmark'
import CollectionIcon from '@iconify/icons-bx/collection'
import CreditCardIcon from '@iconify/icons-bx/credit-card'
import LogOutIcon from '@iconify/icons-bx/log-out'

import router from '@/router'
import { BButton } from 'bootstrap-vue-next'
import { ref, watch } from 'vue'

let currentRouteName = ref(router.currentRoute.value.name)

watch(
  () => router.currentRoute.value.name,
  () => {
    currentRouteName.value = router.currentRoute.value.name
  }
)
</script>
