import React from "react";
import { Match } from "../lib/types";
import { useLang } from "./BaseLayout";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import { Calendar, MapPin } from "lucide-react";

export default function MatchWidget({ match }: { match: Match }) {
  const { lang } = useLang();

  return (
    <Card className="!p-0 overflow-hidden">
      <div className="flex flex-col md:flex-row items-stretch">
        <div className="bg-[#0f0f1a] p-4 flex flex-col justify-center items-center border-r border-white/5 md:w-48 text-center">
          <div className="text-[#f5a623] font-black text-lg mb-1">{match.time}</div>
          <div className="text-gray-400 text-xs uppercase font-bold tracking-widest">{match.date}</div>
          <div className="mt-3">
             <Badge variant={match.status === "live" ? "red" : "gray"}>
                {match.status}
             </Badge>
          </div>
        </div>
        <div className="flex-grow p-6 flex flex-col md:flex-row items-center justify-around gap-8">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
               <span className="text-white font-bold">{match.homeTeam.substring(0, 3).toUpperCase()}</span>
            </div>
            <span className="text-white font-bold text-lg">{match.homeTeam}</span>
          </div>

          <div className="flex flex-col items-center">
            {match.status === "finished" || match.status === "live" ? (
              <div className="text-5xl font-black text-white italic">
                {match.homeScore} - {match.awayScore}
              </div>
            ) : (
              <div className="text-4xl font-black text-white/20 italic">VS</div>
            )}
            <div className="text-gray-500 text-[10px] mt-2 uppercase tracking-widest text-center">
              {match.competition[lang]}
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
               <span className="text-white font-bold">{match.awayTeam.substring(0, 3).toUpperCase()}</span>
            </div>
            <span className="text-white font-bold text-lg">{match.awayTeam}</span>
          </div>
        </div>
        <div className="bg-[#1a1a2e] p-4 flex flex-col justify-center items-center md:w-64 border-l border-white/5">
           <div className="flex items-center text-gray-400 text-xs gap-2">
             <MapPin className="w-3 h-3" />
             {match.venue}
           </div>
        </div>
      </div>
    </Card>
  );
}
