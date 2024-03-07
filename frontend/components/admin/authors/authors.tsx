'use client'

import { Author } from '@/src/models/model'
import { deleteAuthor, getAuthors } from '@/src/utils/providers/provider'
import { useEffect, useState } from 'react'
import AddAuthorModal from './add-author-modal'
import UpdateAuthorModal from './update-author-modal'
import Image from 'next/image'

export default function Authors() {
  const [authors, setAuthors] = useState<Author[]>([])

  useEffect(() => {
    getAuthors()
      .then((data) => setAuthors(data))
      .catch((error) => alert(error))
  }, [])

  function handleDelete(id: number) {
    deleteAuthor(id)
      .then(() => {
        setAuthors((prev) => prev.filter((author) => author.id !== id))
        alert('Autor eliminado')
      })
      .catch((error) => alert(error))
  }

  return (
    <>
      <div className="flex flex-row justify-between m-10">
        <h2 className="font-bold text-2xl">Autores</h2>
        <AddAuthorModal setAuthors={setAuthors} />
      </div>
      <hr className="my-5" />
      <table className="mx-auto w-full text-center p-4">
        <thead>
          <tr>
            <th className="w-auto">COD</th>
            <th className="w-auto">Nombres</th>
            <th className="w-auto">Apellidos</th>
            <th className="w-auto"></th>
          </tr>
        </thead>
        <tbody className="space-y-3">
          {authors.map((author) => (
            <tr className="bg-white px-10 py-5 rounded-xl" key={author.id}>
              <td className="w-auto">{author.id}</td>
              <td className="w-auto">{author.name}</td>
              <td className="w-auto">{author.lastname}</td>
              <td className="w-auto">
                <UpdateAuthorModal setAuthors={setAuthors} author={author} />
                <button className="" onClick={() => handleDelete(author.id)}>
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
