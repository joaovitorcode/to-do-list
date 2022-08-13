export function AddTask({ style, children }) {
  return (
    <button
      className={`w-full p-4 text-white shadow rounded-[4px] font-semibold ${style}`}
    >
      {children}
    </button>
  )
}
