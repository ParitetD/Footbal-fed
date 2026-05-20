"use client";

import { useLang } from "../components/BaseLayout";
import { translations } from "../lib/translations";
import { mockNews, mockMatches } from "../lib/mockData";
import Link from "next/link";
import { ArrowRight, Play, Trophy, Users, Calendar, Target } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../components/ui/Section";
import Heading from "../components/ui/Heading";
import Button from "../components/ui/Button";
import NewsCard from "../components/NewsCard";
import MatchWidget from "../components/MatchWidget";
import Card from "../components/ui/Card";

export default function Home() {
  const { lang } = useLang();
  const t = translations[lang].home;

  return (
    <div className="min-h-screen">
      {/* Hero Slider / Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2000&auto=format&fit=crop"
            alt="Hero Background"
            className="w-full h-full object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f1a] via-[#0f0f1a]/60 to-transparent"></div>
        </div>

        <Section className="relative z-10 !py-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-[2px] bg-[#e94560]"></div>
              <span className="text-[#e94560] font-bold tracking-[0.2em] uppercase text-sm">{t.heroSubtitle}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] uppercase italic">
              {t.heroTitle.split(" ").map((word, i) => (
                <span key={i} className={i === 0 ? "text-[#e94560]" : ""}>{word} </span>
              ))}
            </h1>
            <div className="flex flex-wrap gap-4 mt-12">
              <Link href="/news">
                <Button size="lg" className="group">
                  {t.cta}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/matches">
                <Button variant="outline" size="lg">
                  {t.upcomingMatches}
                </Button>
              </Link>
            </div>
          </motion.div>
        </Section>

        <div className="absolute bottom-12 right-12 hidden lg:flex items-center gap-6">
          <div className="text-right">
            <div className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Next Match</div>
            <div className="text-white font-black italic text-xl uppercase tracking-tighter">
               {mockMatches[0].homeTeam} <span className="text-[#e94560]">vs</span> {mockMatches[0].awayTeam}
            </div>
          </div>
          <div className="w-16 h-16 rounded-2xl border-2 border-[#e94560] flex items-center justify-center animate-pulse rotate-12">
             <Calendar className="text-[#e94560]" />
          </div>
        </div>
      </section>

      {/* Stats Quick Grid */}
      <section className="bg-[#0a0a14] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="flex items-center gap-6">
              <Users className="w-10 h-10 text-[#e94560]" />
              <div>
                <div className="text-3xl font-black text-white italic italic leading-none">5,000+</div>
                <div className="text-gray-500 text-[10px] uppercase font-black tracking-widest mt-1">{t.statsPlayers}</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Target className="w-10 h-10 text-[#e94560]" />
              <div>
                <div className="text-3xl font-black text-white italic italic leading-none">120+</div>
                <div className="text-gray-500 text-[10px] uppercase font-black tracking-widest mt-1">{t.statsMatches}</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Trophy className="w-10 h-10 text-[#e94560]" />
              <div>
                <div className="text-3xl font-black text-white italic italic leading-none">15</div>
                <div className="text-gray-500 text-[10px] uppercase font-black tracking-widest mt-1">{t.statsTitles}</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Calendar className="w-10 h-10 text-[#e94560]" />
              <div>
                <div className="text-3xl font-black text-white italic italic leading-none">32</div>
                <div className="text-gray-500 text-[10px] uppercase font-black tracking-widest mt-1">{t.statsYears}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <Section>
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="text-[#e94560] font-black mb-4 uppercase tracking-[0.3em] text-xs">Update</div>
            <Heading level={2} className="mb-0">{t.latestNews}</Heading>
          </div>
          <Link href="/news">
            <Button variant="ghost" className="hidden md:flex">
              {t.viewAll} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {mockNews.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </Section>

      {/* Upcoming Matches */}
      <Section dark>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[#f5a623] font-black mb-4 uppercase tracking-[0.3em] text-xs">Schedule</div>
          <Heading level={2} centered>{t.upcomingMatches}</Heading>
        </div>
        <div className="space-y-6 max-w-5xl mx-auto">
          {mockMatches.map((match) => (
            <MatchWidget key={match.id} match={match} />
          ))}
        </div>
        <div className="mt-16 text-center">
           <Link href="/matches">
             <Button variant="outline" size="lg">{t.viewAll}</Button>
           </Link>
        </div>
      </Section>

      {/* Video Highlights */}
      <Section>
        <div className="flex items-center gap-4 mb-16">
           <div className="w-12 h-[2px] bg-[#e94560]"></div>
           <Heading level={2} className="mb-0">{t.videoHighlights}</Heading>
        </div>
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <Card noPadding className="aspect-video relative group cursor-pointer border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop"
                className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000"
                alt="Video"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-[#e94560] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 perspective-1000">
                  <Play className="text-white fill-current ml-2 w-10 h-10" />
                </div>
              </div>
              <div className="absolute bottom-10 left-10 right-10">
                <div className="text-white font-black text-3xl uppercase italic group-hover:text-[#e94560] transition-colors line-clamp-1 drop-shadow-2xl">
                  {mockNews[0].title[lang]}
                </div>
              </div>
            </Card>
          </div>
          <div className="lg:col-span-4 grid gap-4">
             {[1, 2].map(i => (
               <Card key={i} noPadding className="flex items-center gap-4 group cursor-pointer border border-white/5 h-full">
                 <div className="w-2/5 aspect-video relative overflow-hidden shrink-0">
                    <img
                      src={`https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=500&auto=format&fit=crop`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      alt="Thumbnail"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <Play className="w-6 h-6 text-white fill-current" />
                    </div>
                 </div>
                 <div className="pr-6">
                   <div className="text-sm font-bold text-white line-clamp-2 group-hover:text-[#e94560] transition-colors leading-snug">
                     Highlights: Kyrgyzstan vs Malaysia | World Cup Qualifiers 2026
                   </div>
                   <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-3">15 Nov 2023</div>
                 </div>
               </Card>
             ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e94560] via-[#e94560] to-[#f5a623]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <Trophy className="w-full h-full rotate-12 transform translate-x-1/4" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-12 uppercase italic leading-none tracking-tighter">
             {lang === "en" ? "Elevating Football in Kyrgyzstan" : lang === "ky" ? "Кыргыз футболун жогорулатуу" : "Развивая футбол Кыргызстана"}
          </h2>
          <Link href="/contacts">
            <Button className="bg-white !text-[#e94560] hover:!bg-gray-100 !px-12 !py-6 !text-xl shadow-2xl">
              {translations[lang].contacts.getInTouch}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
