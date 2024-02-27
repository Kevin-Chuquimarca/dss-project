export interface Book {
  isbn: string
  id: number
  title: string
}

export interface Author {
  id: number
  name: string
  lastname: string
}

export interface Loan {
  cod: number
  isbn: string
  dateLoan: string
  dateReturn: string
  state: string
  idBanner: string
}

export interface Student {
  idBanner: string
  name: string
  lastname: string
  username: string
  password: string
  email: string
  phone: string
  roles: string
}

export interface User {
  username: string
  password: string
}
