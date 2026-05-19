const colors = {
  green:  'bg-green-100 text-green-700',
  red:    'bg-red-100 text-red-600',
  blue:   'bg-blue-100 text-blue-600',
  purple: 'bg-purple-100 text-purple-600',
  yellow: 'bg-yellow-100 text-yellow-700',
  gray:   'bg-gray-100 text-gray-600',
}

export default function Badge({ color, children }) {
  return (
    <span className={`px-3 py-1.5 rounded-full text-xs font-bold inline-block ${colors[color] ?? colors.gray}`}>
      {children}
    </span>
  )
}
