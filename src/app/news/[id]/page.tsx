"use client";

import { useLang } from "../../../components/BaseLayout";
import { mockNews } from "../../../lib/mockData";
import { useParams } from "next/navigation";
import Section from "../../../components/ui/Section";
import Heading from "../../../components/ui/Heading";
import Badge from "../../../components/ui/Badge";
import { Calendar, Share2, User, Link as LinkIcon, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewsArticlePage() {
  const { id } = useParams();
  const { lang } = useLang();

  // Find the news item, or use the first one as fallback for demo
  const item = mockNews.find(n => n.id === id) || mockNews[0];

  return (
    <div className="pt-20">
      <article>
        {/* Header Section */}
        <section className="relative h-[60vh] flex items-end">
          <div className="absolute inset-0 z-0">
            <img
              src={item.image}
              className="w-full h-full object-cover brightness-[0.4]"
              alt={item.title[lang]}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 w-full pb-16">
            <Link href="/news" className="inline-flex items-center text-white/50 hover:text-[#e94560] transition-colors mb-8 text-sm font-bold uppercase tracking-widest">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to News
            </Link>
            <div className="mb-6">
               <Badge variant="red">{item.category[lang]}</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic leading-[1.1] max-w-4xl">
               {item.title[lang]}
            </h1>
            <div className="flex items-center gap-6 mt-8 text-gray-400 text-sm">
               <div className="flex items-center gap-2">
                 <Calendar className="w-4 h-4" />
                 {item.date}
               </div>
               <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
               <div>By KFF Media</div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <Section>
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-xl text-white font-medium leading-relaxed mb-8">
                  {item.excerpt[lang]}
                </p>
                <div className="text-gray-400 leading-relaxed space-y-6">
                   <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                   </p>
                   <p>
                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                   </p>
                   <img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1000" className="rounded-2xl border border-white/5 my-12" alt="Content" />
                   <p>
                     Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                   </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-12">
                <div>
                   <h4 className="text-white font-black uppercase italic tracking-widest text-sm mb-6">Share This Article</h4>
                   <div className="flex gap-4">
                      {[User, Share2, LinkIcon].map((Icon, i) => (
                        <button key={i} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#e94560] hover:border-[#e94560] transition-all">
                          <Icon className="w-5 h-5 text-white" />
                        </button>
                      ))}
                   </div>
                </div>

                <div>
                   <h4 className="text-white font-black uppercase italic tracking-widest text-sm mb-6">Related News</h4>
                   <div className="space-y-6">
                      {mockNews.map((news, i) => (
                        <Link key={i} href={`/news/${news.id}`} className="flex gap-4 group">
                          <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden border border-white/10">
                            <img src={news.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Related" />
                          </div>
                          <div>
                            <h5 className="text-white font-bold text-sm line-clamp-2 group-hover:text-[#e94560] transition-colors">
                              {news.title[lang]}
                            </h5>
                            <span className="text-[10px] text-gray-500 font-bold uppercase mt-2 block">{news.date}</span>
                          </div>
                        </Link>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </article>
    </div>
  );
}
