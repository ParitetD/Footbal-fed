import { useTranslations } from 'next-intl';
import { Trophy, History, Star } from "lucide-react";

export default function HistoryPage() {
  const t = useTranslations('nav');

  return (
    <div className="pt-40 pb-20 max-w-7xl mx-auto px-4">
      <div className="max-w-3xl">
        <h1 className="text-6xl italic mb-8">{t('history')}</h1>
        <div className="h-1 w-20 bg-primary mb-12"></div>

        <div className="space-y-16">
          <section className="relative pl-12 border-l border-white/10">
             <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full border-4 border-[#0f0f1a]"></div>
             <span className="text-secondary font-black text-2xl italic mb-4 block">1992</span>
             <h2 className="text-2xl font-bold mb-4">Foundation of the Football Federation</h2>
             <p className="text-silver/50 leading-relaxed">
               Following the independence of the Kyrgyz Republic, the Football Federation of the Kyrgyz Republic was officially established to govern the sport and join international football bodies.
             </p>
          </section>

          <section className="relative pl-12 border-l border-white/10">
             <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full border-4 border-[#0f0f1a]"></div>
             <span className="text-secondary font-black text-2xl italic mb-4 block">1994</span>
             <h2 className="text-2xl font-bold mb-4">FIFA and AFC Membership</h2>
             <p className="text-silver/50 leading-relaxed">
               The Federation gained official membership in FIFA and the Asian Football Confederation (AFC), allowing national teams and clubs to participate in international competitions.
             </p>
          </section>

          <section className="relative pl-12 border-l border-white/10">
             <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full border-4 border-[#0f0f1a]"></div>
             <span className="text-secondary font-black text-2xl italic mb-4 block">2019</span>
             <h2 className="text-2xl font-bold mb-4">Asian Cup Debut</h2>
             <p className="text-silver/50 leading-relaxed">
               A historic milestone as the Kyrgyz Republic National Team qualified for the AFC Asian Cup for the first time, reaching the Round of 16 in a remarkable display of talent and spirit.
             </p>
          </section>

          <section className="relative pl-12 border-l border-white/10">
             <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full border-4 border-[#0f0f1a]"></div>
             <span className="text-secondary font-black text-2xl italic mb-4 block">Present Day</span>
             <h2 className="text-2xl font-bold mb-4">The New Era</h2>
             <p className="text-silver/50 leading-relaxed">
               Under the rebranded Kyrgyz Football Union (KFU), we continue to invest in infrastructure, youth development, and professional leagues to elevate Kyrgyz football to new heights.
             </p>
          </section>
        </div>
      </div>
    </div>
  );
}
