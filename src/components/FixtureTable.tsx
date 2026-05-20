import React from "react";
import { Match } from "../lib/types";
import { useLang } from "./BaseLayout";
import Badge from "./ui/Badge";

export default function FixtureTable({ matches }: { matches: Match[] }) {
  const { lang } = useLang();

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-white/5">
            <th className="py-4 px-6 text-gray-500 text-xs uppercase font-black tracking-widest">Date</th>
            <th className="py-4 px-6 text-gray-500 text-xs uppercase font-black tracking-widest">Match</th>
            <th className="py-4 px-6 text-gray-500 text-xs uppercase font-black tracking-widest text-center">Score</th>
            <th className="py-4 px-6 text-gray-500 text-xs uppercase font-black tracking-widest">Competition</th>
            <th className="py-4 px-6 text-gray-500 text-xs uppercase font-black tracking-widest">Venue</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {matches.map((match) => (
            <tr key={match.id} className="hover:bg-white/5 transition-colors group">
              <td className="py-6 px-6">
                <div className="text-white font-bold text-sm">{match.date}</div>
                <div className="text-gray-500 text-[10px]">{match.time}</div>
              </td>
              <td className="py-6 px-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-white font-bold">{match.homeTeam}</span>
                    <span className="text-gray-600 font-black">VS</span>
                    <span className="text-white font-bold">{match.awayTeam}</span>
                  </div>
                </div>
              </td>
              <td className="py-6 px-6 text-center">
                {match.status === "finished" ? (
                  <div className="inline-block px-4 py-1 bg-white/5 rounded text-white font-black italic">
                    {match.homeScore} - {match.awayScore}
                  </div>
                ) : (
                  <Badge variant="gray">{match.status}</Badge>
                )}
              </td>
              <td className="py-6 px-6">
                <span className="text-gray-400 text-sm">{match.competition[lang]}</span>
              </td>
              <td className="py-6 px-6">
                <span className="text-gray-500 text-xs">{match.venue}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
