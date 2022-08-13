import Link from 'next/link'

export function User() {
  return (
    <div className="w-full p-4 bg-white shadow rounded-[4px] font-semibold text-lg">
      <Link href={`/`}>
        <a>name</a>
      </Link>
    </div>
  )
}
