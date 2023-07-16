<script setup lang="ts">
import type { IRegisterData } from '@/stores/types'
import { useAuthStore } from '@/stores/auth'
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

//data
const terms = ref<boolean>(false)
const registerData = reactive<IRegisterData>({
  username: '',
  email: '',
  first_name: '',
  last_name: '',
  password: '',
  password_confirm: ''
})
const errorMessage = ref<string>('')
const authStore = useAuthStore()
const router = useRouter()

//computed
const submitDisable = computed(() => {
  return (
    !terms.value ||
    !registerData.username ||
    !registerData.email ||
    !registerData.first_name ||
    !registerData.last_name ||
    !registerData.password ||
    !registerData.password_confirm
  )
})
//methods
async function signUp() {
  await authStore
    .register(registerData)
    .then(() => {
      router.replace({ name: 'signin' })
    })
    .catch((err) => {
      errorMessage.value = err.message
    })
}
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
        v-model="registerData.username"
        color="primary"
        label="Username"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="registerData.first_name"
        color="primary"
        label="First name"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="registerData.last_name"
        color="primary"
        label="Last name"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="registerData.email"
        color="primary"
        label="Email"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="registerData.password"
        color="primary"
        label="Password"
        placeholder="Enter your password"
        variant="underlined"
      ></v-text-field>
      <v-text-field
        v-model="registerData.password_confirm"
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

        <v-btn :disabled="submitDisable" @click="signUp" color="success">
          Complete Registration
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped></style>
