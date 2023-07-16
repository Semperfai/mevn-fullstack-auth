<script setup lang="ts">
import { ref } from 'vue'

const terms = ref(false)
const first = ''
const last = ''
const password = ''
const confirmPassword = ''
const email = ''
const username = ''
</script>
<template>
  <v-container class="d-flex align-center justify-center w-100 h-100">
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
      title="Registration"
    >
      <v-text-field
        v-model="username"
        color="primary"
        label="Username"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="first"
        color="primary"
        label="First name"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="last"
        color="primary"
        label="Last name"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="email"
        color="primary"
        label="Email"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="password"
        color="primary"
        label="Password"
        placeholder="Enter your password"
        variant="underlined"
      ></v-text-field>
      <v-text-field
        v-model="confirmPassword"
        color="primary"
        label="Confirm Password"
        placeholder="Confirm your password"
        variant="underlined"
      ></v-text-field>

      <v-checkbox
        v-model="terms"
        color="secondary"
        label="I agree to site terms and conditions"
      ></v-checkbox>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="success">
          Complete Registration
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped></style>
