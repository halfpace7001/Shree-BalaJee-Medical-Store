"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  { q: "Do you deliver medicines at home?", a: "Yes! Send your prescription on WhatsApp to 8934848480. Our team confirms availability and arranges home delivery. Call us for delivery area details." },
  { q: "Can I order on WhatsApp?", a: "Absolutely. Just photo your prescription and send it to 8934848480. We'll confirm stock, pricing, and delivery options within minutes." },
  { q: "Do you stock Ayurvedic medicines?", a: "Yes — we carry the full Daivish Ayurvedic range: Dai-Liv, diabetes support, Dai-Kneflex, GasNo, immunity boosters, and many more herbal products." },
  { q: "Is a prescription required for all medicines?", a: "Prescription medicines legally need a valid doctor's Rx. OTC medicines like paracetamol, antacids, and vitamins can be bought without one." },
  { q: "What are your working hours?", a: "Monday to Saturday: 8:00 AM – 10:00 PM. Sunday: 9:00 AM – 8:00 PM. We are open all 7 days a week." },
  { q: "Do you accept UPI / online payments?", a: "Yes — we accept Google Pay, PhonePe, Paytm, and cash. Ask our staff at the counter for payment options." },
  { q: "Where exactly are you located?", a: "Police Chauki, Jail Bypass Road, beside Canara Bank, near Padri Bazar, Shahpur, Gorakhpur – 273014. The store is right next to Canara Bank." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white dark:bg-[#070d1f] relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50/80 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            ✦ FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Questions</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">Everything you need to know about our services.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i
                  ? "border-blue-200 dark:border-blue-700 bg-white dark:bg-[#0e1a38] shadow-lg shadow-blue-50 dark:shadow-blue-900/20"
                  : "border-gray-100 dark:border-[#1e2d4f] bg-white dark:bg-[#0e1a38] hover:border-blue-100 dark:hover:border-blue-800"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-black tabular-nums transition-colors ${open === i ? "text-blue-500" : "text-gray-300 dark:text-gray-600"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`font-black text-base transition-colors ${open === i ? "text-blue-700 dark:text-blue-400" : "text-gray-900 dark:text-white"}`}>
                    {faq.q}
                  </span>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                  open === i ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-[#1e2d4f] text-gray-400 dark:text-gray-500"
                }`}>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
                </div>
              </button>
              <div className={`transition-all duration-300 ${open === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
                <div className="px-6 pb-6 pl-16">
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm mb-4">Still have a question?</p>
          <a
            href="https://wa.me/918934848480?text=Hello%2C+I+have+a+question."
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-black px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-green-200 dark:shadow-green-900/30"
          >
            <MessageCircle className="w-4 h-4" />
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
