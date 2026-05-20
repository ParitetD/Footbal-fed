"use client";
import { LayoutDashboard, Newspaper, Trophy, Users } from "lucide-react";

export default function AdminLayout({ children }: { children: any }) {
  return (
    <div className="min-h-screen bg-black text-silver flex">
      <aside className="w-64 border-r border-white/5 p-8 space-y-8">
         <div className="font-black italic text-xl text-primary">KFU ADMIN</div>
         <nav className="space-y-4">
            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest opacity-40 hover:opacity-100 cursor-pointer">
               <LayoutDashboard size={16} /> Dashboard
            </div>
            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest opacity-40 hover:opacity-100 cursor-pointer">
               <Newspaper size={16} /> News
            </div>
         </nav>
      </aside>
      <main className="flex-1 p-12">
         {children}
      </main>
    </div>
  );
}
