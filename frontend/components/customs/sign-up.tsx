'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { BtnSubmit } from './btn-submit'
import { Student } from '@/src/models/model'
import { signUp } from '@/src/utils/providers/users'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignUp() {
  const router = useRouter()
  const { register, handleSubmit, formState } = useForm<Student>()
  const onSubmit: SubmitHandler<Student> = (data) => {
    signUp(data)
      .then(() => {
        router.push('/')
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <div className="flex justify-center items-center bg-[#FEAF00] h-screen">
      <form
        className="flex flex-col bg-white px-6 py-5 rounded-lg text-center space-y-4 w-1/4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="text-left py-2">
          <h3 className="font-bold text-xl">Registro</h3>
          <p>Ingrese los siguientes datos</p>
        </div>
        <hr />
        <div>
          <label className="flex" htmlFor="username">
            ID Banner
          </label>
          <input
            className="py-2 px-4 border rounded-md min-w-full"
            placeholder="e.g. L00387229"
            type="text"
            {...register('idBanner', { required: true })}
          />
          {formState.errors.username && <span>This field is required</span>}
        </div>
        <div>
          <label className="flex" htmlFor="username">
            Nombre
          </label>
          <input
            className="py-2 px-4 border rounded-md min-w-full"
            placeholder="e.g. Marco"
            type="text"
            {...register('name', { required: true })}
          />
          {formState.errors.username && <span>This field is required</span>}
        </div>
        <div>
          <label className="flex" htmlFor="username">
            Apellido
          </label>
          <input
            className="py-2 px-4 border rounded-md min-w-full"
            placeholder="e.g. Iza"
            type="text"
            {...register('lastname', { required: true })}
          />
          {formState.errors.username && <span>This field is required</span>}
        </div>
        <div>
          <label className="flex" htmlFor="username">
            Correo Electrónico
          </label>
          <input
            className="py-2 px-4 border rounded-md min-w-full"
            placeholder="e.g. example@correo.com"
            type="text"
            {...register('email', { required: true })}
          />
          {formState.errors.username && <span>This field is required</span>}
        </div>
        <div>
          <label className="flex" htmlFor="password">
            Número de Teléfono
          </label>
          <input
            className="py-2 px-4 border rounded-md min-w-full"
            placeholder="e.g. 0999999999"
            type="number"
            {...register('phone', { required: true })}
          />
          {formState.errors.password && <span>This field is required</span>}
        </div>
        <div>
          <label className="flex" htmlFor="username">
            Usuario
          </label>
          <input
            className="py-2 px-4 border rounded-md min-w-full"
            placeholder="e.g. maiza4"
            type="text"
            {...register('username', { required: true })}
          />
          {formState.errors.username && <span>This field is required</span>}
        </div>
        <div>
          <label className="flex" htmlFor="username">
            Contraseña
          </label>
          <input
            className="py-2 px-4 border rounded-md min-w-full"
            type="password"
            {...register('password', { required: true })}
          />
          {formState.errors.username && <span>This field is required</span>}
        </div>
        <hr />
        <BtnSubmit
          textBtn="Confirmar"
          formState={formState}
          btnColor="btn-add"
        />
        <Link className="btn-cancel" href="/">
          Cancelar
        </Link>
      </form>
    </div>
  )
}
