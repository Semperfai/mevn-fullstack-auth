<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from '@/components/Navigation.vue'
</script>

<template>
  <v-app>
    <navigation />
    <router-view></router-view>
  </v-app>
</template>

<style scoped></style>
