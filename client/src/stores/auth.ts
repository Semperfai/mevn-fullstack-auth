import { defineStore } from 'pinia'
export interface IUser {
    id:number,
    username:string,
    email:string,
    first_name:string,
    last_name:string
}

export interface IState {
    user: IUser
}
export const userAuthStore = defineStore('auth', {
  state: ():IState => {
    return {
      user: {

      } as IUser
    }
  },
  getters: {
    user: (state:IState) => state.user,
    isAuthenticated: (state:IState) => state.user?.id ? true : false;
  },
  actions: {
    async login() {

    },
    async register() {
        
    },
    async getUser() {
        
    },
    async logout() {
        
    },
    async refresh() {
        
    }
  }
})
