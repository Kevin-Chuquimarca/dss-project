import { Author } from '@/src/models/model'
import ModalTemplate from '@/components/customs/modal-template'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Dispatch, SetStateAction, useState } from 'react'
import { addAuthor } from '@/src/utils/providers/provider'
import { BtnSubmit } from '@/components/customs/btn-submit'

export default function AddAuthorModal(props: {
  readonly setAuthors: Dispatch<SetStateAction<Author[]>>
}) {
  const [showModal, setShowModal] = useState(false)
  const { register, handleSubmit, formState } = useForm<Author>()
  const onSubmit: SubmitHandler<Author> = (data) => {
    addAuthor(data)
      .then((resData) => {
        console.log(resData)
        props.setAuthors((prev) => [...prev, resData])
        setShowModal(!showModal)
        alert('Autor agregado')
      })
      .catch((error) => alert(error))
  }

  return (
    <ModalTemplate
      textButton="AGREGAR AUTOR"
      btnLayout="btn-add"
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="font-bold text-xl">Nuevo Autor</h3>
        <p>Crear un nuevo Autor</p>
        <hr className="my-5" />
        <div className="space-y-3">
          <label className="flex" htmlFor="name">
            Nombres
          </label>
          <input
            className="border rounded-lg p-3"
            placeholder="e.g. Marco Alexander"
            {...register('name', {
              required: true,
              maxLength: 30,
            })}
          />
          {formState.errors.name && <span>This field is required</span>}
          <label className="flex" htmlFor="lastname">
            Apellidos
          </label>
          <input
            className="border rounded-lg p-3"
            placeholder="e.g. Iza Quinatoa"
            {...register('lastname', {
              required: true,
              maxLength: 30,
            })}
          />
          {formState.errors.lastname && <span>This field is required</span>}
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
