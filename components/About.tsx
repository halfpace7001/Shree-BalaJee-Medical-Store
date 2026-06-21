import { Award, Users, Heart, Leaf, BadgeCheck, TrendingUp, Clock, Star } from "lucide-react";

const stats = [
  { value: "10+", label: "Years of Trust", icon: Clock, color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20" },
  { value: "5000+", label: "Happy Customers", icon: Users, color: "text-purple-600", bg: "bg-purple-50 dark:bg-purple-900/20" },
  { value: "3000+", label: "Medicines in Stock", icon: TrendingUp, color: "text-cyan-600", bg: "bg-cyan-50 dark:bg-cyan-900/20" },
  { value: "4.9★", label: "Customer Rating", icon: Star, color: "text-amber-600", bg: "bg-amber-50 dark:bg-amber-900/20" },
];

const features = [
  { icon: Award, title: "Pride of Bharat Award", desc: "Nationally recognised for excellence in community healthcare.", gradient: "from-blue-600 to-cyan-500" },
  { icon: BadgeCheck, title: "Registered Pharmacist", desc: "Led by Dr. S.K. Pushkar — licensed & district association office bearer.", gradient: "from-purple-600 to-pink-500" },
  { icon: Heart, title: "Patient-First Philosophy", desc: "We explain medicines and dosage — because you deserve full clarity.", gradient: "from-rose-500 to-orange-400" },
  { icon: Leaf, title: "Allopathic + Ayurvedic", desc: "Full range: English medicines, Daivish Ayurvedic, herbal & supplements.", gradient: "from-green-500 to-teal-400" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#070d1f] relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-50/80 dark:from-blue-900/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-300" />
          <span className="text-blue-600 text-xs font-black uppercase tracking-[0.2em]">About Us</span>
          <div className="h-px w-6 bg-blue-200" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-6">
              Gorakhpur&apos;s Most{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-blue-600">Trusted</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" fill="none">
                  <path d="M2 8C40 3 120 1 198 6" stroke="#bfdbfe" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </span>{" "}
              Pharmacy
            </h2>

            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-5">
              For over a decade, Shri Bala Ji Medical Store has been the healthcare backbone of Padri Bazar, Shahpur, and surrounding areas. Customers trust us not just for medicines — but for guidance, care, and reliability.
            </p>
            <p className="text-gray-400 dark:text-gray-500 leading-relaxed mb-8">
              Stocked with thousands of prescription and OTC medicines, Daivish Ayurvedic products, baby care, skin care, and health supplements — we ensure you never have to search elsewhere.
            </p>

            {/* Pharmacist card */}
            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl text-white shadow-xl shadow-blue-200 dark:shadow-blue-900/40">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <BadgeCheck className="w-7 h-7" />
              </div>
              <div>
                <p className="font-black text-lg leading-tight">Dr. Satyendra Kumar Pushkar</p>
                <p className="text-blue-100 text-sm mt-0.5">Registered Pharmacist · Dist. Karyakarini Sadasya, Gorakhpur</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map(({ value, label, icon: Icon, color, bg }) => (
              <div
                key={label}
                className="bg-white dark:bg-[#0e1a38] border border-gray-100 dark:border-[#1e2d4f] rounded-3xl p-7 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/30 transition-all hover:-translate-y-1"
              >
                <div className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <p className={`text-3xl font-black ${color} mb-1`}>{value}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, desc, gradient }) => (
            <div
              key={title}
              className="group relative bg-white dark:bg-[#0e1a38] border border-gray-100 dark:border-[#1e2d4f] rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${gradient} rounded-t-3xl`} />
              <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-black text-gray-900 dark:text-white text-base mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
