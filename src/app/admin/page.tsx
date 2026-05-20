"use client";
export default function AdminPage() {
  return (
    <div className="space-y-12">
       <h1 className="text-4xl">System Dashboard</h1>
       <div className="grid grid-cols-4 gap-6">
          {[
            { label: "Active Players", value: "1,248" },
            { label: "Upcoming Matches", value: "24" },
            { label: "Registered Clubs", value: "84" },
            { label: "System Alerts", value: "0" }
          ].map(s => (
            <div key={s.label} className="bg-white/5 p-8 rounded-2xl border border-white/5">
               <p className="text-[10px] font-black uppercase opacity-40 mb-2">{s.label}</p>
               <p className="text-3xl font-black">{s.value}</p>
            </div>
          ))}
       </div>
    </div>
  );
}
