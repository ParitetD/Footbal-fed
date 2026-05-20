"use client";

import { useState, createContext, useContext, ReactNode, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { translations } from "../lib/translations";
import { Language } from "../lib/types";
import { Menu, X, Sun, Moon, Globe, User, Info, Video } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({ darkMode: true, toggleTheme: () => {} });
export const useTheme = () => useContext(ThemeContext);

interface LangContextType {
  lang: Language;
  setLang: (v: Language) => void;
}

const LangContext = createContext<LangContextType>({ lang: "ru", setLang: () => {} });
export const useLang = () => useContext(LangContext);

const navLinks = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/news", key: "news" },
  { href: "/matches", key: "matches" },
  { href: "/national-team", key: "nationalTeam" },
  { href: "/gallery", key: "gallery" },
  { href: "/contacts", key: "contacts" },
];

export default function BaseLayout({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState<Language>("ru");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <LangContext.Provider value={{ lang, setLang }}>
        <div className={`${darkMode ? "dark" : ""}`}>
          <div className={`min-h-screen transition-colors duration-500 ${darkMode ? "bg-[#0f0f1a] text-white" : "bg-gray-50 text-gray-900"}`}>

            {/* Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              scrolled
                ? (darkMode ? "bg-[#0f0f1a]/95 border-b border-white/5 py-3" : "bg-white/95 border-b border-gray-200 py-3")
                : "bg-transparent py-6"
            } backdrop-blur-md`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                  {/* Logo */}
                  <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                       <div className="absolute inset-0 bg-gradient-to-br from-[#e94560] to-[#f5a623] rounded-xl rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                       <span className="relative text-white font-black text-xl italic tracking-tighter">KFF</span>
                    </div>
                    <div className="hidden sm:flex flex-col">
                      <span className="font-black text-lg leading-none italic uppercase tracking-tighter">Kyrgyz</span>
                      <span className="font-bold text-[10px] uppercase tracking-[0.3em] text-[#e94560]">Football Union</span>
                    </div>
                  </Link>

                  {/* Desktop Nav */}
                  <div className="hidden lg:flex items-center space-x-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.key}
                        href={link.href}
                        className={`px-4 py-2 text-xs font-black uppercase tracking-widest transition-all relative group ${
                          pathname === link.href
                            ? "text-[#e94560]"
                            : (darkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black")
                        }`}
                      >
                        {t.nav[link.key as keyof typeof t.nav]}
                        {pathname === link.href && (
                          <motion.div layoutId="nav-underline" className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#e94560]" />
                        )}
                      </Link>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {/* i18n Toggle */}
                    <div className={`hidden sm:flex items-center p-1 rounded-lg ${darkMode ? "bg-white/5" : "bg-gray-100"}`}>
                      {(["ky", "ru", "en"] as const).map((l) => (
                        <button
                          key={l}
                          onClick={() => setLang(l)}
                          className={`px-2 py-1 text-[10px] font-black uppercase rounded ${
                            lang === l
                              ? "bg-[#e94560] text-white shadow-lg"
                              : (darkMode ? "text-gray-500 hover:text-gray-300" : "text-gray-400 hover:text-gray-600")
                          }`}
                        >
                          {l}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={toggleTheme}
                      className={`p-2 rounded-lg transition-colors ${darkMode ? "bg-white/5 hover:bg-white/10" : "bg-gray-100 hover:bg-gray-200"}`}
                    >
                      {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>

                    <button
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      className="lg:hidden p-2"
                    >
                      {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                  </div>
                </div>
              </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className={`fixed inset-0 z-[60] lg:hidden ${darkMode ? "bg-[#0f0f1a]" : "bg-white"}`}
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-12">
                       <span className="font-black text-2xl italic">KFF</span>
                       <button onClick={() => setMobileMenuOpen(false)}><X className="w-8 h-8" /></button>
                    </div>
                    <div className="flex flex-col gap-6">
                      {navLinks.map((link) => (
                        <Link
                          key={link.key}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`text-4xl font-black uppercase italic ${
                            pathname === link.href ? "text-[#e94560]" : ""
                          }`}
                        >
                          {t.nav[link.key as keyof typeof t.nav]}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-auto flex justify-between items-center">
                       <div className="flex gap-4">
                          {(["ky", "ru", "en"] as const).map((l) => (
                            <button key={l} onClick={() => setLang(l)} className={`font-black uppercase ${lang === l ? "text-[#e94560]" : "text-gray-500"}`}>{l}</button>
                          ))}
                       </div>
                       <div className="flex gap-4">
                          <User className="w-6 h-6" />
                          <Info className="w-6 h-6" />
                       </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Content */}
            <main className="min-h-screen">
              {children}
            </main>

            {/* Footer */}
            <footer className={`${darkMode ? "bg-[#0a0a14] border-t border-white/5" : "bg-gray-900 text-white"} pt-20 pb-10`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                  <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="flex items-center gap-3 mb-8">
                      <div className="relative w-10 h-10 flex items-center justify-center">
                         <div className="absolute inset-0 bg-gradient-to-br from-[#e94560] to-[#f5a623] rounded-lg rotate-45"></div>
                         <span className="relative text-white font-black italic">KFF</span>
                      </div>
                      <span className="font-black text-xl italic uppercase">Kyrgyz Football</span>
                    </Link>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8">
                      {t.footer.about}
                    </p>
                    <div className="flex gap-4">
                      {[User, Info, Video].map((Icon, i) => (
                        <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#e94560] transition-colors">
                          <Icon className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-black uppercase italic tracking-widest text-sm mb-8">{t.footer.quickLinks}</h4>
                    <ul className="space-y-4">
                      {navLinks.slice(1, 5).map((link) => (
                        <li key={link.key}>
                          <Link href={link.href} className="text-gray-500 hover:text-[#e94560] transition-colors text-sm font-bold uppercase tracking-wider">
                            {t.nav[link.key as keyof typeof t.nav]}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-black uppercase italic tracking-widest text-sm mb-8">{t.footer.contact}</h4>
                    <ul className="space-y-4 text-gray-500 text-sm">
                      <li className="flex items-start gap-3">
                         <Globe className="w-4 h-4 text-[#e94560] shrink-0" />
                         <span>г. Бишкек, ул. Фрунзе 419</span>
                      </li>
                      <li className="font-bold text-white">+996 312 62 30 75</li>
                      <li>info@kfu.kg</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-black uppercase italic tracking-widest text-sm mb-8">Partners</h4>
                    <div className="grid grid-cols-2 gap-4">
                       {[1, 2, 3, 4].map(i => (
                         <div key={i} className="aspect-[3/1] bg-white/5 rounded-lg border border-white/5 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100">
                            <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Logo {i}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
                   <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
                     © 2024 {t.footer.copyright}
                   </p>
                   <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-600">
                      <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                      <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                   </div>
                </div>
              </div>
            </footer>

          </div>
        </div>
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
}
