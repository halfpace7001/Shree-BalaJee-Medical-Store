"use client";

import { Phone, MessageCircle, MapPin } from "lucide-react";

const WHATSAPP = "https://wa.me/919807730730?text=" + encodeURIComponent("Hello! I want to order medicines.");
const MAPS = "https://www.google.com/maps?q=Shri+Bala+Ji+Medical+Store,+Jail+Bypass+Rd,+Gorakhpur";

export default function StickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      {/* Glass backdrop */}
      <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/60 shadow-2xl shadow-blue-900/10">
        <div className="grid grid-cols-3 h-16">
          {/* Call */}
          <a
            href="tel:09807160890"
            className="group flex flex-col items-center justify-center gap-0.5 hover:bg-blue-50 transition-colors"
          >
            <div className="w-8 h-8 rounded-xl bg-blue-100 group-hover:bg-blue-600 flex items-center justify-center transition-colors">
              <Phone className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <span className="text-[10px] font-bold text-gray-500 group-hover:text-blue-600 transition-colors">Call</span>
          </a>

          {/* WhatsApp — center highlighted */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-0.5 relative"
          >
            {/* Floating raised button */}
            <div className="-mt-5 w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex flex-col items-center justify-center shadow-xl shadow-green-300/50 group-hover:scale-105 transition-transform">
              <MessageCircle className="w-5 h-5 text-white" />
              <span className="text-[9px] text-white/80 font-bold mt-0.5">WhatsApp</span>
            </div>
          </a>

          {/* Directions */}
          <a
            href={MAPS}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-0.5 hover:bg-indigo-50 transition-colors"
          >
            <div className="w-8 h-8 rounded-xl bg-indigo-100 group-hover:bg-indigo-600 flex items-center justify-center transition-colors">
              <MapPin className="w-4 h-4 text-indigo-600 group-hover:text-white transition-colors" />
            </div>
            <span className="text-[10px] font-bold text-gray-500 group-hover:text-indigo-600 transition-colors">Directions</span>
          </a>
        </div>
      </div>
    </div>
  );
}
