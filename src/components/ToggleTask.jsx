import { MdCheckCircleOutline } from 'react-icons/md'

export function ToggleTask({ style, ...rest }) {
  return (
    <button {...rest} className={`absolute top-[18px] ${style}`}>
      <MdCheckCircleOutline size={24} />
    </button>
  )
}
