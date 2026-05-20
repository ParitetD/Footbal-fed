"use client";

import { useLang } from "../../components/BaseLayout";
import { translations } from "../../lib/translations";
import { squad, nationalCoach } from "../../lib/mockData";
import Section from "../../components/ui/Section";
import Heading from "../../components/ui/Heading";
import PlayerCard from "../../components/PlayerCard";
import Card from "../../components/ui/Card";
import { Target, Shield, Zap, Award } from "lucide-react";

export default function NationalTeamPage() {
  const { lang } = useLang();
  const t = translations[lang].team;

  const positions = ["Goalkeeper", "Defender", "Midfielder", "Forward"] as const;

  return (
    <div className="pt-20">
      {/* Coach Section */}
      <section className="relative min-h-[70vh] flex items-center bg-[#0a0a14]">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-30 md:opacity-100">
           <img src={nationalCoach.image} className="w-full h-full object-cover grayscale" alt="Coach" />
           <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14] via-[#0a0a14]/50 to-transparent"></div>
        </div>

        <Section className="!py-0 relative z-10">
          <div className="max-w-2xl">
            <div className="text-[#e94560] font-black uppercase tracking-[0.3em] mb-4">{t.coach}</div>
            <Heading level={1} className="!text-7xl mb-6">{nationalCoach.name[lang]}</Heading>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
               {nationalCoach.bio[lang]} Maxim Lisitsyn brings a wealth of experience and a modern tactical approach to the Kyrgyz National Team. His focus on youth development and disciplined defensive structure is shaping the new era of &quot;The White Falcons&quot;.
            </p>
            <div className="grid grid-cols-3 gap-8">
               <div>
                  <div className="text-3xl font-black text-white italic">45%</div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Win Rate</div>
               </div>
               <div>
                  <div className="text-3xl font-black text-white italic">1.8</div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Goals / Match</div>
               </div>
               <div>
                  <div className="text-3xl font-black text-white italic">2024</div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Appointed</div>
               </div>
            </div>
          </div>
        </Section>
      </section>

      {/* Squad Section */}
      <Section>
        <div className="text-center mb-20">
           <Heading level={2} centered>{t.squad}</Heading>
           <p className="text-gray-500 uppercase font-black tracking-[0.2em] text-xs">Official Selection - World Cup Qualifiers</p>
        </div>

        {positions.map((pos) => (
          <div key={pos} className="mb-20">
             <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-1 bg-[#e94560]"></div>
                <h3 className="text-2xl font-black text-white uppercase italic tracking-widest">{pos}s</h3>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {squad.filter(p => p.position === pos).length > 0 ? (
                   squad.filter(p => p.position === pos).map(player => (
                     <PlayerCard key={player.id} player={player} />
                   ))
                ) : (
                   // Placeholder cards for demo if squad is empty for position
                   [1, 2, 3].map(i => (
                     <Card key={i} className="aspect-[3/4] border-dashed border-white/10 bg-transparent flex flex-col items-center justify-center grayscale opacity-30">
                        <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-4">
                           <Zap className="w-8 h-8" />
                        </div>
                        <div className="h-4 w-32 bg-white/10 rounded mb-2"></div>
                        <div className="h-2 w-20 bg-white/5 rounded"></div>
                     </Card>
                   ))
                )}
             </div>
          </div>
        ))}
      </Section>

      {/* Team Stats */}
      <Section dark>
        <Heading level={2} centered className="mb-16">{t.stats}</Heading>
        <div className="grid md:grid-cols-4 gap-8">
           {[
             { icon: Target, val: "24.5", label: "Avg. Age" },
             { icon: Shield, val: "12", label: "Clean Sheets" },
             { icon: Zap, val: "105", label: "Goals Scored" },
             { icon: Award, val: "95", label: "FIFA Rank" }
           ].map((stat, i) => (
             <Card key={i} className="text-center">
                <stat.icon className="w-8 h-8 text-[#e94560] mx-auto mb-4" />
                <div className="text-4xl font-black text-white italic mb-2">{stat.val}</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">{stat.label}</div>
             </Card>
           ))}
        </div>
      </Section>
    </div>
  );
}
