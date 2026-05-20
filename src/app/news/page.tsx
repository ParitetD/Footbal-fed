"use client";

import { useLang } from "../../components/BaseLayout";
import { translations } from "../../lib/translations";
import { mockNews } from "../../lib/mockData";
import Section from "../../components/ui/Section";
import Heading from "../../components/ui/Heading";
import NewsCard from "../../components/NewsCard";
import Button from "../../components/ui/Button";
import { Search, Filter } from "lucide-react";

export default function NewsPage() {
  const { lang } = useLang();
  const t = translations[lang].nav;

  const categories = ["All", "National Team", "League", "Youth", "Events"];

  return (
    <div className="pt-20">
      <Section dark className="!pb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <Heading level={1}>{t.news}</Heading>
            <p className="text-gray-500 max-w-xl">
              Stay updated with the latest happenings in Kyrgyz football, from national team victories to grassroots developments.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search news..."
                  className="bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#e94560] transition-colors w-64"
                />
             </div>
             <Button variant="outline" className="!px-4">
                <Filter className="w-4 h-4" />
             </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all ${
                i === 0 ? "bg-[#e94560] text-white" : "bg-white/5 text-gray-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Multiply mock data to fill the page */}
          {[...mockNews, ...mockNews, ...mockNews].map((item, i) => (
            <NewsCard key={`${item.id}-${i}`} item={item} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button variant="outline" size="lg">Load More</Button>
        </div>
      </Section>
    </div>
  );
}
