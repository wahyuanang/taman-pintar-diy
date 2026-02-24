"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { wahanaList } from "@/data/content";

const categories = ["Semua", "Indoor", "Outdoor", "Playground", "Kreativitas"];

export function WahanaWrapper() {
  const [active, setActive] = useState("Semua");

  const filtered =
    active === "Semua"
      ? wahanaList
      : wahanaList.filter((w) => w.category === active);

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-[#f9fafb]">
        {/* Header */}
        <div className="relative overflow-hidden bg-[#1a2e35] py-14">
          <Image
            src="/images/assets/bg-depan.jpeg"
            alt=""
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#1a2e35]/95 via-[#1a2e35]/80 to-[#2FA4A9]/60" />
          <div className="relative container mx-auto px-4 md:px-8 text-center z-10">
            <nav className="text-sm text-gray-300 mb-3">
              <span>Beranda</span>
              <span className="mx-2">/</span>
              <span className="text-white font-medium">Wahana</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Wahana
            </h1>
            <p className="text-gray-200 mt-2 text-sm max-w-xl mx-auto">
              Jelajahi pengalaman sains dan teknologi yang interaktif dan
              menyenangkan
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 py-10">
          {/* Filter Tabs */}
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

          {/* Wahana Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((wahana, index) => (
              <motion.div
                key={wahana.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group rounded-md overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={wahana.img}
                    alt={wahana.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-linear-to-t ${wahana.color} opacity-50`}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 text-[#2FA4A9] text-xs font-semibold px-2 py-1 rounded">
                      {wahana.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-gray-800 text-base mb-2 group-hover:text-[#2FA4A9] transition-colors line-clamp-1">
                    {wahana.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">
                    {wahana.desc}
                  </p>
                  <Link
                    href="/harga-tiket"
                    className="flex items-center justify-center gap-2 w-full bg-[#F5A721] text-white py-2 rounded-md text-sm font-semibold hover:bg-[#d4911a] transition-colors"
                  >
                    Beli Tiket
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            Menampilkan{" "}
            <strong className="text-[#2FA4A9]">{filtered.length}</strong> wahana
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
