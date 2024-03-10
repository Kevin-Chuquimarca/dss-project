'use server'

import { STUDENTS_API_URL } from '@/src/libs/contants'

export async function getUserRole(idBanner: string) {
  //delete, only use in development
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
  const res = await fetch(STUDENTS_API_URL + '/getRole/' + idBanner, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Error al obtener el rol del usuario')
  }
  return await res.text()
}
