'use client'

import { BookAndAuthor } from '@/src/models/model'
import { getBooksAndAuthors } from '@/src/utils/providers/provider'
import { useEffect, useState } from 'react'
import RequestBookModal from './request-book-modal'

export default function BookList() {
  const [books, setBooks] = useState<BookAndAuthor[]>([])

  useEffect(() => {
    getBooksAndAuthors()
      .then((data) => setBooks(data))
      .catch((error) => alert(error))
  }, [])

  return (
    <>
      <div className="flex flex-row justify-between mt-10 mx-10">
        <h2 className="font-bold text-2xl">Libros</h2>
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
              <td className="w-1/4">{book.name + ' ' + book.lastname}</td>
              <td className="w-1/4">{book.title}</td>
              <td className="w-1/4">
                <RequestBookModal
                  idBanner={localStorage.getItem('idBanner') ?? ''}
                  book={book}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
