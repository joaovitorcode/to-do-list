import { TaskProps } from '../global/types'
import { MdCheckCircleOutline, MdDeleteOutline } from 'react-icons/md'

export function Task({
  task,
  updateTaskTitle,
  updateTaskCompleted,
  deleteTask,
}: TaskProps) {
  const boderColor = task.completed ? 'border-green-500' : 'border-sky-500'
  const textColor = task.completed ? 'text-green-500' : 'text-sky-500'

  return (
    <li className="relative">
      <input
        className={`w-full p-4 pr-24 bg-white shadow rounded-[4px] font-semibold border-2 ${boderColor}`}
        type="text"
        placeholder="Type something"
        value={task.title}
        onChange={updateTaskTitle}
      />
      <button
        onClick={deleteTask}
        className={`absolute top-[18px] right-14 text-red-500`}
      >
        <MdDeleteOutline size={24} />
      </button>
      <button
        onClick={updateTaskCompleted}
        className={`absolute top-[18px] right-4 ${textColor}`}
      >
        <MdCheckCircleOutline size={24} />
      </button>
    </li>
  )
}
