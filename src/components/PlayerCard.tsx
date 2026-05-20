import React from "react";
import { Player } from "../lib/types";
import { useLang } from "./BaseLayout";
import Card from "./ui/Card";

export default function PlayerCard({ player }: { player: Player }) {
  const { lang } = useLang();

  return (
    <Card noPadding className="group relative overflow-hidden aspect-[3/4]">
      <img
        src={player.image}
        alt={player.name[lang]}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent opacity-90"></div>

      <div className="absolute top-4 right-4">
        <div className="text-5xl font-black text-white/20 italic group-hover:text-[#e94560]/40 transition-colors">
          #{player.number}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="text-[#e94560] font-bold text-xs uppercase tracking-[0.2em] mb-1">
          {player.position}
        </div>
        <h3 className="text-2xl font-black text-white uppercase italic leading-tight mb-2">
          {player.name[lang]}
        </h3>
        <div className="flex items-center gap-4 text-gray-400 text-xs">
          <span>{player.club}</span>
          <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
          <span>{player.birthDate}</span>
        </div>
      </div>

      <div className="absolute inset-0 border-0 group-hover:border-4 border-[#e94560]/30 transition-all pointer-events-none rounded-2xl"></div>
    </Card>
  );
}
