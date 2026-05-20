"use client";

import { useLang } from "../../components/BaseLayout";
import { translations } from "../../lib/translations";
import Section from "../../components/ui/Section";
import Heading from "../../components/ui/Heading";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import { Phone, Mail, MapPin, Send, Globe, User, Info, Link } from "lucide-react";

export default function ContactsPage() {
  const { lang } = useLang();
  const t = translations[lang].contacts;

  return (
    <div className="pt-20">
      <Section dark className="!pb-0">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <Heading level={1}>{t.title}</Heading>
            <p className="text-gray-500 max-w-lg mb-12">
              Have questions or suggestions? We are always open for cooperation and feedback to improve football in Kyrgyzstan.
            </p>

            <div className="space-y-8">
              {[
                { icon: MapPin, title: "Address", val: "720040, Kyrgyz Republic, Bishkek, Frunze str., 419" },
                { icon: Phone, title: "Phone", val: "+996 312 62 30 75" },
                { icon: Mail, title: "Email", val: "info@kfu.kg" },
                { icon: Globe, title: "Working Hours", val: "Mon - Fri: 09:00 - 18:00" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-[#e94560]/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-[#e94560] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-1">{item.title}</h4>
                    <p className="text-white font-bold">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
               <h4 className="text-white font-black uppercase italic tracking-widest text-sm mb-6">Follow Us</h4>
               <div className="flex gap-4">
                  {[User, Info, Link].map((Icon, i) => (
                    <a key={i} href="#" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#e94560] hover:border-[#e94560] transition-all group">
                       <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
               </div>
            </div>
          </div>

          <Card className="lg:p-12">
            <h3 className="text-2xl font-black text-white uppercase italic mb-8">{t.getInTouch}</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">{t.formName}</label>
                     <input type="text" className="w-full bg-[#0f0f1a] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#e94560] transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">{t.formEmail}</label>
                     <input type="email" className="w-full bg-[#0f0f1a] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#e94560] transition-colors" placeholder="john@example.com" />
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Subject</label>
                  <select className="w-full bg-[#0f0f1a] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#e94560] transition-colors appearance-none">
                     <option>General Inquiry</option>
                     <option>Media & Press</option>
                     <option>Partnership</option>
                     <option>National Team</option>
                  </select>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">{t.formMessage}</label>
                  <textarea rows={5} className="w-full bg-[#0f0f1a] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#e94560] transition-colors resize-none" placeholder="How can we help you?"></textarea>
               </div>
               <Button className="w-full py-5 text-lg group">
                  {t.send}
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </Button>
            </form>
          </Card>
        </div>
      </Section>

      {/* Map Placeholder */}
      <section className="h-[500px] mt-20 relative grayscale hover:grayscale-0 transition-all duration-1000 grayscale-100">
         <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000" className="w-full h-full object-cover" alt="Map Placeholder" />
         <div className="absolute inset-0 bg-[#e94560]/10 mix-blend-multiply"></div>
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-8 bg-[#1a1a2e] rounded-2xl border border-white/10 shadow-2xl text-center">
               <MapPin className="w-12 h-12 text-[#e94560] mx-auto mb-4" />
               <h4 className="text-white font-black uppercase italic mb-2">Our Office</h4>
               <p className="text-gray-400 text-sm">Visit us at the heart of Bishkek</p>
            </div>
         </div>
      </section>
    </div>
  );
}
