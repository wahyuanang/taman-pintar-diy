"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, Tag, ArrowLeft, Clock, Share2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { beritaList } from "@/data/content";

interface BeritaDetailWrapperProps {
  slug: string;
}

export function BeritaDetailWrapper({ slug }: BeritaDetailWrapperProps) {
  const articleId = parseInt(slug, 10);
  const article = beritaList.find((b) => b.id === articleId);
  const related = beritaList.filter((b) => b.id !== articleId).slice(0, 3);

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="pt-16 min-h-screen bg-[#f9fafb] flex items-center justify-center">
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Artikel tidak ditemukan</h1>
            <p className="text-gray-500 mb-6">Berita yang Anda cari tidak tersedia.</p>
            <Link
              href="/berita"
              className="inline-flex items-center gap-2 bg-[#2FA4A9] text-white px-6 py-2.5 rounded-md font-semibold hover:bg-[#247d82] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Kembali ke Berita
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Dummy full article content
  const fullContent = `
    ${article.excerpt}

    Taman Pintar Yogyakarta terus berkomitmen untuk menjadi pusat edukasi sains dan teknologi terdepan di Indonesia. Sebagai wahana wisata pendidikan yang telah berdiri lebih dari satu dekade, Taman Pintar senantiasa menghadirkan program-program inovatif yang relevan dengan perkembangan zaman.

    Program ini dirancang khusus untuk mendorong minat dan bakat generasi muda Indonesia dalam bidang sains, teknologi, engineering, dan matematika (STEM). Dengan pendekatan pembelajaran yang menyenangkan dan interaktif, peserta diharapkan dapat mengembangkan kemampuan berpikir kritis dan kreatif mereka.

    Kegiatan ini juga melibatkan para mentor berpengalaman dari berbagai institusi pendidikan dan industri terkemuka. Para mentor ini akan membimbing peserta melalui sesi workshop, demonstrasi langsung, dan proyek kolaboratif yang menantang.

    Taman Pintar mengundang seluruh pelajar, guru, dan masyarakat umum untuk berpartisipasi aktif dalam berbagai kegiatan edukatif yang telah dipersiapkan. Jadikan kunjungan ke Taman Pintar sebagai pengalaman belajar yang tak terlupakan bagi seluruh keluarga.
  `;

  const paragraphs = fullContent.trim().split("\n\n").filter(Boolean);

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-[#f9fafb]">
        {/* Header */}
        <div className="relative overflow-hidden bg-[#1a2e35] py-14">
          <Image
            src={article.img}
            alt={article.title}
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#1a2e35]/95 via-[#1a2e35]/85 to-[#2FA4A9]/70" />
          <div className="relative container mx-auto px-4 md:px-8 z-10">
            <nav className="text-sm text-gray-300 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
              <span className="mx-2">/</span>
              <Link href="/berita" className="hover:text-white transition-colors">Berita</Link>
              <span className="mx-2">/</span>
              <span className="text-white font-medium line-clamp-1">{article.title}</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1 bg-[#2FA4A9] text-white text-xs font-semibold px-3 py-1 rounded-md mb-4">
                <Tag className="w-3 h-3" /> {article.category}
              </span>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" /> {article.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> {article.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> 5 menit baca
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 py-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Article Body */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Back Button */}
              <Link
                href="/berita"
                className="inline-flex items-center gap-2 text-[#2FA4A9] text-sm font-medium hover:underline mb-6"
              >
                <ArrowLeft className="w-4 h-4" /> Kembali ke Berita
              </Link>

              {/* Featured Image */}
              <div className="rounded-md overflow-hidden mb-8 shadow-sm">
                <Image
                  src={article.img}
                  alt={article.title}
                  width={900}
                  height={500}
                  className="w-full h-72 md:h-96 object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="bg-white rounded-md border border-gray-100 shadow-sm p-6 md:p-8">
                <div className="prose prose-sm md:prose-base max-w-none text-gray-700 leading-relaxed space-y-4">
                  {paragraphs.map((para, i) => (
                    <p key={i} className={i === 0 ? "text-base md:text-lg font-medium text-gray-800" : ""}>
                      {para.trim()}
                    </p>
                  ))}
                </div>

                {/* Share */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Tag className="w-4 h-4 text-[#2FA4A9]" />
                    <span className="font-medium text-[#2FA4A9]">{article.category}</span>
                  </div>
                  <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#2FA4A9] transition-colors">
                    <Share2 className="w-4 h-4" /> Bagikan Artikel
                  </button>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-6 flex gap-4">
                <Link
                  href="/berita"
                  className="flex-1 text-center border-2 border-[#2FA4A9] text-[#2FA4A9] py-2.5 rounded-md font-semibold hover:bg-[#2FA4A9] hover:text-white transition-colors text-sm"
                >
                  ← Semua Berita
                </Link>
              </div>
            </motion.div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Author Info */}
              <div className="bg-white rounded-md border border-gray-100 shadow-sm p-5">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#2FA4A9]" /> Penulis
                </h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2FA4A9] flex items-center justify-center text-white font-bold text-sm">
                    TP
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{article.author}</p>
                    <p className="text-xs text-gray-400">Taman Pintar Yogyakarta</p>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-md border border-gray-100 shadow-sm p-5">
                <h3 className="font-bold text-gray-800 mb-4">Berita Terkait</h3>
                <div className="space-y-4">
                  {related.map((b, index) => (
                    <motion.div
                      key={b.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Link
                        href={`/berita/${b.id}`}
                        className="flex gap-3 group"
                      >
                        <div className="w-16 h-16 rounded overflow-hidden shrink-0">
                          <Image
                            src={b.img}
                            alt={b.title}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-[#2FA4A9] transition-colors">
                            {b.title}
                          </p>
                          <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {b.date}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-linear-to-br from-[#2FA4A9] to-[#1a2e35] rounded-md p-5 text-white">
                <h3 className="font-bold mb-2">Rencanakan Kunjungan</h3>
                <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                  Kunjungi Taman Pintar dan rasakan pengalaman belajar yang menyenangkan.
                </p>
                <Link
                  href="/kunjungan"
                  className="block text-center bg-[#F5A721] text-white py-2.5 rounded-md text-sm font-semibold hover:bg-[#d4911a] transition-colors"
                >
                  Daftar Kunjungan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
