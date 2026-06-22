import { Phone, MessageCircle, MapPin, Cross, ArrowUpRight } from "lucide-react";

const WHATSAPP = "https://wa.me/919807730730";
const MAPS = "https://www.google.com/maps?q=Shri+Bala+Ji+Medical+Store,+Jail+Bypass+Rd,+Gorakhpur";

const quickLinks = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Our Services" },
  { href: "#gallery", label: "Photo Gallery" },
  { href: "#map", label: "Location" },
  { href: "#prescription", label: "Upload Prescription" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#070d1f] text-white relative overflow-hidden">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      {/* BG decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-900/20 rounded-full blur-3xl pointer-events-none" />

      {/* CTA strip */}
      <div className="relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-white mb-1">Need medicines right now?</h3>
              <p className="text-white/40 text-sm">Call us or send a WhatsApp — we respond quickly.</p>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:8934848480"
                className="flex items-center gap-2 btn-premium text-white font-bold px-6 py-3 rounded-xl text-sm shadow-lg"
              >
                <Phone className="w-4 h-4" />
                8934848480
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <Cross className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-black text-lg text-white leading-tight">Shri Bala Ji Medical Store</p>
                <p className="text-cyan-400 text-xs font-semibold tracking-wider uppercase">Gorakhpur</p>
              </div>
            </div>

            <p className="text-white/35 text-sm leading-relaxed max-w-sm mb-5">
              Your trusted neighbourhood pharmacy in Gorakhpur. Serving thousands of families with prescription medicines, Ayurvedic products, and genuine health guidance for over a decade.
            </p>

            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 text-xs font-semibold px-4 py-2 rounded-full border border-green-500/20">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Open 7 Days · Mon–Sat 8AM–10PM
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:bg-cyan-400 transition-colors" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-wider mb-5">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-white/40 text-sm leading-relaxed">
                  Police Chauki, Jail Bypass Rd,<br />
                  beside Canara Bank, Padri Bazar,<br />
                  Gorakhpur, UP – 273014
                </p>
              </div>

              <a href="tel:8934848480" className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-white/40 group-hover:text-white text-sm transition-colors">8934848480</span>
              </a>

              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-white/40 group-hover:text-white text-sm transition-colors">9807730730 (WhatsApp)</span>
              </a>

              <a
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-cyan-400 text-sm font-semibold transition-colors"
              >
                <MapPin className="w-4 h-4" />
                View on Google Maps
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/20">
          <p>© {new Date().getFullYear()} Shri Bala Ji Medical Store, Gorakhpur. All rights reserved.</p>
          <p>Reg. Pharmacist: Dr. Satyendra Kumar Pushkar · Dist. Karyakarini Sadasya</p>
        </div>
      </div>
    </footer>
  );
}
