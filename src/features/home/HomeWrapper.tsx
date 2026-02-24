"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Trophy, Newspaper, Building2, Telescope, FlaskConical, Ship, Palette, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const wahanaHighlights = [
  { title: "Planetarium", desc: "Jelajahi alam semesta dan perbintangan dalam pertunjukan langit yang memukau.", Icon: Telescope, color: "bg-[#1a2e35]", tag: "Sains" },
  { title: "Gedung Oval", desc: "Pusat teknologi informasi dengan berbagai alat peraga interaktif modern.", Icon: FlaskConical, color: "bg-[#2FA4A9]", tag: "Teknologi" },
  { title: "Wahana Bahari", desc: "Kenali kekayaan laut Nusantara melalui simulasi dan wahana air yang seru.", Icon: Ship, color: "bg-[#247d82]", tag: "Bahari" },
  { title: "Kampung Kerajinan", desc: "Belajar seni dan kerajinan tangan tradisional khas budaya Yogyakarta.", Icon: Palette, color: "bg-[#1a2e35]", tag: "Budaya" },
];

const beritaTerbaru = [
  { id: 1, title: "Kontes Robot Pintar Yogyakarta 2025", excerpt: "Form Pendaftaran dan Juknis kontes Robot Pintar Yogyakarta (KRPY) 2025 dapat diakses di link berikut https://linktr.ee/InspireKRPY2025 ...", date: "29 Oktober 2025", category: "Event", img: "/images/assets/bg-depan.jpg" },
  { id: 2, title: "Kontes Roket Air Taman Pintar 2025", excerpt: "Taman Pintar Yogyakarta kembali menghadirkan Kontes Roket Air Taman Pintar 2025 yang menjadi wadah inovatif dan edukatif bagi pelajar Indonesia.", date: "21 September 2025", category: "Kompetisi", img: "/images/assets/gedung-oval.jpg" },
  { id: 3, title: "Pembukaan Pasar Minggu TBEG", excerpt: "Taman Budaya Embung Giwangan (TBEG) hadir dengan kegiatan Pasar Minggu, menjadi ruang srawung warga yang menyenangkan dan kreatif.", date: "27 Juli 2025", category: "Kegiatan", img: "/images/assets/1.jpg" },
];

const stats = [
  { value: "3 Jt+", label: "Pengunjung / Tahun", Icon: Users },
  { value: "200+", label: "Penghargaan Nasional", Icon: Trophy },
  { value: "500", label: "Media per Tahun", Icon: Newspaper },
  { value: "15+", label: "Zona Wahana", Icon: Building2 },
];

