import { BOOKS_API_URL } from '@/src/libs/contants'
import { Author, Book } from '@/src/models/model'

export async function getBooks() {
  try {
    const res = await fetch(BOOKS_API_URL + '/books')
    const data: Book[] = await res.json()
    return data
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function addBook(book: Book) {
  try {
    const res = await fetch(BOOKS_API_URL + '/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
    if (!res.ok) throw new Error('Error al agregar el libro')
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function updateBook(book: Book) {
  try {
    const res = await fetch(BOOKS_API_URL + '/books', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
    if (!res.ok) throw new Error('Error al actualizar el libro')
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function deleteBook(isbn: string) {
  try {
    const res = await fetch(BOOKS_API_URL + '/books/' + isbn, {
      method: 'DELETE',
    })
    if (!res.ok) throw new Error('Error al eliminar el libro')
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function getAuthors() {
  try {
    const res = await fetch(BOOKS_API_URL + '/authors')
    const data: Author[] = await res.json()
    return data
  } catch (error: any) {
    throw new Error(error)
  }
}