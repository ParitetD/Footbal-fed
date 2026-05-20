"use client";

import { useTranslations, useLocale } from 'next-intl';
import { motion } from "framer-motion";
import { Trophy, Users, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "../../../../i18n/navigation";
import { mockSquad } from "../../../../lib/mockData";

export default function MenNationalTeam() {
  const t = useTranslations('teams');
  const locale = useLocale() as 'en' | 'ru' | 'ky';

  const playersByPosition = {
    GK: mockSquad.filter(p => p.position === 'GK'),
    DF: mockSquad.filter(p => p.position === 'DF'),
    MF: mockSquad.filter(p => p.position === 'MF'),
    FW: mockSquad.filter(p => p.position === 'FW'),
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header Section */}
      <section className="relative h-[60vh] flex items-end overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1510051644265-934cb330e991?q=80&w=2000"
            className="w-full h-full object-cover opacity-40 grayscale"
            alt="Team Banner"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 w-full relative z-10 pb-20">
           <Link href="/national-teams" className="flex items-center gap-2 text-silver/40 hover:text-white mb-8 transition-colors text-[10px] font-black uppercase tracking-widest">
              <ArrowLeft size={14} /> {t('title')}
           </Link>
           <h1 className="text-6xl md:text-8xl italic mb-4">{t('men')}</h1>
           <div className="flex gap-12">
              <div className="flex flex-col">
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2">{t('headCoach')}</span>
                 <span className="text-2xl font-bold italic">Maxim Lisitsyn</span>
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2">FIFA Rank</span>
                 <span className="text-2xl font-bold italic">#103</span>
              </div>
           </div>
        </div>
      </section>

      {/* Roster Section */}
      <section className="max-w-7xl mx-auto px-4 mt-20">
        <div className="flex items-center gap-4 mb-16">
           <h2 className="text-4xl italic">{t('roster')}</h2>
           <div className="h-[2px] flex-1 bg-white/5"></div>
        </div>

        {Object.entries(playersByPosition).map(([pos, players]) => (
          players.length > 0 && (
            <div key={pos} className="mb-20">
              <h3 className="text-xs font-black uppercase tracking-[0.5em] text-silver/20 mb-12 flex items-center gap-4">
                 {pos === 'GK' ? 'Goalkeepers' : pos === 'DF' ? 'Defenders' : pos === 'MF' ? 'Midfielders' : 'Forwards'}
                 <span className="h-[1px] w-20 bg-primary/20"></span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {players.map((player, idx) => (
                  <motion.div
                    key={player.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                  >
                     <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white/5 border border-white/5 mb-6">
                        <img
                          src={player.image}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                          alt={player.name[locale]}
                        />
                        <div className="absolute top-4 left-4">
                           <span className="text-5xl font-black italic opacity-20 group-hover:opacity-100 transition-opacity outline-text">#{player.number}</span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                           <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">{player.club}</p>
                           <p className="text-xl font-black uppercase italic">{player.name[locale]}</p>
                        </div>
                     </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        ))}
      </section>
    </div>
  );
}
