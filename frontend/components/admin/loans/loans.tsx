'use client'

import { Loan } from '@/src/models/model'
import { deleteLoan, getLoans } from '@/src/utils/providers/provider'
import { useEffect, useState } from 'react'
import AddLoanModal from './add-loan-modal'
import UpdateLoanModal from './update-loan-modal'
import Image from 'next/image'

export default function Loans() {
  const [loans, setLoans] = useState<Loan[]>([])

  useEffect(() => {
    getLoans()
      .then((data) => setLoans(data))
      .catch((error) => alert(error))
  }, [])

  function handleDelete(cod: number) {
    deleteLoan(cod)
      .then(() => {
        setLoans((prev) => prev.filter((loan) => loan.cod !== cod))
        alert('Préstamo eliminado')
      })
      .catch((error) => alert(error))
  }

  return (
    <>
      <div className="flex flex-row justify-between m-10">
        <h2 className="font-bold text-2xl">Préstamos</h2>
        <AddLoanModal setLoans={setLoans} />
      </div>
      <hr className="my-5" />
      <table className="mx-auto w-full text-center p-4">
        <thead>
          <tr>
            <th className="w-auto">COD</th>
            <th className="w-auto">ISBN</th>
            <th className="w-auto">Fecha de Préstamo</th>
            <th className="w-auto">Fecha de Devolución</th>
            <th className="w-auto">Estado</th>
            <th className="w-auto">ID Banner</th>
            <th className="w-auto"></th>
          </tr>
        </thead>
        <tbody className="space-y-3">
          {loans.map((loan) => (
            <tr className="bg-white px-10 py-5 rounded-xl" key={loan.cod}>
              <td className="w-auto">{loan.cod}</td>
              <td className="w-auto">{loan.isbn}</td>
              <td className="w-auto">{loan.dateLoan}</td>
              <td className="w-auto">{loan.dateReturn}</td>
              <td className="w-auto">{loan.state}</td>
              <td className="w-auto">{loan.idBanner}</td>
              <td className="w-auto">
                <UpdateLoanModal setLoans={setLoans} loan={loan} />
                <button className="" onClick={() => handleDelete(loan.cod)}>
                  <Image
                    className="p-1"
                    src="/delete.svg"
                    alt="Eliminar"
                    width={35}
                    height={35}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
