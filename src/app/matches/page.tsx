"use client";

import { useLang } from "../../components/BaseLayout";
import { translations } from "../../lib/translations";
import { mockMatches, standings } from "../../lib/mockData";
import Section from "../../components/ui/Section";
import Heading from "../../components/ui/Heading";
import MatchWidget from "../../components/MatchWidget";
import FixtureTable from "../../components/FixtureTable";
import { useState } from "react";

export default function MatchesPage() {
  const { lang } = useLang();
  const t = translations[lang].matches;
  const [activeTab, setActiveTab] = useState<"fixtures" | "results" | "standings">("fixtures");

  return (
    <div className="pt-20">
      <section className="bg-[#0f0f1a] py-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <Heading level={1}>{t.title}</Heading>

          <div className="flex gap-8 mt-12 overflow-x-auto pb-2 scrollbar-hide">
            {(["fixtures", "results", "standings"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-black uppercase tracking-[0.2em] pb-4 border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? "text-[#e94560] border-[#e94560]"
                    : "text-gray-500 border-transparent hover:text-white"
                }`}
              >
                {t[tab as keyof typeof t]}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Section>
        {activeTab === "fixtures" && (
          <div className="space-y-8">
            <div className="grid gap-6">
              {mockMatches.filter(m => m.status === "upcoming").map(match => (
                <MatchWidget key={match.id} match={match} />
              ))}
            </div>
            <div className="mt-16">
               <Heading level={3} className="mb-8">Full Fixtures Schedule</Heading>
               <FixtureTable matches={mockMatches} />
            </div>
          </div>
        )}

        {activeTab === "results" && (
          <div className="grid gap-6">
            {mockMatches.filter(m => m.status === "finished").map(match => (
              <MatchWidget key={match.id} match={match} />
            ))}
          </div>
        )}

        {activeTab === "standings" && (
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#16213e] rounded-2xl border border-white/5 overflow-hidden">
               <table className="w-full text-left">
                  <thead className="bg-[#0f0f1a]">
                    <tr className="text-gray-500 text-[10px] font-black uppercase tracking-widest">
                       <th className="py-6 px-6">#</th>
                       <th className="py-6 px-6">Team</th>
                       <th className="py-6 px-6 text-center">P</th>
                       <th className="py-6 px-6 text-center">W</th>
                       <th className="py-6 px-6 text-center">D</th>
                       <th className="py-6 px-6 text-center">L</th>
                       <th className="py-6 px-6 text-center font-bold text-white">PTS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {standings.map((team) => (
                      <tr key={team.rank} className="hover:bg-white/5 transition-colors">
                        <td className="py-6 px-6 text-white font-black">{team.rank}</td>
                        <td className="py-6 px-6">
                           <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                              <span className="text-white font-bold">{team.team}</span>
                           </div>
                        </td>
                        <td className="py-6 px-6 text-center text-gray-400 font-bold">{team.played}</td>
                        <td className="py-6 px-6 text-center text-gray-400">{team.won}</td>
                        <td className="py-6 px-6 text-center text-gray-400">{team.drawn}</td>
                        <td className="py-6 px-6 text-center text-gray-400">{team.lost}</td>
                        <td className="py-6 px-6 text-center text-[#e94560] font-black">{team.points}</td>
                      </tr>
                    ))}
                  </tbody>
               </table>
            </div>
            <div className="mt-8 flex gap-6 justify-center">
               <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase">
                  <div className="w-2 h-2 bg-[#f5a623] rounded-full"></div>
                  Champions League
               </div>
               <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase">
                  <div className="w-2 h-2 bg-[#e94560] rounded-full"></div>
                  Relegation Zone
               </div>
            </div>
          </div>
        )}
      </Section>
    </div>
  );
}
