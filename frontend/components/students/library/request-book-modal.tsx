import { BookAndAuthor, Loan } from '@/src/models/model'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import { addLoan } from '@/src/utils/providers/provider'
import { BtnSubmit } from '@/components/customs/btn-submit'
import ModalTemplate from '@/components/customs/modal-template'

export default function RequestBookModal(props: {
  readonly book: BookAndAuthor
  readonly idBanner: string
}) {
  const [showModal, setShowModal] = useState(false)
  const { register, handleSubmit, formState } = useForm<Loan>({
    defaultValues: {
      isbn: props.book.isbn,
      dateLoan: new Date().toISOString(),
      idBanner: props.idBanner,
      state: 'pending',
    },
  })
  const onSubmit: SubmitHandler<Loan> = (data) => {
    addLoan(data)
      .then(() => {
        setShowModal(!showModal)
        alert('Solicitud de libro enviada')
      })
      .catch((error) => alert(error))
  }

  return (
    <ModalTemplate
      textButton="Solicitar Libro"
      showModal={showModal}
      setShowModal={setShowModal}
      btnLayout="btn-add"
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
            Fecha de Devolución
          </label>
          <input
            className="border rounded-lg p-3 mx-auto"
            placeholder="e.g. Viaje al Centro de la Tierra"
            type="date"
            {...register('dateReturn', { required: true })}
          />
          {formState.errors.dateReturn && <span>This field is required</span>}
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
