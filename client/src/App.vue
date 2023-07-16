<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const appTitle = ref('MEVN')
const sidebar = ref(false)
const menuItems = ref([
  { title: 'Home', path: '/', icon: 'home' },
  { title: 'Sign Up', path: '/signup', icon: 'face' },
  { title: 'Sign In', path: '/signin', icon: 'lock_open' }
])
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon>{{ item.icon }}</v-icon>
          <div>{{ item.title }}</div>
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
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-container class="d-flex align-center justify-center w-100 h-100">
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<style scoped></style>
