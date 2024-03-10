import ModalTemplateImg from '@/components/customs/modal-template-img'
import { BtnSubmit } from '@/components/customs/btn-submit'
import { updateLoan } from '@/src/utils/providers/provider'
import { Dispatch, SetStateAction, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Loan } from '@/src/models/model'

export default function UpdateLoanModal(props: {
  readonly setLoans: Dispatch<SetStateAction<Loan[]>>
  readonly loan: Loan
}) {
  const [showModal, setShowModal] = useState(false)
  const { register, handleSubmit, formState } = useForm<Loan>()
  const onSubmit: SubmitHandler<Loan> = (data) => {
    updateLoan(data)
      .then((resData) => {
        props.setLoans((prev) =>
          prev.filter((loan) => loan.cod !== resData.cod).concat(resData)
        )
        setShowModal(!showModal)
        alert('Préstamo Actualizado')
      })
      .catch((error) => alert(error))
  }

  return (
    <ModalTemplateImg
      nameSVG="edit"
      alt="Actualizar"
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="font-bold text-xl">Actualizar Préstamo</h3>
        <hr className="my-5" />
        <div className="space-y-3">
          <label className="flex" htmlFor="isbn">
            ISBN
          </label>
          <input
            className="border rounded-lg p-3"
            placeholder="e.g. 325-5215-256834"
            readOnly
            {...register('isbn', {
              required: true,
              value: props.loan.isbn,
              maxLength: 17,
            })}
          />
          {formState.errors.isbn && <span>This field is required</span>}
          <label className="flex" htmlFor="dateLoan">
            Fecha Préstamo
          </label>
          <input
            className="border rounded-lg p-3"
            type="date"
            {...register('dateLoan', {
              required: true,
              value: props.loan.dateLoan,
            })}
          />
          {formState.errors.dateLoan && <span>This field is required</span>}
          <label className="flex" htmlFor="dateReturn">
            Fecha Devolución
          </label>
          <input
            className="border rounded-lg p-3"
            type="date"
            {...register('dateReturn', {
              required: true,
              value: props.loan.dateReturn,
            })}
          />
          {formState.errors.dateReturn && <span>This field is required</span>}
          <label className="flex" htmlFor="state">
            Estado
          </label>
          <select
            className="border rounded-lg p-3 w-full"
            {...register('state', { required: true, value: props.loan.state })}
          >
            <option value="pending">pending</option>
            <option value="loaned">loaned</option>
            <option value="returned">returned</option>
          </select>
          <label className="flex" htmlFor="idBanner">
            ID Banner
          </label>
          <input
            className="border rounded-lg p-3"
            placeholder="e.g. L00387229"
            {...register('idBanner', {
              required: true,
              value: props.loan.idBanner,
              maxLength: 9,
            })}
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
