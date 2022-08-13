import { DeleteTask } from '../components/DeleteTask'
import { ToggleTask } from '../components/ToggleTask'

export function Task({ style }) {
  return (
    <li className="relative">
      <input
        className={`w-full p-4 pr-24 bg-white shadow rounded-[4px] font-semibold border-2 ${style}`}
        type="text"
        placeholder="Type something"
      />
      <DeleteTask style="right-14 text-red-500" />
      <ToggleTask style="right-4" />
    </li>
  )
}
