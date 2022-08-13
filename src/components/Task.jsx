import { DeleteTask } from '../components/DeleteTask'
import { ToggleTask } from '../components/ToggleTask'

export function Task({
  task,
  updateTaskTitle,
  updateTaskCompleted,
  deleteTask,
}) {
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
      <DeleteTask onClick={deleteTask} style="right-14 text-red-500" />
      <ToggleTask
        onClick={updateTaskCompleted}
        style={`right-4 ${textColor}`}
      />
    </li>
  )
}
