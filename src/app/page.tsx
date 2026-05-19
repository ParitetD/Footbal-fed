"use client";

import { useLang } from "../components/BaseLayout";
import Link from "next/link";
import { Calendar, ArrowRight, Trophy } from "lucide-react";

const news = [
  { id: 1, title: "Сборная Кыргызстана одержала победу над Таджикистаном", date: "15 мая 2024", category: "Национальная сборная" },
  { id: 2, title: "Чемпионат Кыргызстана: итоги 10-го тура", date: "14 мая 2024", category: "Чемпионат" },
  { id: 3, title: "Молодежная сборная готовится к Азиатским играм", date: "13 мая 2024", category: "Молодежь" },
];

const matches = [
  { id: 1, home: "Кыргызстан", away: "Оман", time: "19:00", competition: "Отбор на ЧМ-2026" },
  { id: 2, home: "Кыргызстан", away: "Иран", time: "21:00", competition: "Отбор на ЧМ-2026" },
  { id: 3, home: "Алга", away: "Дордой", time: "17:00", competition: "Чемпионат КР" },
];

const tournaments = [
  { name: "Чемпионат Кыргызстана", year: "2024", status: "Активен", teams: 10 },
  { name: "Кубок Кыргызстана", year: "2024", status: "Скоро", teams: 16 },
  { name: "Первая лига", year: "2024", status: "Активен", teams: 12 },
];

export default function Home() {
  const { lang } = useLang();
  const t = {"ky": { heroTitle: "Кыргызстандын Футбол Федерациясы", cta: "Көбүрөөк билүү", latestNews: "Соңку жанылыктар", upcomingMatches: "Келген матчтар", tournaments: "Турнирлар", viewAll: "Баарын көрүү" }, "en": { heroTitle: "Kyrgyz Football Federation", cta: "Learn More", latestNews: "Latest News", upcomingMatches: "Upcoming Matches", tournaments: "Tournaments", viewAll: "View All" }, "ru": { heroTitle: "Федерация Фубола Кыргызстана", cta: "Узнать больше", latestNews: "Последние новости", upcomingMatches: "Предстоящие матчи", tournaments: "Турниры", viewAll: "Смотреть все" }}[lang] || {"ru": { heroTitle: "Федерация Фубола Кыргызстана", cta: "Узнать больше", latestNews: "Последние новости", upcomingMatches: "Предстоящие матчи", tournaments: "Турниры", viewAll: "Смотреть все" }};

  return (
    <div className="min-h-screen">
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">КФФ - {t.heroTitle}</h1>
          <p className="text-xl text-gray-300 mb-10">Официальный сайт</p>
          <Link href="/news" className="inline-flex items-center px-8 py-4 bg-[#e94560] text-white font-semibold rounded-xl">
            {t.cta}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-20 bg-[#0f0f1a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center"><div className="text-5xl font-bold text-[#e94560] mb-2">5000+</div><div className="text-gray-400">Игроков</div></div>
            <div className="text-center"><div className="text-5xl font-bold text-[#e94560] mb-2">120+</div><div className="text-gray-400">Матчей</div></div>
            <div className="text-center"><div className="text-5xl font-bold text-[#e94560] mb-2">15</div><div className="text-gray-400">Титлов</div></div>
            <div className="text-center"><div className="text-5xl font-bold text-[#e94560] mb-2">8</div><div className="text-gray-400">Лет в AFC</div></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12">Последние новости</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item) => (
              <article key={item.id} className="bg-[#16213e] rounded-2xl p-6">
                <div className="text-sm text-[#e94560] mb-2">{item.category}</div>
                <h3 className="text-white font-semibold text-lg mb-4">{item.title}</h3>
                <div className="flex items-center text-gray-400 text-sm mb-4"><Calendar className="w-4 h-4 mr-2"/>{item.date}</div>
                <Link href="/news" className="text-[#e94560] font-medium">Читать далее</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#16213e]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12">Предстоящие матчи</h2>
          <div className="space-y-4">
            {matches.map((match) => (
              <div key={match.id} className="bg-[#1a1a2e] rounded-xl p-6 flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <span className="text-4xl">Кыргызстан</span>
                  <span className="text-white font-semibold text-lg">{match.home}</span>
                </div>
                <div className="text-center mb-4 md:mb-0">
                  <div className="text-sm text-gray-400 mb-1">{match.competition}</div>
                  <div className="text-3xl font-bold text-[#e94560]">{match.time}</div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-white font-semibold text-lg">{match.away}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Турниры</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tournaments.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-[#16213e] to-[#0f3460] rounded-2xl p-8 text-center">
                <Trophy className="w-16 h-16 mx-auto mb-4 text-[#e94560]" />
                <h3 className="text-white font-bold text-xl mb-2">{item.name}</h3>
                <p className="text-gray-400 mb-4">{item.year}</p>
                <span className="px-3 py-1 bg-[#e94560]/20 text-[#e94560] rounded-full text-sm">{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#e94560] to-[#f5a623]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Присоединяйтесь к развитию фубола Кыргызстана</h2>
          <Link href="/contacts" className="inline-flex items-center px-8 py-4 bg-white text-[#e94560] font-semibold rounded-xl">Связаться с нами</Link>
        </div>
      </section>
    </div>
  );
}
