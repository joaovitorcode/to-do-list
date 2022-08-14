import { AddTaskProps } from '../global/types'

export function AddTask({ style, children, addTask }: AddTaskProps) {
  return (
    <button
      onClick={addTask}
      className={`w-full p-4 text-white shadow rounded-[4px] font-semibold ${style}`}
    >
      {children}
    </button>
  )
}
