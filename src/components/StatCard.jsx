export default function StatCard({ label, value, icon, colorClass }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex justify-between items-center">
      <div>
        <small className="text-gray-500 text-sm">{label}</small>
        <h2 className="text-[38px] font-bold mt-2 leading-none">{value}</h2>
      </div>
      <div className={`w-[52px] h-[52px] rounded-xl flex items-center justify-center text-2xl font-bold shrink-0 ${colorClass}`}>
        {icon}
      </div>
    </div>
  )
}
