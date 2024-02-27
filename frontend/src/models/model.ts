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