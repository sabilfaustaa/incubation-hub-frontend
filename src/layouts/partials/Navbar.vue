<template>
  <header
    class="header navbar navbar-expand-lg navbar-sticky navbar-dark bg-dark"
    :class="{
      'navbar-stuck': isStuck,
      'position-absolute': absolute,
      'border-bottom': borderBottom,
      'fixed-top': fixedTop,
      'navbar-sticky': navbarSticky,
      'border-bottom border-light': isBorder
    }"
  >
    <div class="container px-3">
      <router-link class="navbar-brand pe-3" to="/">
        <img :src="logoImg" alt="JSC" width="100" />
      </router-link>

      <div id="navbarNav">
        <div v-if="!isMobileView">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li v-for="(item, idx) in navbarLinkData" :key="item.title" class="nav-item dropdown">
              <a v-if="item.link" class="nav-link" :href="item.link">
                {{ item.title }}
              </a>

              <template v-else>
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">{{
                  item.title
                }}</a>
                <div class="dropdown-menu p-0">
                  <div class="d-lg-flex">
                    <div
                      v-if="item.image"
                      class="mega-dropdown-column d-flex justify-content-center align-items-center rounded-3 rounded-end-0 px-0"
                      style="margin: -1px; background-color: #f3f6ff"
                    >
                      <img :src="item.image" alt="" />
                    </div>

                    <div v-for="(link, idx) in makeChunk(item.links)" class="mega-dropdown-column">
                      <div v-for="(item, idx) in link" class="py-3">
                        <h6 class="px-3 mb-1">{{ item.title }}</h6>
                        <ul class="list-unstyled">
                          <li v-for="(child, idx) in item.children">
                            <router-link
                              class="dropdown-item py-2"
                              :class="{ active: child.link.name === currentRouteName }"
                              :to="{ name: child.link.name }"
                              >{{ child.title }}
                            </router-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </li>
          </ul>
        </div>
      </div>

      <button class="navbar-toggler" type="button" @click="showMobileNav = !showMobileNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <router-link to="/sign-in">
        <a
          class="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex"
          href=""
          rel="noopener"
          target="_blank"
        >
          <Icon :icon="loginIcon" class="fs-4 lh-1 me-1" />
          &nbsp;Masuk
        </a>
      </router-link>
    </div>
  </header>

  <!--  Mobile Navbar-->
  <b-offcanvas
    placement="end"
    v-model="showMobileNav"
    title="Menu"
    header-class="border-bottom"
    footer-class="border-top"
  >
    <template v-slot:default>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li v-for="(item, idx) in navbarLinkData" :key="item.title" class="nav-item dropdown">
          <a v-if="item.link" class="nav-link" :href="item.link">{{ item.title }}</a>

          <template v-else>
            <a class="nav-link dropdown-toggle" v-b-toggle="`nav-collapse-${idx}`" href="#">{{
              item.title
            }}</a>

            <b-collapse :id="`nav-collapse-${idx}`" class="p-0">
              <div class="d-lg-flex">
                <div v-for="(link, idx) in item.links" class="mega-dropdown-column py-3">
                  <h6 v-if="item.title" class="mb-1">{{ link.title }}</h6>
                  <ul class="list-unstyled">
                    <li v-for="(child, idx) in link.children">
                      <router-link
                        class="dropdown-item py-2"
                        :class="{ active: child.link.name === currentRouteName }"
                        :to="{ name: child.link.name }"
                        >{{ child.title }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </b-collapse>
          </template>
        </li>
      </ul>
    </template>

    <template v-slot:footer>
      <div class="px-3 py-3">
        <a class="btn btn-primary w-100" href="" rel="noopener" target="_blank">
          <Icon :icon="loginIcon" class="fs-4 lh-1 me-1" />
          &nbsp;Masuk
        </a>
      </div>
    </template>
  </b-offcanvas>
</template>

<script lang="ts" setup>
import logoImg from '@/assets/images/logo-jsc.png'

import { onMounted, ref } from 'vue'

import { navbarLinkData } from '@/layouts/data'

import { Icon } from '@iconify/vue'
import loginIcon from '@iconify/icons-bx/log-in'
import router from '@/router'

const props = defineProps({
  isDark: {
    type: Boolean,
    default: false
  },
  isTransparent: {
    type: Boolean,
    default: true
  },
  stuck: {
    type: Boolean,
    default: false
  },
  absolute: {
    type: Boolean,
    default: true
  },
  borderBottom: {
    type: Boolean,
    default: false
  },
  fixedTop: {
    type: Boolean,
    default: false
  },
  navbarSticky: {
    type: Boolean,
    default: true
  },
  isBorder: {
    type: Boolean,
    default: false
  }
})

const transparent = ref(true)
const isStuck = ref(props.stuck)

const isMobileView = ref(false)
const showMobileNav = ref(false)

onMounted(() => {
  if (!props.stuck) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 700) {
        transparent.value = false
        isStuck.value = true
      } else {
        transparent.value = true
        isStuck.value = false
      }
    })
  }

  window.addEventListener('resize', () => {
    isMobileView.value = window.innerWidth < 990
  })

  isMobileView.value = window.innerWidth < 990
})

const makeChunk = (input: Array<any> | undefined) => {
  if (!input) return []
  const perChunk = 2 // items per chunk

  return input.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk)

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])
}

const currentRouteName = router.currentRoute.value.name
</script>
