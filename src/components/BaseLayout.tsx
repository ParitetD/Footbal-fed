"use client";

import { useState, createContext, useContext, ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "../i18n/navigation";
import { Menu, X, Sun, Moon, Globe, User, Info, Video, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({ darkMode: true, toggleTheme: () => {} });
export const useTheme = () => useContext(ThemeContext);

const navConfig = [
  {
    key: "federation",
    href: "/federation",
    items: [
      { key: "leadership", href: "/federation/leadership" },
      { key: "structure", href: "/federation/structure" },
      { key: "departments", href: "/federation/departments" },
      { key: "history", href: "/federation/history" },
      { key: "documents", href: "/federation/documents" },
      { key: "regulations", href: "/federation/regulations" },
      { key: "partners", href: "/federation/partners" },
      { key: "vacancies", href: "/federation/vacancies" },
    ]
  },
  {
    key: "nationalTeams",
    href: "/national-teams",
    items: [
      { key: "men", href: "/national-teams/men" },
      { key: "women", href: "/national-teams/women" },
      { key: "youth", href: "/national-teams/youth" },
      { key: "futsal", href: "/national-teams/futsal" },
      { key: "beach", href: "/national-teams/beach" },
    ]
  },
  {
    key: "tournaments",
    href: "/tournaments",
    items: [
      { key: "championships", href: "/tournaments/championships" },
      { key: "calendar", href: "/tournaments/calendar" },
      { key: "results", href: "/tournaments/results" },
      { key: "tables", href: "/tournaments/tables" },
      { key: "stats", href: "/tournaments/stats" },
    ]
  },
  {
    key: "development",
    href: "/development",
    items: [
      { key: "academies", href: "/development/academies" },
      { key: "referees", href: "/development/referees" },
      { key: "coaches", href: "/development/coaches" },
      { key: "licensing", href: "/development/licensing" },
    ]
  },
  {
    key: "media",
    href: "/media",
    items: [
      { key: "news", href: "/media/news" },
      { key: "photo", href: "/media/photo" },
      { key: "video", href: "/media/video" },
      { key: "press", href: "/media/press" },
    ]
  }
];

export default function BaseLayout({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("nav");
  const commonT = useTranslations("common");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className={`min-h-screen transition-colors duration-500 font-sans ${darkMode ? "bg-[#0f0f1a] text-white" : "bg-gray-50 text-gray-900"}`}>

          {/* Top Utility Bar */}
          <div className={`hidden lg:block py-2 border-b border-white/5 ${darkMode ? "bg-black/40" : "bg-gray-100"}`}>
             <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-silver/40">
                   <Link href="/contacts" className="hover:text-primary transition-colors">Contacts</Link>
                   <Link href="/federation/faq" className="hover:text-primary transition-colors">FAQ</Link>
                   <Link href="/registrations/player" className="text-secondary hover:text-white transition-colors">Online Registration</Link>
                </div>
                <div className="flex items-center gap-4">
                   <div className="flex items-center gap-2 pr-4 border-r border-white/5">
                      {["ky", "ru", "en"].map(lang => (
                        <button
                          key={lang}
                          onClick={() => router.replace(pathname, { locale: lang })}
                          className={`text-[10px] font-black uppercase w-6 h-6 flex items-center justify-center rounded transition-all ${
                            pathname.split('/')[1] === lang ? "bg-primary text-white" : "text-silver/40 hover:text-white"
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                   </div>
                   <button onClick={toggleTheme} className="text-silver/40 hover:text-white transition-colors">
                      {darkMode ? <Sun size={14} /> : <Moon size={14} />}
                   </button>
                </div>
             </div>
          </div>

          {/* Main Navigation */}
          <nav
            className={`sticky top-0 z-50 transition-all duration-300 ${
              scrolled
                ? (darkMode ? "bg-[#0f0f1a]/95 border-b border-white/5 py-2 shadow-2xl" : "bg-white/95 border-b border-gray-200 py-2 shadow-lg")
                : (darkMode ? "bg-[#0f0f1a] py-6" : "bg-white py-6")
            } backdrop-blur-md`}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-4 group">
                <div className="relative w-12 h-12 flex items-center justify-center">
                   <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                   <span className="relative text-white font-black text-xl italic">KFU</span>
                </div>
                <div className="hidden sm:block">
                  <p className="font-black text-lg leading-none uppercase italic tracking-tighter">Kyrgyz</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Football Union</p>
                </div>
              </Link>

              {/* Desktop Nav Items */}
              <div className="hidden lg:flex items-center space-x-1">
                {navConfig.map((item) => (
                  <div key={item.key} className="relative">
                    <button
                      onMouseEnter={() => setActiveMegaMenu(item.key)}
                      className={`px-4 py-2 text-xs font-black uppercase tracking-widest transition-all flex items-center gap-1 group ${
                        activeMegaMenu === item.key ? "text-primary" : ""
                      }`}
                    >
                      {t(item.key)}
                      <ChevronDown size={12} className={`transition-transform duration-300 ${activeMegaMenu === item.key ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                 <button className="p-2 hover:bg-white/5 rounded-full transition-colors hidden sm:block">
                    <Search size={20} className="text-silver/40" />
                 </button>
                 <Link href="/admin" className="hidden lg:flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
                    <User size={16} className="text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Portal</span>
                 </Link>
                 <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2">
                    <Menu />
                 </button>
              </div>
            </div>

            {/* Mega Menu Overlay */}
            <AnimatePresence>
              {activeMegaMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`absolute left-0 right-0 top-full shadow-2xl border-b border-white/5 ${darkMode ? "bg-[#141424]" : "bg-white"}`}
                >
                  <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-4 gap-12">
                     <div className="col-span-1">
                        <h3 className="text-4xl font-black italic uppercase mb-4 text-primary leading-none">
                           {t(activeMegaMenu)}
                        </h3>
                        <p className="text-silver/40 text-sm normal-case leading-relaxed">
                           Official section covering the {t(activeMegaMenu).toLowerCase()} of the Kyrgyz Football Union.
                        </p>
                        <div className="mt-8">
                           <Link
                             href={navConfig.find(n => n.key === activeMegaMenu)?.href || "/"}
                             className="text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 hover:text-primary transition-colors"
                           >
                              Explore Section <div className="h-[1px] w-8 bg-current"></div>
                           </Link>
                        </div>
                     </div>
                     <div className="col-span-3 grid grid-cols-3 gap-y-6 gap-x-12">
                        {navConfig.find(n => n.key === activeMegaMenu)?.items.map((sub) => (
                           <Link
                             key={sub.key}
                             href={sub.href}
                             className="group flex flex-col gap-1"
                           >
                              <span className="text-xs font-black uppercase tracking-wider group-hover:text-primary transition-colors">
                                 {t(sub.key)}
                              </span>
                              <span className="text-[10px] text-silver/30 uppercase font-bold tracking-widest">
                                 Official {sub.key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                              </span>
                           </Link>
                        ))}
                     </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
             {mobileMenuOpen && (
               <motion.div
                 initial={{ x: "100%" }}
                 animate={{ x: 0 }}
                 exit={{ x: "100%" }}
                 transition={{ type: "spring", damping: 25, stiffness: 200 }}
                 className={`fixed inset-0 z-[100] ${darkMode ? "bg-[#0f0f1a]" : "bg-white"} p-6 flex flex-col`}
               >
                  <div className="flex justify-between items-center mb-12">
                     <span className="text-2xl font-black italic">KFU</span>
                     <button onClick={() => setMobileMenuOpen(false)}><X size={32} /></button>
                  </div>

                  <div className="flex-1 overflow-y-auto">
                     {navConfig.map(item => (
                        <div key={item.key} className="mb-8">
                           <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">{t(item.key)}</h4>
                           <div className="flex flex-col gap-4">
                              {item.items.map(sub => (
                                 <Link
                                   key={sub.key}
                                   href={sub.href}
                                   onClick={() => setMobileMenuOpen(false)}
                                   className="text-3xl font-black uppercase italic"
                                 >
                                    {t(sub.key)}
                                 </Link>
                              ))}
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="pt-8 border-t border-white/5 flex justify-between items-center">
                     <div className="flex gap-4">
                        {["ky", "ru", "en"].map(lang => (
                           <button
                             key={lang}
                             onClick={() => router.replace(pathname, { locale: lang })}
                             className={`font-black uppercase ${pathname.split('/')[1] === lang ? "text-primary" : "text-silver/40"}`}
                           >
                              {lang}
                           </button>
                        ))}
                     </div>
                     <button onClick={toggleTheme} className="p-4 bg-white/5 rounded-xl">
                        {darkMode ? <Sun /> : <Moon />}
                     </button>
                  </div>
               </motion.div>
             )}
          </AnimatePresence>

          <main>
            {children}
          </main>

          <footer className={`pt-32 pb-12 ${darkMode ? "bg-black" : "bg-gray-100 border-t"}`}>
             <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
                   <div className="lg:col-span-1">
                      <div className="flex items-center gap-4 mb-8">
                         <div className="w-10 h-10 bg-primary rotate-45 rounded-lg flex items-center justify-center">
                            <span className="text-white font-black italic -rotate-45">KFU</span>
                         </div>
                         <span className="text-xl font-black italic uppercase">Kyrgyz Football Union</span>
                      </div>
                      <p className="text-silver/40 text-sm leading-relaxed mb-8">
                         The governing body of football in the Kyrgyz Republic. Working to unite our nation through the beautiful game.
                      </p>
                      <div className="flex gap-4">
                         {[1,2,3,4].map(i => (
                           <div key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer grayscale hover:grayscale-0">
                              <Video size={16} />
                           </div>
                         ))}
                      </div>
                   </div>

                   {navConfig.slice(0, 3).map(section => (
                     <div key={section.key}>
                        <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-8">{t(section.key)}</h4>
                        <ul className="space-y-4">
                           {section.items.slice(0, 5).map(item => (
                             <li key={item.key}>
                                <Link href={item.href} className="text-silver/40 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">
                                   {t(item.key)}
                                </Link>
                             </li>
                           ))}
                        </ul>
                     </div>
                   ))}
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
                   <p className="text-[10px] font-black uppercase tracking-widest text-silver/20">
                      © 2024 Kyrgyz Football Union. All Rights Reserved.
                   </p>
                   <div className="flex gap-8">
                      <a href="#" className="text-[10px] font-black uppercase tracking-widest text-silver/20 hover:text-white">Privacy Policy</a>
                      <a href="#" className="text-[10px] font-black uppercase tracking-widest text-silver/20 hover:text-white">Terms of Service</a>
                   </div>
                </div>
             </div>
          </footer>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
