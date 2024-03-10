import { LoginResponse } from '@/src/models/model'

export function saveUserInfo(data: LoginResponse) {
  localStorage.setItem('jwt', data.jwt)
  localStorage.setItem('username', data.username)
  localStorage.setItem('roles', data.roles)
  localStorage.setItem('idBanner', data.idBanner)
}
