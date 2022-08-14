import { ChangeEventHandler, MouseEventHandler } from 'react'

export interface UserProps {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: number
      lng: number
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface UserTaskProps {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface TaskProps {
  task: UserTaskProps
  updateTaskTitle: ChangeEventHandler<HTMLInputElement>
  updateTaskCompleted: MouseEventHandler<HTMLButtonElement>
  deleteTask: MouseEventHandler<HTMLButtonElement>
}

export interface AddTaskProps {
  style: string
  children: string
  addTask: () => void
}
