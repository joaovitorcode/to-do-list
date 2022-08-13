import Head from 'next/head'
import { Header } from '../../components/Header'
import { User } from '../../components/User'
import { AddTask } from '../../components/AddTask'
import { Task } from '../../components/Task'

const UserPage = () => {
  return (
    <div>
      <Head>
        <title>User: </title>
        <meta name="description" content="User page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-full">
        <Header />
        <main className="max-w-5xl mx-auto h-full py-8">
          <User />
          <section className="grid grid-cols-2 gap-4 mt-4">
            <div className="w-full">
              <AddTask style="bg-sky-500 hover:bg-sky-600">Add Doing</AddTask>
              <ul className="flex flex-col gap-4 mt-4">
                <Task style="border-sky-500" />
              </ul>
            </div>
            <div className="w-full">
              <AddTask style="bg-green-500 hover:bg-green-600">
                Add Done
              </AddTask>
              <ul className="flex flex-col gap-4 mt-4">
                <Task style="border-green-500" />
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default UserPage
