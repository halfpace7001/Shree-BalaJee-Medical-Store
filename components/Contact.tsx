import { Phone, MessageCircle, MapPin, Mail, User } from "lucide-react";

const WHATSAPP = "https://wa.me/918934848480?text=" + encodeURIComponent("Hello! I would like to order medicines from Shri Bala Ji Medical Store.");
const MAPS = "https://www.google.com/maps?q=Shri+Bala+Ji+Medical+Store,+Jail+Bypass+Rd,+Gorakhpur";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#070d1f] relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(26,86,219,0.05),rgba(255,255,255,0))] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            ✦ Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            We&apos;re Here to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Help You
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Reach out for orders, prescriptions, home delivery, or any health query.
          </p>
        </div>

        {/* 3 hero contact cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {/* Call */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl shadow-blue-200 hover:shadow-2xl hover:shadow-blue-300 transition-all hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8" />
              </div>
              <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-2">Call the Store</p>
              <p className="text-3xl font-black mb-1">098071</p>
              <p className="text-3xl font-black mb-4">60890</p>
              <p className="text-blue-200 text-sm mb-6">Speak directly to our pharmacist during store hours.</p>
              <a
                href="tel:09807160890"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-black text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Tap to Call
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 text-white shadow-xl shadow-green-200 hover:shadow-2xl hover:shadow-green-300 transition-all hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8" />
              </div>
              <p className="text-green-200 text-xs font-bold uppercase tracking-wider mb-2">WhatsApp Order</p>
              <p className="text-3xl font-black mb-1">893484</p>
              <p className="text-3xl font-black mb-4">8480</p>
              <p className="text-green-200 text-sm mb-6">Send your prescription photo or medicine list anytime.</p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-green-700 font-black text-sm px-6 py-3 rounded-xl hover:bg-green-50 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Open WhatsApp
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-8 text-white shadow-xl shadow-indigo-200 hover:shadow-2xl hover:shadow-indigo-300 transition-all hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8" />
              </div>
              <p className="text-indigo-200 text-xs font-bold uppercase tracking-wider mb-2">Visit the Store</p>
              <p className="font-black text-lg leading-snug mb-4">
                Police Chauki,<br />Jail Bypass Rd,<br />Gorakhpur – 273014
              </p>
              <p className="text-indigo-200 text-sm mb-6">beside Canara Bank, near Padri Bazar, Shahpur.</p>
              <a
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-indigo-700 font-black text-sm px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Info strip */}
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              icon: User,
              label: "Registered Pharmacist",
              value: "Dr. Satyendra Kumar Pushkar",
              sub: "Dist. Karyakarini Sadasya, Gorakhpur",
              color: "bg-blue-50 text-blue-600",
            },
            {
              icon: Mail,
              label: "WhatsApp for Orders",
              value: "8934848480",
              sub: "Send prescription photos anytime",
              color: "bg-green-50 text-green-600",
            },
            {
              icon: Phone,
              label: "Store Phone",
              value: "098071 60890",
              sub: "Call during store hours",
              color: "bg-indigo-50 text-indigo-600",
            },
          ].map(({ icon: Icon, label, value, sub, color }) => (
            <div key={label} className="flex items-start gap-4 bg-gray-50 dark:bg-[#0e1a38] rounded-2xl p-5 border border-gray-100 dark:border-[#1e2d4f]">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-400 dark:text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">{label}</p>
                <p className="text-gray-900 dark:text-white font-black text-base">{value}</p>
                <p className="text-gray-400 text-xs mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
