"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ZoomIn, X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { galeriItems } from "@/data/content";
import type { GaleriItem } from "@/types";

const categories = ["Semua", "Wahana", "Kegiatan", "Fasilitas", "Event"];

export function GaleriWrapper() {
  const [active, setActive] = useState("Semua");
  const [lightbox, setLightbox] = useState<GaleriItem | null>(null);

  const filtered =
    active === "Semua" ? galeriItems : galeriItems.filter((g) => g.category === active);

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-[#f9fafb]">
        {/* Header */}
        <div className="relative overflow-hidden bg-[#1a2e35] py-14">
          <Image src="/images/assets/bg-depan.jpg" alt="" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-linear-to-r from-[#1a2e35]/95 via-[#1a2e35]/80 to-[#2FA4A9]/60" />
          <div className="relative container mx-auto px-4 md:px-8 text-center z-10">
            <nav className="text-sm text-gray-300 mb-3">
              <span>Beranda</span>
              <span className="mx-2">/</span>
              <span className="text-white font-medium">Galeri</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Galeri Foto</h1>
            <p className="text-gray-200 mt-2 text-sm max-w-lg mx-auto">
              Dokumentasi visual keindahan dan keseruan Taman Pintar Yogyakarta
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 py-10">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                  active === cat
                    ? "bg-[#2FA4A9] text-white shadow-sm"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#2FA4A9] hover:text-[#2FA4A9]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="break-inside-avoid rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group relative"
                onClick={() => setLightbox(item)}
              >
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={600}
                  height={item.size === "tall" ? 800 : 400}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    item.size === "tall" ? "h-72 md:h-80" : "h-44 md:h-52"
                  }`}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="text-white text-xs font-medium bg-[#2FA4A9]/80 px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <p className="text-white text-xs mt-1 line-clamp-1">{item.alt}</p>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-10">
            Menampilkan <strong className="text-[#2FA4A9]">{filtered.length}</strong> foto
          </p>
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 flex items-center gap-1 text-sm"
              >
                <X className="w-4 h-4" /> Tutup
              </button>
              <Image
                src={lightbox.img}
                alt={lightbox.alt}
                width={900}
                height={600}
                className="w-full rounded-md object-contain max-h-[80vh]"
              />
              <div className="mt-3 flex items-center gap-3">
                <span className="bg-[#2FA4A9] text-white text-xs px-2 py-1 rounded">
                  {lightbox.category}
                </span>
                <p className="text-white text-sm">{lightbox.alt}</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
