import { Author, Book } from '@/src/models/model'
import ModalTemplate from '@/components/customs/modal-template'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { addBook, getAuthors } from '@/src/utils/providers/provider'
import { BtnSubmit } from '@/components/customs/btn-submit'

export default function AddBookModal(props: {
  readonly setBooks: Dispatch<SetStateAction<Book[]>>
}) {
  const [showModal, setShowModal] = useState(false)
  const [authors, setAuthors] = useState<Author[]>([])
  const { register, handleSubmit, formState } = useForm<Book>()
  const onSubmit: SubmitHandler<Book> = (data) => {
    addBook(data)
      .then((resData) => {
        props.setBooks((prev) => [...prev, resData])
        setShowModal(!showModal)
        alert('Libro agregado')
      })
      .catch((error) => alert(error))
  }

  useEffect(() => {
    getAuthors()
      .then((data) => setAuthors(data))
      .catch((error) => alert(error))
  }, [])

  return (
    <ModalTemplate
      textButton="AGREGAR LIBRO"
      btnLayout="btn-add"
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="font-bold text-xl">Nuevo Libro</h3>
        <p>Crear un nuevo libro</p>
        <hr className="my-5" />
        <div className="space-y-3">
          <label className="flex" htmlFor="isbn">
            ISBN
          </label>
          <input
            className="border rounded-lg p-3"
            placeholder="e.g. 325-5215-256834"
            {...register('isbn', { required: true, maxLength: 17 })}
          />
          {formState.errors.isbn && <span>This field is required</span>}
          <label className="flex" htmlFor="title">
            Título
          </label>
          <input
            className="border rounded-lg p-3"
            placeholder="e.g. Viaje al Centro de la Tierra"
            {...register('title', { required: true, maxLength: 50 })}
          />
          {formState.errors.title && <span>This field is required</span>}
          <label className="flex" htmlFor="id">
            Autor
          </label>
          <select
            className="border rounded-lg p-3 w-full"
            {...register('id', { required: true })}
          >
            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name} {author.lastname}
              </option>
            ))}
          </select>
        </div>
        <hr className="my-5" />
        <div className="flex flex-col">
          <BtnSubmit
            textBtn="Confirmar"
            formState={formState}
            btnColor="btn-add mb-3"
          />
          <button
            className="btn-cancel"
            type="button"
            onClick={() => {
              setShowModal(!showModal)
            }}
          >
            Cancelar
          </button>
        </div>
      </form>
    </ModalTemplate>
  )
}
