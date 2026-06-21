"use client";

import { useState } from "react";
import { X, ZoomIn, Camera, ArrowRight, ArrowLeft } from "lucide-react";

const photos = [
  { src: "/images/shop-front.jpg", label: "Store Front", desc: "Shri Bala Ji Medical Store", emoji: "🏪", span: "col-span-2 row-span-2", bg: "from-blue-600 to-blue-400" },
  { src: "/images/shelves-ayurvedic.jpg", label: "Ayurvedic Range", desc: "Daivish herbal products", emoji: "🌿", span: "", bg: "from-green-600 to-emerald-400" },
  { src: "/images/shelves-medicines.jpg", label: "Medicine Shelves", desc: "Thousands always in stock", emoji: "💊", span: "", bg: "from-indigo-600 to-violet-400" },
  { src: "/images/shelves-corner.jpg", label: "Health Products", desc: "Vitamins & supplements", emoji: "🧴", span: "", bg: "from-teal-600 to-cyan-400" },
  { src: "/images/team.jpg", label: "Our Team", desc: "Dedicated to serve you", emoji: "👨‍⚕️", span: "", bg: "from-orange-500 to-amber-400" },
  { src: "/images/interior.jpg", label: "Store Interior", desc: "Clean & organised", emoji: "🏥", span: "col-span-2", bg: "from-purple-600 to-pink-400" },
  { src: "/images/flag-ceremony.jpg", label: "Republic Day", desc: "Celebrating India", emoji: "🇮🇳", span: "", bg: "from-orange-600 to-red-500" },
  { src: "/images/shelves-full.jpg", label: "Full Shelf View", desc: "Comprehensive range", emoji: "📦", span: "", bg: "from-pink-600 to-rose-400" },
];

function PhotoCard({ photo, index, onOpen }: { photo: (typeof photos)[0]; index: number; onOpen: () => void }) {
  const [errored, setErrored] = useState(false);

  return (
    <button
      onClick={onOpen}
      className={`group relative rounded-3xl overflow-hidden ${photo.span || ""} min-h-[180px] md:min-h-[200px]`}
    >
      {!errored ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo.src}
          alt={photo.label}
          onError={() => setErrored(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${photo.bg} flex flex-col items-center justify-center`}>
          <span className="text-5xl mb-2">{photo.emoji}</span>
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Hover highlight */}
      <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
          <ZoomIn className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-white font-bold text-sm">{photo.label}</p>
        <p className="text-white/60 text-xs">{photo.desc}</p>
      </div>
    </button>
  );
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [lightboxErr, setLightboxErr] = useState(false);

  function prev() {
    setLightbox((i) => (i === null ? 0 : (i - 1 + photos.length) % photos.length));
    setLightboxErr(false);
  }
  function next() {
    setLightbox((i) => (i === null ? 0 : (i + 1) % photos.length));
    setLightboxErr(false);
  }

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-[#070d1f] relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-14 [&_h2]:dark:text-white [&_p]:dark:text-gray-400 [&_span]:dark:text-gray-500">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              ✦ Photo Gallery
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              See Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Store
              </span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-gray-400 text-sm">
            <Camera className="w-4 h-4" />
            <span>{photos.length} photos</span>
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          {photos.map((photo, i) => (
            <PhotoCard key={photo.label} photo={photo} index={i} onOpen={() => { setLightbox(i); setLightboxErr(false); }} />
          ))}
        </div>

        {/* Photo hint */}
        <div className="mt-8 flex items-center gap-3 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-4">
          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Camera className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-gray-700 font-semibold text-sm">Add Your Real Store Photos</p>
            <p className="text-gray-400 text-xs truncate">
              Place your photos in <code className="text-blue-600 bg-blue-50 px-1 rounded">public/images/</code> —
              shop-front.jpg · shelves-ayurvedic.jpg · team.jpg · interior.jpg · etc.
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          {/* Nav buttons */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-4xl w-full mx-16 rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {!lightboxErr ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={photos[lightbox].src}
                alt={photos[lightbox].label}
                onError={() => setLightboxErr(true)}
                className="w-full max-h-[75vh] object-contain"
              />
            ) : (
              <div className={`bg-gradient-to-br ${photos[lightbox].bg} aspect-video flex flex-col items-center justify-center text-white`}>
                <span className="text-8xl mb-4">{photos[lightbox].emoji}</span>
                <p className="font-black text-2xl">{photos[lightbox].label}</p>
              </div>
            )}
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-white font-bold">{photos[lightbox].label}</p>
            <p className="text-white/40 text-sm">{lightbox + 1} / {photos.length}</p>
          </div>
        </div>
      )}
    </section>
  );
}
