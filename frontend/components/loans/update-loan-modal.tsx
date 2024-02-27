import { Book, Loan } from '@/src/models/model'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { getBooks, updateLoan } from '@/src/utils/providers/provider'
import { BtnSubmit } from '../customs/btn-submit'
import ModalTemplateImg from '../customs/modal-template-img'

export default function UpdateLoanModal(props: {
  readonly setLoans: Dispatch<SetStateAction<Loan[]>>
  readonly loan: Loan
}) {
  const [showModal, setShowModal] = useState(false)
  const [books, setBooks] = useState<Book[]>([])
  const { register, handleSubmit, formState } = useForm<Loan>()
  const onSubmit: SubmitHandler<Loan> = (data) => {
    updateLoan(data)
      .then(() => {
        props.setLoans((prev) => [...prev, data])
        setShowModal(!showModal)
        alert('Préstamo Actualizado')
      })
      .catch((error) => alert(error))
  }

  useEffect(() => {
    getBooks()
      .then((data) => setBooks(data))
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
        <h3 className="font-bold text-xl">Actualizar Préstamo</h3>
        <p>Crear un nuevo préstamo</p>
        <hr className="my-5" />
        <div className="space-y-3">
        <label className="flex" htmlFor="isbn">
            ISBN
          </label>
          <input
            className="border rounded-lg p-3"
            placeholder="e.g. 325-5215-256834"
            readOnly
            {...register('isbn', { required: true, value: props.loan.isbn })}
          />
          {formState.errors.isbn && <span>This field is required</span>}
          <label className="flex" htmlFor="dateLoan">
            Fecha Préstamo
          </label>
          <input
            className="border rounded-lg p-3"
            type="date"
            {...register('dateLoan', { required: true })}
          />
          {formState.errors.dateLoan && <span>This field is required</span>}
          <label className="flex" htmlFor="dateReturn">
            Fecha Devolución
          </label>
          <input
            className="border rounded-lg p-3"
            type="date"
            {...register('dateReturn', { required: true })}
          />
          {formState.errors.dateReturn && <span>This field is required</span>}
          <label className="flex" htmlFor="state">
            Estado
          </label>
          <select
            className="border rounded-lg p-3 w-full"
            {...register('state', { required: true })}
          >
            <option value="loaned">loaned</option>
            <option value="returned">returned</option>
          </select>
          <label className="flex" htmlFor="idBanner">
            ID Banner
          </label>
          <input
            className="border rounded-lg p-3"
            placeholder="e.g. L00387229"
            {...register('idBanner', { required: true })}
          />
          {formState.errors.idBanner && <span>This field is required</span>}
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
