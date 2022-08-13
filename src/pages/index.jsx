// import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { User } from '../components/User'

const HomePage = () => {
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
          <User />
        </main>
      </div>
    </div>
  )
}

export default HomePage
