import { Pill, ShoppingBag, Truck, MessageCircle, Leaf, Stethoscope, Baby, Sparkles } from "lucide-react";

const services = [
  { icon: Pill, title: "Prescription Medicines", desc: "All allopathic Rx medicines. Share your prescription and we'll prepare everything.", gradient: "from-blue-600 to-blue-400", glow: "hover:shadow-blue-100 dark:hover:shadow-blue-900/30", tag: "Most popular" },
  { icon: ShoppingBag, title: "OTC Medicines", desc: "Paracetamol, antacids, vitamins, cold & flu — available instantly, no prescription.", gradient: "from-indigo-600 to-violet-400", glow: "hover:shadow-indigo-100 dark:hover:shadow-indigo-900/30", tag: null },
  { icon: Truck, title: "Home Delivery", desc: "Can't visit? Send your prescription on WhatsApp — we arrange delivery.", gradient: "from-emerald-600 to-green-400", glow: "hover:shadow-emerald-100 dark:hover:shadow-emerald-900/30", tag: "Available" },
  { icon: MessageCircle, title: "WhatsApp Orders", desc: "Photo your prescription and send to 8934848480. Fast and easy.", gradient: "from-green-500 to-teal-400", glow: "hover:shadow-green-100 dark:hover:shadow-green-900/30", tag: null },
  { icon: Leaf, title: "Ayurvedic & Herbal", desc: "Full Daivish range — liver care, diabetes, joint health, immunity boosters.", gradient: "from-teal-600 to-cyan-400", glow: "hover:shadow-teal-100 dark:hover:shadow-teal-900/30", tag: null },
  { icon: Stethoscope, title: "Free Health Advice", desc: "Registered pharmacist provides free guidance on medicines and general wellness.", gradient: "from-cyan-600 to-sky-400", glow: "hover:shadow-cyan-100 dark:hover:shadow-cyan-900/30", tag: "Free" },
  { icon: Baby, title: "Baby & Mother Care", desc: "Baby food, diapers, vitamins — everything for your family under one roof.", gradient: "from-pink-500 to-rose-400", glow: "hover:shadow-pink-100 dark:hover:shadow-pink-900/30", tag: null },
  { icon: Sparkles, title: "Skin & Beauty", desc: "Trusted skin creams, sunscreen, hair care and hygiene brands — always in stock.", gradient: "from-purple-600 to-pink-400", glow: "hover:shadow-purple-100 dark:hover:shadow-purple-900/30", tag: null },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#f8faff] dark:bg-[#0a1228] relative overflow-hidden transition-colors duration-300">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-100/60 dark:bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-100/60 dark:bg-cyan-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            ✦ What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Complete Healthcare{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Under One Roof
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            From life-saving prescriptions to daily health essentials — we stock it all.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc, gradient, glow, tag }) => (
            <div
              key={title}
              className={`group relative bg-white dark:bg-[#0e1a38] rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-[#1e2d4f] hover:shadow-2xl ${glow} transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
            >
              <div className={`absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r ${gradient}`} />
              {tag && (
                <span className={`absolute top-4 right-4 text-[10px] font-black px-2 py-0.5 rounded-full bg-gradient-to-r ${gradient} text-white`}>
                  {tag}
                </span>
              )}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-black text-gray-900 dark:text-white text-base mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 rounded-3xl p-8 md:p-10 text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black mb-1">Need a medicine right now?</h3>
              <p className="text-blue-200 text-sm">Call or WhatsApp us — we&apos;ll check stock and get it ready in minutes.</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a href="tel:09807160890" className="flex items-center gap-2 bg-white text-blue-700 font-black px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm shadow-lg">Call Now</a>
              <a href="https://wa.me/918934848480" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-black px-6 py-3 rounded-xl transition-colors text-sm shadow-lg">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
