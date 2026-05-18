export default function EmptyState({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center py-14 text-center">
      <div className="mb-4 text-gray-300">{icon}</div>
      <p className="text-base font-semibold text-gray-500 mb-1">{title}</p>
      {description && <p className="text-sm text-gray-400">{description}</p>}
    </div>
  )
}
