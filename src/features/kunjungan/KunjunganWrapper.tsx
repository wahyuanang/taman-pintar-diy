"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, FileText, CalendarDays, GraduationCap, Phone, Send, ClipboardList, Ticket } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const wahanaOptions = [
  "Pilih Wahana",
  "Gedung Oval (Kotak + Oval)",
  "Dino Adventure",
  "Teater 4D",
  "Hand On Science",
  "Planetarium",
  "PAUD",
  "Wahana Bahari",
  "Lalu Lintas",
  "Kreasi Batik",
  "Kreasi Gerabah",
  "Lukis Kaos",
  "Lukis Gerabah",
];

const waktuOptions = ["08:45 WIB", "09:00 WIB", "10:00 WIB", "11:00 WIB", "13:00 WIB", "14:00 WIB"];

const procedures = [
  "Minimal jumlah rombongan sekolah adalah 20 orang, yang terdiri dari siswa & guru.",
  "Membawa / menyampaikan surat pemberitahuan kunjungan resmi dari sekolah, ditujukan kepada Taman Pintar.",
  "Atau dapat juga dengan cara registrasi kunjungan rombongan melalui link ini.",
  "Ketentuan ini berlaku untuk semua hari, termasuk hari Minggu maupun hari libur nasional.",
];

const infoCards = [
  { Icon: Users, title: "Minimal Rombongan", value: "20 Orang", color: "bg-[#e8f7f7] text-[#2FA4A9]" },
  { Icon: FileText, title: "Surat Keterangan", value: "Wajib Disertakan", color: "bg-[#FFF8EC] text-[#F5A721]" },
  { Icon: CalendarDays, title: "Berlaku Semua Hari", value: "Termasuk Hari Libur", color: "bg-purple-50 text-purple-600" },
  { Icon: GraduationCap, title: "Diskon Tiket Guru", value: "10% dari Total Tiket Siswa", color: "bg-green-50 text-green-600" },
];

export function KunjunganWrapper() {
  const [form, setForm] = useState({
    instansi: "",
    penanggung: "",
    wahana: "Pilih Wahana",
    telepon: "",
    email: "",
    jumlah: "20",
    tanggal: "",
    waktu: "08:45 WIB",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pendaftaran kunjungan berhasil dikirim! Kami akan segera menghubungi Anda.");
  };

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
              <span className="text-white font-medium">Kunjungan</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Kunjungan</h1>
            <p className="text-[#F5A721] font-medium mt-1">Taman Pintar Yogyakarta</p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 py-12">
          {/* Info Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {infoCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-md p-4 border border-gray-100 shadow-sm text-center"
              >
                <div className={`inline-flex w-12 h-12 rounded-md items-center justify-center mb-3 ${card.color}`}>
                  <card.Icon className="w-5 h-5" />
                </div>
                <p className="text-xs text-gray-400 mb-1">{card.title}</p>
                <p className="font-bold text-gray-800 text-sm">{card.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-md border border-gray-100 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-6 bg-[#2FA4A9] rounded-full" />
                  <h2 className="text-xl font-bold text-gray-800">Form Pendaftaran Kunjungan</h2>
                </div>
                <p className="text-sm text-gray-500 mb-6">
                  Khusus untuk <span className="font-semibold text-[#2FA4A9]">Rombongan Sekolah</span>
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Nama Instansi / Sekolah <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="instansi"
                      value={form.instansi}
                      onChange={handleChange}
                      required
                      placeholder="Contoh: SD Negeri 1 Yogyakarta"
                      className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2FA4A9] focus:border-transparent transition"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Penanggung Jawab <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="penanggung"
                        value={form.penanggung}
                        onChange={handleChange}
                        required
                        placeholder="Nama lengkap"
                        className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2FA4A9] focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Pilih Wahana <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="wahana"
                        value={form.wahana}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2FA4A9] focus:border-transparent transition bg-white"
                      >
                        {wahanaOptions.map((w) => (
                          <option key={w} value={w}>{w}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        No. Telepon <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="telepon"
                        value={form.telepon}
                        onChange={handleChange}
                        required
                        placeholder="08xxxxxxxxxx"
                        className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2FA4A9] focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="email@sekolah.sch.id"
                        className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2FA4A9] focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Jumlah Orang <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="jumlah"
                        min="20"
                        value={form.jumlah}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2FA4A9] focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Tanggal Kunjungan <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="tanggal"
                        value={form.tanggal}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2FA4A9] focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Waktu</label>
                      <select
                        name="waktu"
                        value={form.waktu}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2FA4A9] focus:border-transparent transition bg-white"
                      >
                        {waktuOptions.map((w) => (
                          <option key={w}>{w}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#2FA4A9] text-white py-3 rounded-md font-semibold hover:bg-[#247d82] transition-colors shadow-sm"
                    >
                      Daftar Kunjungan
                    </button>
                    <p className="text-xs text-gray-400 text-center mt-3">
                      Dengan mendaftar, Anda menyetujui syarat dan ketentuan kunjungan Taman Pintar.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-md border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <ClipboardList className="w-4 h-4 text-[#2FA4A9]" />
                  Prosedur Kunjungan
                </h3>
                <ol className="space-y-3">
                  {procedures.map((p, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-600">
                      <span className="w-6 h-6 rounded-full bg-[#2FA4A9] text-white flex items-center justify-center text-xs font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-linear-to-br from-[#2FA4A9] to-[#1a2e35] rounded-md p-6 text-white">
                <h3 className="font-bold mb-2 flex items-center gap-2"><Ticket className="w-4 h-4" /> Informasi Harga Tiket</h3>
                <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                  Cek harga tiket masuk untuk setiap wahana dan temukan paket terbaik untuk
                  kunjungan rombongan Anda.
                </p>
                <Link
                  href="/harga-tiket"
                  className="block text-center bg-[#F5A721] text-white py-2.5 rounded-md text-sm font-semibold hover:bg-[#d4911a] transition-colors"
                >
                  Lihat Harga Tiket →
                </Link>
              </div>

              <div className="bg-white rounded-md border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><Phone className="w-4 h-4 text-[#2FA4A9]" /> Hubungi Kami</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Hotline WA: <strong>0857 3979 9999</strong></p>
                  <p>Telepon: <strong>(0274) 583631</strong></p>
                  <p>Email: <strong>info@tamanpintar.com</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
