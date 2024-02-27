import { STUDENTS_API_URL } from '@/src/libs/contants'
import { User } from '@/src/models/model'

export async function login(user: User) {
  console.log(user)
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
    return res.text()
  } catch (error: any) {
    throw new Error(error)
  }
}
