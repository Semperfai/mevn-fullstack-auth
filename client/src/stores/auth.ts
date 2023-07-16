import { defineStore } from 'pinia'
import useApi from '@/composables/useApi'
import type { IState, IUser, ILoginData, IRegisterData } from './types'

export const useAuthStore = defineStore('auth', {
  state: (): IState => {
    return {
      user: {} as IUser,
      accessToken: '' as string
    }
  },
  getters: {
    userDetail: (state: IState) => state.user,
    isAuthenticated: (state: IState) => (state.user?.id ? true : false)
  },
  actions: {
    async login(payload: ILoginData) {
      try {
        const { data } = await useApi().post(`/api/auth/login`, payload)
        this.accessToken = data?.access_token
        return data
      } catch (err: any | Error) {
        throw err.response.message
      }
    },
    async register(payload: IRegisterData) {
      try {
        const { data } = await useApi().post(`/api/auth/register`, payload)
        return data
      } catch (error: Error | any) {
        throw error.message
      }
    },
    async getUser() {
      try {
        const { data } = await useApi().get(`/api/auth/user`)
        this.user = data
        return data
      } catch (err: any | Error) {
        throw err.message
      }
    },
    async logout() {
      try {
        const { data } = await useApi().get(`/api/auth/logout`)
        this.accessToken = ''
        this.user = {} as IUser
        return data
      } catch (err: any | Error) {
        throw err.response.message
      }
    },
    async refresh() {
      try {
        const { data } = await useApi().post(`/api/auth/refresh`)
        this.accessToken = data?.access_token
        return data
      } catch (err: any | Error) {
        throw err.response.message
      }
    }
  }
})
