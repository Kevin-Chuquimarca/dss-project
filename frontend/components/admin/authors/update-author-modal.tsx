import { Author } from '@/src/models/model'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Dispatch, SetStateAction, useState } from 'react'
import { updateAuthor } from '@/src/utils/providers/provider'
import { BtnSubmit } from '@/components/customs/btn-submit'
import ModalTemplateImg from '@/components/customs/modal-template-img'

export default function UpdateAuthorModal(props: {
  readonly setAuthors: Dispatch<SetStateAction<Author[]>>
  readonly author: Author
}) {
  const [showModal, setShowModal] = useState(false)
  const { register, handleSubmit, formState } = useForm<Author>()
  const onSubmit: SubmitHandler<Author> = (data) => {
    updateAuthor(data)
      .then((resData) => {
        props.setAuthors((prev) =>
          prev.filter((author) => author.id !== resData.id).concat(resData)
        )
        setShowModal(!showModal)
        alert('Autor Actualizado')
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
        <h3 className="font-bold text-xl">Actualizar Autor</h3>
        <hr className="my-5" />
        <div className="space-y-3">
          <label className="flex" htmlFor="id">
            COD
          </label>
          <input
            className="border rounded-lg p-3"
            readOnly
            {...register('id', {
              required: true,
              value: props.author.id,
            })}
          />
          {formState.errors.id && <span>This field is required</span>}
          <label className="flex" htmlFor="name">
            Nombres
          </label>
          <input
            className="border rounded-lg p-3"
            {...register('name', {
              required: true,
              value: props.author.name,
              maxLength: 30,
            })}
          />
          {formState.errors.name && <span>This field is required</span>}
          <label className="flex" htmlFor="lastname">
            Apellidos
          </label>
          <input
            className="border rounded-lg p-3"
            {...register('lastname', {
              required: true,
              value: props.author.lastname,
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
    </ModalTemplateImg>
  )
}
