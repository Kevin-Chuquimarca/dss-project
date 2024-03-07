import { BOOKS_API_URL } from '@/src/libs/contants'
import { Author, Book, BookAndAuthor, Loan } from '@/src/models/model'

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

export async function addAuthor(author: Omit<Author, 'id'>) {
  try {
    const res = await fetch(BOOKS_API_URL + '/authors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(author),
    })
    if (!res.ok) throw new Error('Error al agregar el autor')
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function updateAuthor(author: Author) {
  try {
    const res = await fetch(BOOKS_API_URL + '/authors', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(author),
    })
    if (!res.ok) throw new Error('Error al actualizar el autor')
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function deleteAuthor(id: number) {
  try {
    const res = await fetch(BOOKS_API_URL + '/authors/' + id, {
      method: 'DELETE',
    })
    if (!res.ok) throw new Error('Error al eliminar el autor')
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function getLoans() {
  try {
    const res = await fetch(BOOKS_API_URL + '/loans')
    const data: Loan[] = await res.json()
    return data
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function addLoan(loan: Omit<Loan, 'cod'>) {
  try {
    const res = await fetch(BOOKS_API_URL + '/loans', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loan),
    })
    if (!res.ok) throw new Error('Error al agregar el préstamo')
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function updateLoan(loan: Loan) {
  try {
    const res = await fetch(BOOKS_API_URL + '/loans', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loan),
    })
    if (!res.ok) throw new Error('Error al actualizar el préstamo')
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function deleteLoan(cod: number) {
  try {
    const res = await fetch(BOOKS_API_URL + '/loans/' + cod, {
      method: 'DELETE',
    })
    if (!res.ok) throw new Error('Error al eliminar el préstamo')
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function getBooksAndAuthors() {
  try {
    const res = await fetch(BOOKS_API_URL + '/books-authors')
    const data: BookAndAuthor[] = await res.json()
    return data
  } catch (error: any) {
    throw new Error(error)
  }
}
