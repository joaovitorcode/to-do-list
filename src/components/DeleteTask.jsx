import { MdDeleteOutline } from 'react-icons/md'

export function DeleteTask({ style, ...rest }) {
  return (
    <button {...rest} className={`absolute top-[18px] ${style}`}>
      <MdDeleteOutline size={24} />
    </button>
  )
}
