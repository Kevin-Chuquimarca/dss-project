'use client'

import { BtnSubmit } from '@/components/customs/btn-submit'
import { SubmitHandler, useForm } from 'react-hook-form'
import { login } from '@/src/utils/providers/users'
import { saveUserInfo } from '@/src/libs/libs'
import { useRouter } from 'next/navigation'
import { User } from '@/src/models/model'
import Link from 'next/link'

export default function Login() {
  const router = useRouter()
  const { register, handleSubmit, formState } = useForm<User>()
  const onSubmit: SubmitHandler<User> = (data) => {
    login(data)
      .then((res) => {
        saveUserInfo(res)
        if (res.roles === 'ROLE_USER') {
          router.push(`/dashboard/${res.idBanner}/library`)
        } else if (res.roles === 'ROLE_ADMIN') {
          router.push(`/dashboard/${res.idBanner}/books`)
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <div className="flex justify-center items-center bg-[#FEAF00] h-screen">
      <form
        className="flex flex-col bg-white px-6 py-10 rounded-lg text-center space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="font-bold text-3xl">Préstamo Libros</h2>
        <div className="py-5">
          <h3 className="font-bold text-xl">INICIAR SESIÓN</h3>
          <p>Ingrese sus credenciales para ser autenticado</p>
        </div>
        <div>
          <label className="flex" htmlFor="username">
            Usuario
          </label>
          <input
            className="py-2 px-4 border rounded-md min-w-full"
            placeholder="Ingrese su usuario"
            type="text"
            {...register('username', { required: true, maxLength: 20 })}
          />
          {formState.errors.username && <span>This field is required</span>}
        </div>
        <div>
          <label className="flex" htmlFor="password">
            Contraseña
          </label>
          <input
            className="py-2 px-4 border rounded-md min-w-full"
            placeholder="Ingrese su contraseña"
            type="password"
            {...register('password', { required: true, maxLength: 20 })}
          />
          {formState.errors.password && <span>This field is required</span>}
        </div>
        <BtnSubmit
          textBtn="INICIAR SESIÓN"
          formState={formState}
          btnColor="btn-add"
        />
        <Link className="btn-sign-up" href="/sign-up">
          Registrarse
        </Link>
      </form>
    </div>
  )
}
