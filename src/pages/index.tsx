import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { User } from '../components/User'
import { UserProps } from '../global/types'

const HomePage: NextPage<{ users: UserProps[] }> = ({ users }) => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-full">
        <Header />
        <main className="max-w-5xl mx-auto h-full py-8 grid grid-cols-2 gap-4">
          {users.map(user => (
            <User key={user.id} user={user} />
          ))}
        </main>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  return {
    props: {
      users,
    },
  }
}

export default HomePage
