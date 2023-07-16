import { useAuthStore } from '@/stores/auth'
import { axiosInstance, axiosPrivateInstance } from '@/utils/axios'
import type { AxiosInstance } from 'axios'
import { watchEffect } from 'vue'

export function useApiPrivate(): AxiosInstance {
  const authStore = useAuthStore()

  watchEffect(() => {
    axiosInstance.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${authStore.accessToken}`
        }
        return config
      },
      (errors) => {
        return Promise.reject(errors)
      }
    )
    axiosInstance.interceptors.response.use(
      (response) => response,
      async (errors) => {
        const prevRequest = errors?.config
        if (
          (errors?.response?.status === 403 || errors?.response?.status === 401) &&
          !prevRequest.sent
        ) {
          prevRequest.sent = true
          await authStore.refresh()
          prevRequest.headers['Authorization'] = authStore.accessToken
          return axiosInstance(prevRequest)
        }
        return Promise.reject(errors)
      }
    )
  })

  return axiosPrivateInstance
}

export function useApi(): AxiosInstance {
  return axiosInstance
}
