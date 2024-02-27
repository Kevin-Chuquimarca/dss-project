'use client'

import { Book } from '@/src/models/model'
import { deleteBook, getBooks } from '@/src/utils/providers/provider'
import { useEffect, useState } from 'react'
import AddBookModal from './add-book-modal'
import UpdateBookModal from './update-book-modal'
import Image from 'next/image'

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
      <div className="flex flex-row justify-between mt-10 mx-10">
        <h2 className="font-bold text-2xl">Libros</h2>
        <AddBookModal setBooks={setBooks} />
      </div>
      <hr className="my-5" />
      <table className="mx-auto w-fit text-center">
        <thead>
          <tr>
            <th className="w-1/4">ISBN</th>
            <th className="w-1/4">Autor</th>
            <th className="w-1/4">Título</th>
            <th className="w-1/4"></th>
          </tr>
        </thead>
        <tbody className="space-y-3">
          {books.map((book) => (
            <tr className="bg-white px-10 py-5 rounded-xl" key={book.isbn}>
              <td className="w-1/4">{book.isbn}</td>
              <td className="w-1/4">{book.id}</td>
              <td className="w-1/4">{book.title}</td>
              <td className="w-1/4">
                <UpdateBookModal setBooks={setBooks} book={book} />
                <button className="" onClick={() => handleDelete(book.isbn)}>
                  <Image
                    className="p-1"
                    src="/delete.svg"
                    alt="Eliminar"
                    width={35}
                    height={35}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
