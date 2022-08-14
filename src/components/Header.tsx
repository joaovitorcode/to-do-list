import Link from 'next/link'

export function Header() {
  return (
    <header className="w-full h-16 bg-white shadow flex items-center justify-center">
      <Link href="/">
        <a>
          <h1 className="font-bold text-3xl">
            <span className="text-sky-500">Todo</span>List
          </h1>
        </a>
      </Link>
    </header>
  )
}
