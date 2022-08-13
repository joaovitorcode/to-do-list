import Link from 'next/link'

export function User({ user }) {
  return (
    <div className="w-full p-4 bg-white shadow rounded-[4px] font-semibold text-lg">
      <Link href={`/user/${user?.id}`}>
        <a>{user.name}</a>
      </Link>
    </div>
  )
}
