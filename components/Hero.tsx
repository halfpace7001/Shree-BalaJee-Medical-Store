"use client";

import { Phone, MessageCircle, MapPin, ShieldCheck, Star, Clock, Award, ChevronDown } from "lucide-react";

const WHATSAPP = "https://wa.me/918934848480?text=" + encodeURIComponent("Hello! I would like to order medicines from Shri Bala Ji Medical Store.");
const MAPS = "https://maps.google.com/?q=Shri+Bala+Ji+Medical+Store,+Jail+Bypass+Rd,+Gorakhpur";

const HERO_BG = "linear-gradient(135deg, #0a0f1e 0%, #0d2456 35%, #091b46 65%, #070e24 100%)";

const floatingCards = [
  { icon: ShieldCheck, label: "Licensed", sub: "Pharmacist", gradient: "from-blue-500 to-cyan-400", anim: "animate-float" },
  { icon: Star, label: "5000+", sub: "Customers", gradient: "from-purple-500 to-pink-400", anim: "animate-float-d1" },
  { icon: Award, label: "Pride of", sub: "Bharat Award", gradient: "from-amber-500 to-orange-400", anim: "animate-float-d2" },
  { icon: Clock, label: "Open", sub: "7 Days a Week", gradient: "from-green-500 to-emerald-400", anim: "animate-float-d3" },
];

const ticker = [
  "✦ Prescription Medicines", "✦ Ayurvedic Products", "✦ Home Delivery",
  "✦ WhatsApp Orders", "✦ Free Health Advice", "✦ Daivish Range",
  "✦ Baby & Mother Care", "✦ Vitamins & Supplements",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ background: HERO_BG }}
    >
      {/* Animated orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl animate-orb"
          style={{ background: "radial-gradient(circle, rgba(26,86,219,0.22) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl animate-orb"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)", animationDelay: "3s" }}
        />
        <div
          className="absolute top-2/3 left-1/2 w-72 h-72 rounded-full blur-3xl animate-orb"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", animationDelay: "6s" }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative flex-1 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        {/* Left */}
        <div className="flex-1 text-white">
          {/* Open badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-8 border border-white/10"
            style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(16px)" }}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <span className="text-green-300 text-sm font-bold">Open Now</span>
            <span className="text-white/30">|</span>
            <span className="text-white/50 text-xs">Mon – Sun · 8 AM – 10 PM</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-4">
            <span className="text-white text-glow">Shri Bala Ji</span>
            <br />
            <span className="gradient-text">Medical Store</span>
          </h1>

          <p className="text-white/40 text-xs sm:text-sm font-bold mb-4 tracking-[0.25em] uppercase">
            Gorakhpur&apos;s Most Trusted Pharmacy
          </p>

          <p className="text-white/45 text-base sm:text-lg max-w-lg leading-relaxed mb-10">
            Prescription medicines · OTC drugs · Ayurvedic products · WhatsApp orders · Home delivery — all under one roof for over a decade.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            {/* Call */}
            <a
              href="tel:09807160890"
              className="group relative flex items-center gap-3 btn-premium text-white font-black text-base px-7 py-4 rounded-2xl shadow-2xl shadow-blue-900/60 overflow-hidden"
            >
              <span className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left relative z-10">
                <p className="text-white/50 text-[11px] font-medium">Call the store</p>
                <p className="font-black text-base">098071 60890</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-black text-base px-7 py-4 rounded-2xl shadow-2xl shadow-green-900/30 transition-all"
            >
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-white/50 text-[11px] font-medium">Order on WhatsApp</p>
                <p className="font-black text-base">8934848480</p>
              </div>
            </a>

            {/* Directions */}
            <a
              href={MAPS}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-white/80 hover:text-white font-semibold text-sm px-6 py-4 rounded-2xl border border-white/15 hover:border-white/30 hover:bg-white/10 transition-all"
            >
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Directions</span>
            </a>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-2">
            {["Licensed Pharmacist", "Pride of Bharat Award", "10+ Years Serving", "Padri Bazar, Gorakhpur"].map((t) => (
              <span key={t} className="text-xs text-white/35 border border-white/10 rounded-full px-3 py-1"
                style={{ background: "rgba(255,255,255,0.04)" }}>
                ✦ {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right — floating cards */}
        <div className="hidden lg:grid grid-cols-2 gap-4 flex-shrink-0 w-[320px]">
          {floatingCards.map(({ icon: Icon, label, sub, gradient, anim }) => (
            <div
              key={label}
              className={`${anim} rounded-3xl p-6 flex flex-col items-center text-center cursor-default`}
              style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.10)" }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-3 shadow-lg`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <p className="text-white font-black text-2xl leading-tight">{label}</p>
              <p className="text-white/40 text-xs mt-1">{sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ticker */}
      <div className="relative border-t border-white/8 py-3 overflow-hidden ticker-wrap"
        style={{ background: "rgba(255,255,255,0.04)" }}>
        <div className="ticker-inner animate-ticker">
          {[...ticker, ...ticker].map((item, i) => (
            <span key={i} className="text-white/35 text-[11px] font-bold tracking-[0.2em] uppercase mx-10 flex-shrink-0">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/20 animate-bounce pointer-events-none">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}
