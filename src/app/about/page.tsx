"use client";

import { useLang } from "../../components/BaseLayout";
import { translations } from "../../lib/translations";
import Section from "../../components/ui/Section";
import Heading from "../../components/ui/Heading";
import Card from "../../components/ui/Card";
import { Trophy, Users, History, FileText, Download, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { lang } = useLang();
  const t = translations[lang].about;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop"
            alt="About Federation"
            className="w-full h-full object-cover brightness-[0.2]"
          />
        </div>
        <div className="relative z-10 text-center">
           <Heading level={1}>{t.title}</Heading>
           <div className="w-24 h-1 bg-[#e94560] mx-auto"></div>
        </div>
      </section>

      {/* History */}
      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <History className="text-[#e94560] w-8 h-8" />
              <Heading level={2} className="mb-0">{t.history}</Heading>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
               The Football Federation of the Kyrgyz Republic was founded in 1992. Since its inception, the federation has been working tirelessly to develop and popularize football in the country, joining FIFA and AFC in 1994.
            </p>
            <p className="text-gray-400 leading-relaxed">
               Over the decades, we have seen significant growth in both professional and grassroots football. Today, we are proud to represent Kyrgyzstan on the international stage, consistently improving our rankings and competitive standards.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1000" className="w-full h-full object-cover" alt="History" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#e94560] p-8 rounded-2xl hidden md:block">
               <Trophy className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </Section>

      {/* Leadership */}
      <Section dark>
        <div className="text-center mb-16">
          <Heading level={2} centered>{t.leadership}</Heading>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Kamchybek Tashiev", role: "President", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop" },
            { name: "Medetbek Bukuev", role: "Vice President", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop" },
            { name: "Nurdin Bukuev", role: "General Secretary", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop" }
          ].map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card noPadding className="text-center group">
                <div className="relative h-80 overflow-hidden">
                  <img src={leader.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={leader.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] to-transparent opacity-60"></div>
                </div>
                <div className="p-6 relative -mt-12 bg-[#16213e] mx-4 rounded-xl border border-white/5">
                   <h4 className="text-white font-black uppercase italic">{leader.name}</h4>
                   <p className="text-[#e94560] text-xs font-bold uppercase tracking-widest mt-1">{leader.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Documents */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <FileText className="text-[#e94560] w-8 h-8" />
            <Heading level={2} className="mb-0">{t.documents}</Heading>
          </div>
          <div className="grid gap-4">
             {[
               "Federation Statutes 2024",
               "FIFA Quality Programme",
               "National Team Selection Criteria",
               "Annual Financial Report 2023",
               "Code of Ethics"
             ].map((doc, i) => (
               <div key={i} className="flex items-center justify-between p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group cursor-pointer border border-white/5">
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-lg bg-[#e94560]/10 flex items-center justify-center text-[#e94560]">
                     <FileText className="w-5 h-5" />
                   </div>
                   <span className="text-white font-bold">{doc}</span>
                 </div>
                 <Download className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
               </div>
             ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
