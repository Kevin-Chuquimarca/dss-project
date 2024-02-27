import { BookType } from '@/src/models/model'
import ModalTemplate from '../customs/modal-template'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function AddBookModal() {
  const { register, handleSubmit, formState } = useForm<BookType>()
  const onSubmit: SubmitHandler<BookType> = (data) => {
    console.log(data)
  }

  return (
    <ModalTemplate textButton="AGREGAR LIBRO" btnLayout="btn-add">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Agregar Libro</h3>
        <p>Crear un nuevo libro</p>
        <label htmlFor="isbn">ISBN</label>
        <input
          placeholder="e.g. 325-5215-256834"
          {...register('isbn', { required: true })}
        />
        {formState.errors.isbn && <span>This field is required</span>}
      </form>
    </ModalTemplate>
  )
}
