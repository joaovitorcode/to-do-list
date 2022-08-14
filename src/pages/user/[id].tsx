import type { GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../../components/Header'
import { User } from '../../components/User'
import { AddTask } from '../../components/AddTask'
import { Task } from '../../components/Task'
import { useState, ChangeEvent } from 'react'
import { UserProps, UserTaskProps } from '../../global/types'

const UserPage: NextPage<{ user: UserProps; userTasks: UserTaskProps[] }> = ({
  user,
  userTasks,
}) => {
  const [tasks, setTasks] = useState(userTasks)

  function addTask({ completed }: { completed: boolean }) {
    const newTask = {
      userId: user.id,
      id: new Date().getTime(),
      title: '',
      completed,
    }
    setTasks(prevState => [newTask, ...prevState])
  }

  function updateTaskTitle(currentTask: UserTaskProps, newTitle: string) {
    setTasks(prevState =>
      prevState.map(task => {
        if (task.id === currentTask.id) {
          return {
            ...task,
            title: newTitle,
          }
        }
        return task
      })
    )
  }

  function updateTaskCompleted(currentTask: UserTaskProps) {
    setTasks(prevState =>
      prevState.map(task => {
        if (task.id === currentTask.id) {
          return {
            ...task,
            completed: !task.completed,
          }
        }
        return task
      })
    )
  }

  function deleteTask(currentTask: UserTaskProps) {
    setTasks(prevState => prevState.filter(task => task.id !== currentTask.id))
  }

  return (
    <div>
      <Head>
        <title>User: {user.name}</title>
        <meta name="description" content="User page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-full">
        <Header />
        <main className="max-w-5xl mx-auto h-full py-8">
          <User user={user} />
          <section className="grid grid-cols-2 gap-4 mt-4">
            <div className="w-full">
              <AddTask
                addTask={() => addTask({ completed: false })}
                style="bg-sky-500 hover:bg-sky-600"
              >
                Add Doing
              </AddTask>
              <ul className="flex flex-col gap-4 mt-4">
                {tasks
                  .filter(task => !task.completed)
                  .map(task => (
                    <Task
                      key={task.id}
                      task={task}
                      updateTaskTitle={(event: ChangeEvent<HTMLInputElement>) =>
                        updateTaskTitle(task, event.target.value)
                      }
                      updateTaskCompleted={() => updateTaskCompleted(task)}
                      deleteTask={() => deleteTask(task)}
                    />
                  ))}
              </ul>
            </div>
            <div className="w-full">
              <AddTask
                addTask={() => addTask({ completed: true })}
                style="bg-green-500 hover:bg-green-600"
              >
                Add Done
              </AddTask>
              <ul className="flex flex-col gap-4 mt-4">
                {tasks
                  .filter(task => task.completed)
                  .map(task => (
                    <Task
                      key={task.id}
                      task={task}
                      updateTaskTitle={(event: ChangeEvent<HTMLInputElement>) =>
                        updateTaskTitle(task, event.target.value)
                      }
                      updateTaskCompleted={() => updateTaskCompleted(task)}
                      deleteTask={() => deleteTask(task)}
                    />
                  ))}
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id

  const userResponse = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )
  const user = await userResponse.json()

  const userTasksResponse = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/todos`
  )
  const userTasks = await userTasksResponse.json()

  return {
    props: {
      user,
      userTasks,
    },
  }
}

export default UserPage
