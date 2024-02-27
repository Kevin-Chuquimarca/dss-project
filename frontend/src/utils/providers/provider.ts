import { BOOKS_API_URL } from '@/src/libs/contants'
import { Book } from '@/src/models/model'

export async function getBooks() {
  try {
    const res = await fetch(BOOKS_API_URL + '/books')
    const data: Book[] = await res.json()
    return data
  } catch (error: any) {
    throw new Error(error)
  }
}
