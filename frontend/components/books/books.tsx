'use client'

import { Book } from '@/src/models/model'
import { deleteBook, getBooks } from '@/src/utils/providers/provider'
import { useEffect, useState } from 'react'
import AddBookModal from './add-book-modal'
import UpdateBookModal from './update-book-modal'

export default function Books() {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    getBooks()
      .then((data) => setBooks(data))
      .catch((error) => alert(error))
  }, [])

  function handleDelete(isbn: string) {
    deleteBook(isbn)
      .then(() => {
        setBooks((prev) => prev.filter((book) => book.isbn !== isbn))
        alert('Libro eliminado')
      })
      .catch((error) => alert(error))
  }

  return (
    <>
      <div className="flex flex-row justify-between m-10">
        <h2 className="font-bold text-2xl">Libros</h2>
        <AddBookModal setBooks={setBooks} />
      </div>
      <table className="mx-auto w-fit text-center">
        <thead>
          <tr>
            <th className="w-1/4">ISBN</th>
            <th className="w-1/4">Autor</th>
            <th className="w-1/4">Título</th>
            <th className="w-1/4"></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.isbn}>
              <td>{book.isbn}</td>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>
                <UpdateBookModal setBooks={setBooks} book={book} />
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(book.isbn)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
