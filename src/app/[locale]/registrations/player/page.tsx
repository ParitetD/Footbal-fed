"use client";

export default function PlayerRegistration() {
  return (
    <div className="pb-32">
      <section className="h-[30vh] flex items-center justify-center bg-black border-b border-white/5">
         <h1 className="text-5xl">Player Licensing</h1>
      </section>

      <section className="max-w-4xl mx-auto px-4 mt-20">
         <div className="bg-white/5 p-12 rounded-3xl border border-white/5">
            <form className="space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest opacity-40">First Name</label>
                     <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Last Name</label>
                     <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-primary transition-colors" />
                  </div>
               </div>
               <button type="button" className="btn-premium w-full">Submit Application</button>
            </form>
         </div>
      </section>
    </div>
  );
}
