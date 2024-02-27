import Link from "next/link";

export default function BooksNav() {
  return (
    <>
      <nav className="h-1/2">
        <h3 className="font-bold text-center pt-5">Préstamo de Libros</h3>
        <ul className="flex flex-col items-center pt-6 space-y-6">
          <li>
            <Link
              className="flex py-2 px-4 bg-yellow-500 w-48"
              href="/books/books"
            >
              Libros
            </Link>
          </li>
          <li>
            <Link
              className="flex py-2 px-4 bg-yellow-500 w-48"
              href="/books/loans"
            >
              Préstamos
            </Link>
          </li>
          <li>
            <Link
              className="flex py-2 px-4 bg-yellow-500 w-48"
              href="/books/authors"
            >
              Autores
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center items-end pb-5 h-1/2">
        <Link className="py-2 px-4 bg-yellow-500 w-48" href="/">
          Salir
        </Link>
      </div>
    </>
  );
}
