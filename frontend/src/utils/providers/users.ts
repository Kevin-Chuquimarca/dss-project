import { STUDENTS_API_URL } from '@/src/libs/contants'
import { LoginResponse, User } from '@/src/models/model'

export async function login(user: User): Promise<LoginResponse> {
  try {
    const res = await fetch(STUDENTS_API_URL + '/generateToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    if (res.status === 404) {
      throw new Error('Su usuario no existe en el sistema')
    }
    if (!res.ok) {
      throw new Error('Usuario o contraseña incorrectos')
    }
    return res.json()
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function signUp(user: User) {
  try {
    const res = await fetch(STUDENTS_API_URL + '/addNewUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    if (!res.ok) {
      throw new Error('Error al registrar el usuario')
    }
  } catch (error: any) {
    throw new Error(error)
  }
}
