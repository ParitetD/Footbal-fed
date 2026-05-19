"use client";

import { useState, createContext, useContext, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { translations, Language } from "../lib/translations";
import { Menu, X, Sun, Moon } from "lucide-react";

interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType>({ darkMode: true, setDarkMode: () => {} });

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
  { href: "/media", key: "media" },
  { href: "/documents", key: "documents" },
  { href: "/contacts", key: "contacts" },
];

const languages: { code: Language; label: string }[] = [
  { code: "ky", label: "КЫЛ" },
  { code: "ru", label: "РУС" },
  { code: "en", label: "ENG" },
];

export default function BaseLayout({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState<Language>("ru");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = translations[lang];

  return (
    <html lang={lang}>
      <body className={darkMode ? "bg-[#1a1a2e] text-white" : "bg-gray-50 text-gray-900"}>
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <LangContext.Provider value={{ lang, setLang }}>
            <nav className={darkMode ? "fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e]/95 backdrop-blur-md border-b border-gray-700" : "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200"}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <Link href="/" className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-yellow-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">КФФ</span>
                    </div>
                    <span className={darkMode ? "font-bold text-xl hidden sm:block text-white" : "font-bold text-xl hidden sm:block text-gray-900"}>КФФ</span>
                  </Link>

                  <div className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => (
                      <Link key={link.key} href={link.href} className={pathname === link.href ? "px-3 py-2 rounded-lg text-sm font-medium transition-all bg-[#e94560] text-white" : darkMode ? "px-3 py-2 rounded-lg text-sm font-medium transition-all text-gray-300 hover:bg-gray-800" : "px-3 py-2 rounded-lg text-sm font-medium transition-all text-gray-700 hover:bg-gray-100"}>
                        {t.nav[link.key as keyof typeof t.nav]}
                      </Link>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className={darkMode ? "flex items-center space-x-1 bg-gray-800 rounded-lg p-1" : "flex items-center space-x-1 bg-gray-100 rounded-lg p-1"}>
                      {languages.map((l) => (
                        <button key={l.code} onClick={() => setLang(l.code)} className={lang === l.code ? "px-2 py-1 text-xs font-medium rounded transition-all bg-[#e94560] text-white" : darkMode ? "px-2 py-1 text-xs font-medium rounded transition-all text-gray-400" : "px-2 py-1 text-xs font-medium rounded transition-all text-gray-600"}>
                          {l.label}
                        </button>
                      ))}
                    </div>
                    <button onClick={() => setDarkMode(!darkMode)} className={darkMode ? "p-2 rounded-lg transition-colors hover:bg-gray-800" : "p-2 rounded-lg transition-colors hover:bg-gray-100"}>
                      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                    <button className="md:hidden p-2 rounded-lg" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                      {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                  </div>
                </div>
              </div>

              {mobileMenuOpen && (
                <div className={darkMode ? "md:hidden bg-[#1a1a2e]" : "md:hidden bg-white"}>
                  <div className="px-4 py-3 space-y-1">
                    {navLinks.map((link) => (
                      <Link key={link.key} href={link.href} onClick={() => setMobileMenuOpen(false)} className={pathname === link.href ? "block px-4 py-3 rounded-lg text-base font-medium transition-colors bg-[#e94560] text-white" : darkMode ? "block px-4 py-3 rounded-lg text-base font-medium transition-colors text-gray-300 hover:bg-gray-800" : "block px-4 py-3 rounded-lg text-base font-medium transition-colors text-gray-700 hover:bg-gray-100"}>
                        {t.nav[link.key as keyof typeof t.nav]}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </nav>
            <main className="pt-16">
              {children}
            </main>
            <footer className={darkMode ? "bg-[#0f0f1a] text-white py-12" : "bg-gray-900 text-white py-12"}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-yellow-500 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">КФФ</span>
                      </div>
                      <span className="font-bold text-xl">КФФ</span>
                    </div>
                    <p className="text-gray-400 text-sm">{t.footer.about}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li><Link href="/news" className="hover:text-[#e94560] transition-colors">{t.nav.news}</Link></li>
                      <li><Link href="/matches" className="hover:text-[#e94560] transition-colors">{t.nav.matches}</Link></li>
                      <li><Link href="/national-team" className="hover:text-[#e94560] transition-colors">{t.nav.nationalTeam}</Link></li>
                      <li><Link href="/documents" className="hover:text-[#e94560] transition-colors">{t.nav.documents}</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li>г. Бишкек, ул. Фрунзе 419</li>
                      <li>+996 312 62 30 75</li>
                      <li>info@kff.kg</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Соцсети</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#e94560] transition-colors">FB</a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#e94560] transition-colors">IG</a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#e94560] transition-colors">TW</a>
                    </div>
                  </div>
                </div>
                <div className={darkMode ? "border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm" : "border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm"}>
                  © 2024 {t.footer.copyright}
                </div>
              </div>
            </footer>
          </LangContext.Provider>
        </ThemeContext.Provider>
      </body>
    </html>
  );
}