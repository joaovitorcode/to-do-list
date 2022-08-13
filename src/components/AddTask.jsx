export function AddTask({ style, children, ...rest }) {
  return (
    <button
      {...rest}
      className={`w-full p-4 text-white shadow rounded-[4px] font-semibold ${style}`}
    >
      {children}
    </button>
  )
}
