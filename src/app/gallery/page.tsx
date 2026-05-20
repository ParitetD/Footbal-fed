"use client";

import { useLang } from "../../components/BaseLayout";
import Section from "../../components/ui/Section";
import Heading from "../../components/ui/Heading";
import Card from "../../components/ui/Card";
import { Play, Image as ImageIcon, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function GalleryPage() {
  const { lang } = useLang();
  const [filter, setFilter] = useState<"all" | "photos" | "videos">("all");

  const items = [
    { type: "photo", url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000", title: "Training Session - Bishkek" },
    { type: "video", url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000", title: "Highlights: KGZ vs OMN" },
    { type: "photo", url: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1000", title: "Youth Tournament Finals" },
    { type: "photo", url: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1000", title: "National Stadium Atmosphere" },
    { type: "video", url: "https://images.unsplash.com/photo-1551280857-2b9bbe52acf4?q=80&w=1000", title: "Press Conference Recap" },
    { type: "photo", url: "https://images.unsplash.com/photo-1516567727245-ad8c68f3ec93?q=80&w=1000", title: "Historical Archives" },
  ];

  return (
    <div className="pt-20">
      <section className="bg-[#0f0f1a] py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <Heading level={1} className="mb-0">Media Gallery</Heading>

          <div className="flex bg-white/5 rounded-xl p-1">
             {(["all", "photos", "videos"] as const).map(f => (
               <button
                 key={f}
                 onClick={() => setFilter(f)}
                 className={`px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${
                   filter === f ? "bg-[#e94560] text-white" : "text-gray-500 hover:text-white"
                 }`}
               >
                 {f}
               </button>
             ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {items.filter(item => filter === "all" || item.type === (filter === "photos" ? "photo" : "video")).map((item, i) => (
             <Card key={i} noPadding className="group cursor-pointer relative overflow-hidden aspect-square">
                <img
                  src={item.url}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100">
                      {item.type === "video" ? <Play className="text-white fill-current" /> : <ImageIcon className="text-white" />}
                   </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform">
                   <div className="bg-[#16213e]/90 backdrop-blur-md p-4 rounded-xl border border-white/10">
                      <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                      <div className="flex items-center justify-between">
                         <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{item.type}</span>
                         <ExternalLink className="w-3 h-3 text-[#e94560]" />
                      </div>
                   </div>
                </div>
             </Card>
           ))}
        </div>
      </Section>
    </div>
  );
}
