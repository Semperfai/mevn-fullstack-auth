<script setup lang="ts">
import type { ILoginData } from '@/stores/types'
import { useAuthStore } from '@/stores/auth'
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

//data
const visible = ref<boolean>(false)
const loginData = reactive<ILoginData>({
  email: '',
  password: ''
})
const errorMessage = ref<string>('')
const authStore = useAuthStore()
const router = useRouter()

//computed
const submitDisable = computed(() => !loginData.email || !loginData.password)

//methods
const signIn = async () => {
  await authStore
    .login(loginData)
    .then(() => {
      router.replace({ name: 'profile' })
    })
    .catch((err) => {
      errorMessage.value = err.message
    })
}
</script>
<template>
  <v-container class="d-flex align-center justify-center w-100 h-100">
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
        v-model="loginData.email"
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Forgot login password?</a
        >
      </div>

      <v-text-field
        v-model="loginData.password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-card class="mb-12" color="surface-variant" variant="tonal">
        <v-card-text class="text-medium-emphasis text-caption">
          Warning: After 3 consecutive failed login attempts, you account will be temporarily locked
          for three hours. If you must login now, you can also click "Forgot login password?" below
          to reset the login password.
        </v-card-text>
      </v-card>

      <v-btn
        @click="signIn"
        :disabled="submitDisable"
        block
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
      >
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <router-link class="text-blue text-decoration-none" to="/signup" rel="noopener noreferrer">
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </router-link>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped></style>
