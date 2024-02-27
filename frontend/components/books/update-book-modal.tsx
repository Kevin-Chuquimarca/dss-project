import { Author, Book } from '@/src/models/model'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { getAuthors, updateBook } from '@/src/utils/providers/provider'
import { BtnSubmit } from '../customs/btn-submit'
import ModalTemplateImg from '../customs/modal-template-img'

export default function UpdateBookModal(props: {
  readonly setBooks: Dispatch<SetStateAction<Book[]>>
  readonly book: Book
}) {
  const [showModal, setShowModal] = useState(false)
  const [authors, setAuthors] = useState<Author[]>([])
  const { register, handleSubmit, formState } = useForm<Book>()
  const onSubmit: SubmitHandler<Book> = (data) => {
    updateBook(data)
      .then(() => {
        props.setBooks((prev) => [...prev, data])
        setShowModal(!showModal)
        alert('Libro Actualizado')
      })
      .catch((error) => alert(error))
  }

  useEffect(() => {
    getAuthors()
      .then((data) => setAuthors(data))
      .catch((error) => alert(error))
  }, [])

  return (
    <ModalTemplateImg
      nameSVG="edit"
      alt="Actualizar"
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="font-bold text-xl">Actualizar Libro</h3>
        <p>Crear un nuevo libro</p>
        <hr className="my-5" />
        <div className="space-y-3">
          <label className="flex" htmlFor="isbn">
            ISBN
          </label>
          <input
            className="border rounded-lg p-3"
            placeholder="e.g. 325-5215-256834"
            readOnly
            {...register('isbn', { required: true, value: props.book.isbn })}
          />
          {formState.errors.isbn && <span>This field is required</span>}
          <label className="flex" htmlFor="title">
            Título
          </label>
          <input
            className="border rounded-lg p-3"
            placeholder="e.g. Viaje al Centro de la Tierra"
            {...register('title', { required: true, value: props.book.title })}
          />
          {formState.errors.title && <span>This field is required</span>}
          <label className="flex" htmlFor="id">
            Autor
          </label>
          <select
            className="border rounded-lg p-3 w-full"
            {...register('id', { required: true, value: props.book.id })}
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
    </ModalTemplateImg>
  )
}
