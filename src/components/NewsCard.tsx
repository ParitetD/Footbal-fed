import React from "react";
import { NewsItem } from "../lib/types";
import { useLang } from "./BaseLayout";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default function NewsCard({ item }: { item: NewsItem }) {
  const { lang } = useLang();

  return (
    <Card noPadding className="flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title[lang]}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="red">{item.category[lang]}</Badge>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-gray-500 text-xs mb-3">
          <Calendar className="w-3 h-3 mr-2" />
          {item.date}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
          {item.title[lang]}
        </h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-3">
          {item.excerpt[lang]}
        </p>
        <div className="mt-auto">
          <Link
            href={`/news/${item.id}`}
            className="inline-flex items-center text-[#e94560] font-bold text-sm hover:translate-x-2 transition-transform"
          >
            Read More <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
