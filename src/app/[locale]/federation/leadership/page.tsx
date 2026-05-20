import { useTranslations } from 'next-intl';
import { User, Shield, Briefcase } from "lucide-react";

export default function LeadershipPage() {
  const t = useTranslations('nav');

  const leaders = [
    { name: "Mederbek Sydykov", role: "President", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400" },
    { name: "Nurdin Bukuev", role: "General Secretary", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" },
    { name: "Kanybek Mamatov", role: "Vice President", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400" },
    { name: "Dastanbek Konokbaev", role: "Vice President", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" },
  ];

  return (
    <div className="pt-40 pb-20 max-w-7xl mx-auto px-4">
      <h1 className="text-6xl italic mb-8">{t('leadership')}</h1>
      <div className="h-1 w-20 bg-primary mb-20"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {leaders.map((leader, idx) => (
          <div key={idx} className="group">
             <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white/5 border border-white/5 mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src={leader.image} className="w-full h-full object-cover" alt={leader.name} />
             </div>
             <h3 className="text-xl font-black uppercase italic mb-1">{leader.name}</h3>
             <p className="text-[10px] font-black uppercase tracking-widest text-primary">{leader.role}</p>
          </div>
        ))}
      </div>

      <div className="mt-32 p-12 bg-white/5 rounded-3xl border border-white/5">
         <div className="max-w-3xl">
            <h2 className="text-3xl italic mb-6">Executive Committee</h2>
            <p className="text-silver/50 mb-12">
               The Executive Committee is the decision-making body of the KFU between Congresses. It consists of 15 members representing various regions and aspects of Kyrgyz football.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {[1,2,3,4,5,6].map(i => (
                 <div key={i} className="flex items-center gap-4 p-4 border-b border-white/5">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-xs font-bold uppercase tracking-wider">Committee Member {i}</span>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
