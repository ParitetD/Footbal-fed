"use client";

import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Calendar, Users, Newspaper, PlayCircle, Globe, Shield } from "lucide-react";
import { Link } from "../../i18n/navigation";
import { mockNews, mockMatches, mockStandings } from "../../lib/mockData";

export default function Home() {
  const t = useTranslations('home');

  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000"
            className="w-full h-full object-cover opacity-60 grayscale"
            alt="Hero Background"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 w-full relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-8">
               <span className="h-[2px] w-12 bg-primary"></span>
               <span className="text-secondary text-xs font-black uppercase tracking-[0.5em]">{t('heroSubtitle')}</span>
            </div>
            <h1 className="text-7xl md:text-[10rem] mb-12 leading-[0.8] italic uppercase font-black outline-text-hero">
              {t('heroTitle')}
            </h1>
            <p className="text-silver/50 text-xl normal-case font-medium mb-12 max-w-lg leading-relaxed">
              Official information portal of the Kyrgyz Football Union. Developing football excellence from grassroots to the world stage.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/federation" className="px-10 py-5 bg-primary text-white font-black uppercase italic tracking-widest hover:bg-secondary transition-all rounded-sm flex items-center gap-4 group">
                Discover KFU <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black to-transparent py-12">
           <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="flex flex-col">
                 <span className="text-secondary text-2xl font-black italic">84</span>
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-silver/40">Professional Clubs</span>
              </div>
              <div className="flex flex-col">
                 <span className="text-secondary text-2xl font-black italic">1,248</span>
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-silver/40">Registered Players</span>
              </div>
              <div className="flex flex-col">
                 <span className="text-secondary text-2xl font-black italic">14</span>
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-silver/40">National Academies</span>
              </div>
              <div className="flex flex-col">
                 <span className="text-secondary text-2xl font-black italic">#103</span>
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-silver/40">FIFA World Ranking</span>
              </div>
           </div>
        </div>
      </section>

      {/* News */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-5xl italic font-black uppercase tracking-tighter mb-4">{t('latestNews')}</h2>
            <div className="h-1 w-20 bg-primary"></div>
          </div>
          <Link href="/media/news" className="text-xs font-black uppercase tracking-widest text-primary hover:text-white transition-colors">
             View All News
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 group cursor-pointer overflow-hidden rounded-[2rem] relative h-[700px]">
             <img src={mockNews[0].image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="News" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
             <div className="absolute bottom-0 p-12">
                <span className="px-6 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-widest mb-6 inline-block">{mockNews[0].category}</span>
                <h3 className="text-5xl text-white normal-case leading-tight mb-6 font-black italic uppercase tracking-tighter">{mockNews[0].title.en}</h3>
                <p className="text-silver/60 line-clamp-2 normal-case mb-8 text-lg">{mockNews[0].excerpt.en}</p>
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white">
                   Read Full Story <div className="h-[1px] w-12 bg-primary"></div>
                </div>
             </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-12">
             {mockNews.slice(1, 4).map((news) => (
               <div key={news.id} className="flex flex-col gap-6 group cursor-pointer">
                  <div className="h-48 overflow-hidden rounded-2xl bg-white/5 border border-white/10">
                    <img src={news.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" alt="News" />
                  </div>
                  <div>
                    <span className="text-primary text-[10px] font-black uppercase tracking-widest block mb-3">{news.category}</span>
                    <h4 className="text-xl font-bold normal-case leading-snug line-clamp-2 group-hover:text-primary transition-colors">{news.title.en}</h4>
                    <p className="text-silver/30 text-[10px] uppercase font-black tracking-widest mt-4">{news.date}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Matches & Table */}
      <section className="bg-[#0a0a14] py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-24 relative z-10">
           <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-16">
                 <h2 className="text-4xl italic font-black uppercase tracking-tighter">{t('upcomingMatches')}</h2>
                 <Link href="/tournaments/calendar" className="text-[10px] font-black uppercase tracking-widest text-silver/40 hover:text-white">Full Calendar</Link>
              </div>

              <div className="space-y-8">
                 {mockMatches.filter(m => m.status === 'upcoming').map(match => (
                   <div key={match.id} className="bg-white/[0.02] border border-white/5 p-12 rounded-[2.5rem] hover:bg-white/[0.05] transition-all group">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                         <div className="flex items-center gap-8 flex-1 justify-center md:justify-end">
                            <span className="text-2xl font-black italic uppercase group-hover:text-primary transition-colors">{match.homeTeam.name.en}</span>
                            <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center p-4">
                               <Shield size={40} className="text-silver/20" />
                            </div>
                         </div>
                         <div className="text-center px-12 border-x border-white/10">
                            <p className="text-5xl font-black mb-2 tracking-tighter">{match.time}</p>
                            <p className="text-[10px] font-black uppercase text-secondary tracking-widest">{match.date}</p>
                            <p className="text-[9px] font-black uppercase text-silver/20 mt-4 tracking-widest">{match.venue}</p>
                         </div>
                         <div className="flex items-center gap-8 flex-1 justify-center md:justify-start">
                            <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center p-4">
                               <Shield size={40} className="text-silver/20" />
                            </div>
                            <span className="text-2xl font-black italic uppercase group-hover:text-primary transition-colors">{match.awayTeam.name.en}</span>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div>
              <div className="flex justify-between items-center mb-16">
                 <h2 className="text-4xl italic font-black uppercase tracking-tighter">Premier League</h2>
                 <Link href="/tournaments/tables" className="text-[10px] font-black uppercase tracking-widest text-silver/40 hover:text-white">Full Table</Link>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-[2rem] overflow-hidden p-8">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="text-[10px] font-black uppercase text-silver/40">
                          <th className="pb-8">#</th>
                          <th className="pb-8">Club</th>
                          <th className="pb-8 text-center">P</th>
                          <th className="pb-8 text-center">PTS</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                       {mockStandings.map((row) => (
                         <tr key={row.rank} className="group">
                            <td className="py-6 text-xs font-black text-silver/20">{row.rank}</td>
                            <td className="py-6 text-xs font-black uppercase italic group-hover:text-primary transition-colors">{row.team.name.en}</td>
                            <td className="py-6 text-center text-xs font-bold text-silver/40">{row.played}</td>
                            <td className="py-6 text-center text-xs font-black text-secondary">{row.points}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>

              <div className="mt-12 p-8 bg-gradient-to-br from-primary to-secondary rounded-[2rem] text-white">
                 <h4 className="font-black italic uppercase text-2xl mb-4">Official Shop</h4>
                 <p className="text-white/80 text-sm mb-6 font-medium">Get the official 2024 National Team Jersey and support the pride of Kyrgyzstan.</p>
                 <button className="w-full py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-xl hover:bg-black hover:text-white transition-all">
                    Shop Now
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* Federation Sections */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
         <Link href="/development/academies" className="group relative h-80 rounded-[2rem] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1526232759583-26f1dd3f4442?q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Academies" />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all"></div>
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
               <h4 className="text-3xl font-black italic uppercase text-white mb-2">Academies</h4>
               <p className="text-white/60 text-xs font-black uppercase tracking-widest">Nurturing Excellence</p>
            </div>
         </Link>
         <Link href="/development/referees" className="group relative h-80 rounded-[2rem] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1517466787919-ec4577a016bd?q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Referees" />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all"></div>
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
               <h4 className="text-3xl font-black italic uppercase text-white mb-2">Referees</h4>
               <p className="text-white/60 text-xs font-black uppercase tracking-widest">Fair Play Standards</p>
            </div>
         </Link>
         <Link href="/federation/partners" className="group relative h-80 rounded-[2rem] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Partners" />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all"></div>
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
               <h4 className="text-3xl font-black italic uppercase text-white mb-2">Partners</h4>
               <p className="text-white/60 text-xs font-black uppercase tracking-widest">Strategic Alliances</p>
            </div>
         </Link>
      </section>
    </div>
  );
}
