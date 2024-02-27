import BooksNav from '@/components/books/books-nav'
import React from 'react'

export default function Layout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <div className="flex flex-row">
      <div className="size-2/12 h-screen bg-[#F2EAE1] ">
        <BooksNav />
      </div>
      <div className="size-10/12 bg-[#F8F8F8] min-h-screen">{children}</div>
    </div>
  )
}
