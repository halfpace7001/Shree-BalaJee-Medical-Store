import { MapPin, Navigation, Phone, Clock, Building2 } from "lucide-react";

const MAPS = "https://maps.google.com/?q=Police+Chauki,+Jail+Bypass+Rd,+Shahpur,+Gorakhpur,+UP+273014";
const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 10:00 PM" },
  { day: "Saturday", time: "8:00 AM – 10:00 PM" },
  { day: "Sunday", time: "9:00 AM – 8:00 PM" },
];

export default function MapSection() {
  return (
    <section id="map" className="py-24 bg-[#f8faff] dark:bg-[#0a1228] relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            ✦ Find Us
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Visit Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Store</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-md mx-auto">
            Next to Canara Bank on Jail Bypass Road, Gorakhpur.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Info — left */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Address */}
            <div className="bg-white dark:bg-[#0e1a38] rounded-3xl p-6 border border-gray-100 dark:border-[#1e2d4f] shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <p className="font-black text-gray-900 dark:text-white">Our Address</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-loose">
                Police Chauki, Jail Bypass Road<br />
                beside Canara Bank<br />
                near Padri Bazar, Shahpur<br />
                <span className="font-black text-gray-900 dark:text-white">Gorakhpur, UP – 273014</span>
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-bold">
                <Building2 className="w-3.5 h-3.5" />
                Landmark: Next to Canara Bank
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white dark:bg-[#0e1a38] rounded-3xl p-6 border border-gray-100 dark:border-[#1e2d4f] shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-black text-gray-900 dark:text-white">Working Hours</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-600 text-xs font-bold">Open Now</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{h.day}</span>
                    <span className="text-green-700 dark:text-green-400 font-bold text-xs bg-green-50 dark:bg-green-900/20 px-2.5 py-1 rounded-full">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white dark:bg-[#0e1a38] rounded-3xl p-6 border border-gray-100 dark:border-[#1e2d4f] shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-indigo-600" />
                </div>
                <p className="font-black text-gray-900 dark:text-white">Call Us</p>
              </div>
              <a href="tel:09807160890" className="text-2xl font-black text-blue-600 hover:text-blue-700 block mb-1">098071 60890</a>
              <p className="text-gray-400 text-xs">Available during store hours</p>
            </div>

            {/* Directions CTA */}
            <a href={MAPS} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 btn-premium text-white font-black py-4 rounded-2xl shadow-xl shadow-blue-200 dark:shadow-blue-900/40 transition-all">
              <Navigation className="w-5 h-5" />
              <span className="relative z-10">Open in Google Maps</span>
            </a>
          </div>

          {/* Map — right */}
          <div className="lg:col-span-3">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-[#1e2d4f] h-[400px] lg:h-[560px]">
              <iframe
                title="Shri Bala Ji Medical Store Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5!2d83.3699!3d26.7606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a9d2e36d1%3A0x9d9d3d3d3d3d3d3d!2sShri%20Bala%20Ji%20Medical%20Store!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4">
                <div className="bg-white dark:bg-[#0e1a38] rounded-2xl px-4 py-3 shadow-lg border border-white/80 dark:border-[#1e2d4f]">
                  <p className="font-black text-gray-900 dark:text-white text-sm">Shri Bala Ji Medical Store</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">Jail Bypass Rd, Gorakhpur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
