<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const isAuthenticated = computed(() => {
  return authStore.isAuthenticated
})
const appTitle = ref('MEVN')
const sidebar = ref(false)
const menuItems = ref([
  { title: 'Home', path: '/', icon: 'home' },
  { title: 'Sign Up', path: '/signup', icon: 'face' },
  { title: 'Sign In', path: '/signin', icon: 'lock_open' },
  { title: 'Profile', path: '/profile', icon: 'lock_open' }
])

const menuItemsFiltered = menuItems.value.filter((item) => {
  if (isAuthenticated.value) {
    return item
  }
  return item.path !== '/profile'
})
const user = computed(() => {
  return authStore.userDetail
})
</script>
<template>
  <header>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-item v-for="{ icon, title, path } in menuItemsFiltered" :key="title" :to="path">
          <v-icon>{{ icon }}</v-icon>
          <div>{{ title }}</div>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app class="">
      <span class="d-flex d-sm-none">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"> </v-app-bar-nav-icon>
      </span>
      <v-toolbar-title class="d-none d-sm-flex">
        <router-link to="/" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="d-none d-sm-flex">
        <v-btn flat v-for="item in menuItemsFiltered" :key="item.title" :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </header>
</template>

<style scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 0;
  list-style: none;
  gap: 2em;
  font-size: 2em;
}
</style>
