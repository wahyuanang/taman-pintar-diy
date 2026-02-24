"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { beritaList } from "@/data/content";

const categories = ["Semua", "Event", "Kompetisi", "Kegiatan", "Berita", "Promo"];

export function BeritaWrapper() {
  const [active, setActive] = useState("Semua");

  const filtered =
    active === "Semua" ? beritaList : beritaList.filter((b) => b.category === active);

  const featured = filtered[0];
  const rest = filtered.slice(1);

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
              <span className="text-white font-medium">Berita</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Berita & Artikel</h1>
            <p className="text-gray-200 mt-2 text-sm">
              Informasi terkini seputar kegiatan dan program Taman Pintar Yogyakarta
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 py-10">
          {/* Category Filter */}
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

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              Belum ada berita untuk kategori ini.
            </div>
          ) : (
            <>
              {/* Featured Article */}
              {featured && (
                <div className="group rounded-md overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all mb-8 border border-gray-100">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="overflow-hidden h-64 md:h-auto">
                      <Image
                        src={featured.img}
                        alt={featured.title}
                        width={800}
                        height={500}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-[#e8f7f7] text-[#2FA4A9] text-xs font-semibold px-3 py-1 rounded-md">
                          {featured.category}
                        </span>
                        <span className="bg-[#FFF8EC] text-[#F5A721] text-xs font-semibold px-2 py-1 rounded">
                          Unggulan
                        </span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#2FA4A9] transition-colors">
                        {featured.title}
                      </h2>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-4">
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">{featured.date}</span>
                        <Link
                          href={`/berita/${featured.id}`}
                          className="text-sm font-medium text-[#2FA4A9] hover:underline flex items-center gap-1"
                        >
                          Baca Selengkapnya <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Article Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((b, index) => (
                  <motion.article
                    key={b.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group rounded-md overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                  >
                    <div className="overflow-hidden h-48">
                      <Image
                        src={b.img}
                        alt={b.title}
                        width={800}
                        height={500}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="flex items-center gap-1 bg-[#e8f7f7] text-[#2FA4A9] text-xs font-medium px-2 py-0.5 rounded">
                          <Tag className="w-3 h-3" /> {b.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <Calendar className="w-3 h-3" /> {b.date}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#2FA4A9] transition-colors">
                        {b.title}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-3 mb-4">{b.excerpt}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <span className="flex items-center gap-1 text-xs text-gray-400"><User className="w-3 h-3" /> {b.author}</span>
                        <Link href={`/berita/${b.id}`} className="flex items-center gap-1 text-xs font-medium text-[#2FA4A9] hover:underline">
                          Baca <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-12">
                {[1, 2, 3, "..."].map((p, i) => (
                  <button
                    key={i}
                    className={`w-9 h-9 rounded-md text-sm font-medium transition-colors ${
                      p === 1
                        ? "bg-[#2FA4A9] text-white"
                        : "bg-white border border-gray-200 text-gray-600 hover:border-[#2FA4A9] hover:text-[#2FA4A9]"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