export function HomeWrapper() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[92vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-[#1a2e35] via-[#2FA4A9] to-[#247d82]" />
          <div className="absolute top-0 right-0 w-150 h-150 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-100 h-100 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/3" />

          <div className="relative container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="inline-block bg-[#F5A721]/20 text-[#F5A721] text-xs font-semibold px-3 py-1 rounded-md mb-4 uppercase tracking-wider border border-[#F5A721]/30">
                  Wisata Pendidikan Yogyakarta
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Belajar Sains dengan{" "}
                  <span className="text-[#F5A721]">Cara yang Menyenangkan</span>
                </h1>
                <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-xl">
                  Taman Pintar Yogyakarta menyediakan wahana wisata pendidikan sains interaktif terbaik. Cocok untuk pelajar, keluarga, dan semua usia!
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/harga-tiket" className="bg-[#F5A721] text-white px-7 py-3.5 rounded-md font-semibold text-base hover:bg-[#d4911a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                    Beli Tiket Sekarang
                  </Link>
                  <Link href="/wahana" className="border-2 border-white text-white px-7 py-3.5 rounded-md font-semibold text-base hover:bg-white hover:text-[#2FA4A9] transition-all">
                    Jelajahi Wahana
                  </Link>
                </div>
              </motion.div>

              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-md overflow-hidden shadow-xl">
                      <Image src="/images/assets/gedung-oval.jpg" alt="Wahana Taman Pintar" width={300} height={200} className="w-full h-40 object-cover" />
                    </div>
                    <div className="rounded-md overflow-hidden shadow-xl">
                      <Image src="/images/assets/kampung-kerajinan.jpg" alt="Kegiatan Taman Pintar" width={300} height={200} className="w-full h-32 object-cover" />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="rounded-md overflow-hidden shadow-xl">
                      <Image src="/images/assets/planetarius.jpg" alt="Sains Taman Pintar" width={300} height={200} className="w-full h-32 object-cover" />
                    </div>
                    <div className="rounded-md overflow-hidden shadow-xl">
                      <Image src="/images/assets/wahana-bahari.jpg" alt="Edukasi Taman Pintar" width={300} height={200} className="w-full h-40 object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="text-center p-6 rounded-md border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:border-[#2FA4A9]/30"
                >
                  <div className="flex justify-center mb-3">
                    <stat.Icon className="w-8 h-8 text-[#2FA4A9]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2FA4A9] mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Wahana Highlights */}
        <section className="py-16 bg-[#f9fafb]">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-[#F5A721] text-sm font-semibold uppercase tracking-wider">Eksplorasi</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">Wahana Unggulan</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Beragam wahana interaktif dan edukatif yang siap memberikan pengalaman belajar yang menyenangkan untuk seluruh keluarga.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {wahanaHighlights.map((w, index) => (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group rounded-md overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100"
                >
                  <div className={`${w.color} h-28 flex items-center justify-center`}>
                    <w.Icon className="w-12 h-12 text-white/80" />
                  </div>
                  <div className="p-5">
                    <span className="inline-block bg-[#e8f7f7] text-[#2FA4A9] text-xs font-medium px-2 py-0.5 rounded mb-2">{w.tag}</span>
                    <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-[#2FA4A9] transition-colors">{w.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/wahana" className="inline-flex items-center gap-2 border-2 border-[#2FA4A9] text-[#2FA4A9] px-7 py-3 rounded-md font-semibold hover:bg-[#2FA4A9] hover:text-white transition-all">
                Lihat Semua Wahana <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-linear-to-r from-[#2FA4A9] to-[#1a2e35]">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Rencanakan Kunjungan Rombongan?</h2>
                <p className="text-gray-200 max-w-lg">
                  Daftarkan kunjungan sekolah atau rombongan Anda dan nikmati pengalaman belajar yang tak terlupakan di Taman Pintar Yogyakarta.
                </p>
              </div>
              <div className="flex gap-4 shrink-0">
                <Link href="/kunjungan" className="bg-[#F5A721] text-white px-7 py-3.5 rounded-md font-semibold hover:bg-[#d4911a] transition-all shadow-lg">Daftar Kunjungan</Link>
                <Link href="/kontak" className="border-2 border-white text-white px-7 py-3.5 rounded-md font-semibold hover:bg-white hover:text-[#2FA4A9] transition-all">Kontak Kami</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Berita Terbaru */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-[#F5A721] text-sm font-semibold uppercase tracking-wider">Terkini</span>
                <h2 className="text-3xl font-bold text-gray-800 mt-1">Berita Terbaru</h2>
              </div>
              <Link href="/berita" className="hidden md:flex items-center gap-1 text-[#2FA4A9] font-medium hover:underline text-sm">
                Lihat Semua <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {beritaTerbaru.map((b, index) => (
                <motion.article
                  key={b.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group rounded-md overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className="overflow-hidden h-48">
                    <Image src={b.img} alt={b.title} width={600} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-[#e8f7f7] text-[#2FA4A9] text-xs font-medium px-2 py-0.5 rounded">{b.category}</span>
                      <span className="text-xs text-gray-400">{b.date}</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#2FA4A9] transition-colors">{b.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-3">{b.excerpt}</p>
                    <Link href={`/berita/${b.id}`} className="inline-flex items-center gap-1 mt-4 text-[#2FA4A9] text-sm font-medium hover:underline">
                      Baca <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Galeri Preview */}
        <section className="py-16 bg-[#f9fafb]">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <span className="text-[#F5A721] text-sm font-semibold uppercase tracking-wider">Dokumentasi</span>
              <h2 className="text-3xl font-bold text-gray-800 mt-1 mb-3">Galeri Foto</h2>
              <p className="text-gray-500 max-w-md mx-auto text-sm">Abadikan momen terbaik bersama keluarga di Taman Pintar Yogyakarta.</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "/images/assets/gedung-oval.jpg", "/images/assets/wahana-bahari.jpg", "/images/assets/planetarius.jpg", "/images/assets/kampung-kerajinan.jpg",
                "/images/assets/playground.jpg", "/images/assets/gedung-kotak.jpg", "/images/assets/zona-perpus.jpg", "/images/assets/bg-depan.jpg",
              ].map((src, idx) => (
                <div key={idx} className={`overflow-hidden rounded-md ${idx === 0 || idx === 5 ? "md:row-span-2" : ""}`}>
                  <Image src={src} alt={`Galeri ${idx + 1}`} width={400} height={300} className="w-full h-40 md:h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/galeri" className="inline-flex items-center gap-2 bg-[#2FA4A9] text-white px-7 py-3 rounded-md font-semibold hover:bg-[#247d82] transition-all">
                Lihat Galeri Lengkap <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}