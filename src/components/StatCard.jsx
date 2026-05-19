export default function StatCard({ label, value, icon, colorClass }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex justify-between items-center">
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <p className="text-[38px] font-bold mt-1 leading-none">{value}</p>
      </div>
      <div className={`w-[52px] h-[52px] rounded-xl flex items-center justify-center shrink-0 ${colorClass}`}>
        {icon}
      </div>
    </div>
  )
}
