export interface IUser {
  id: number
  username: string
  email: string
  first_name: string
  last_name: string
}

export interface ILoginData {
  email: string
  password: string
}

export interface IState {
  user: IUser
  accessToken: string
}

export interface IRegisterData {
  username: string
  email: string
  first_name: string
  last_name: string
  password: string
  password_confirm: string
}
