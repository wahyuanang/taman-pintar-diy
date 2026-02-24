"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Info, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const tiketWahana = [
  {
    zone: "Gedung Oval & Kotak",
    items: [
      { name: "Oval Kotak", childPrice: "Rp 14.000", adultPrice: "Rp 24.000", note: "Semua Umur" },
      { name: "Dino Adventure", childPrice: "Rp 20.000", adultPrice: "Rp 25.000", note: "Loket Tiket di Gedung Oval Kotak Lantai 2" },
      { name: "Teater 4D", childPrice: "Rp 15.000", adultPrice: "Rp 20.000", note: "" },
      { name: "Hand On Science", childPrice: "Rp 12.000", adultPrice: "Rp 12.000", note: "" },
    ],
  },
  {
    zone: "Area Playground",
    items: [
      { name: "Planetarium", childPrice: "Rp 25.000", adultPrice: "Rp 25.000", note: "Semua Umur" },
      { name: "PAUD Barat / Timur", childPrice: "Rp 5.000", adultPrice: "-", note: "Usia Pra TK/TK, 3–6 tahun" },
      { name: "Wahana Bahari (Kapal Boat Mini)", childPrice: "Rp 8.000", adultPrice: "Rp 8.000", note: "Beban Maks 80kg" },
      { name: "Lalu Lintas", childPrice: "Rp 15.000", adultPrice: "-", note: "Usia Pra TK/TK, 3–6 tahun" },
    ],
  },
];

const programKreativitas = [
  { name: "Kreasi Batik", price: "Rp 20.000", note: "Usia Minimal 8 tahun → Area Playground Kampung Kerajinan" },
  { name: "Kreasi Gerabah", price: "Rp 15.000", note: "Usia Minimal 8 tahun → Area Playground Kampung Kerajinan" },
  { name: "Lukis Kaos", price: "Rp 48.000", note: "" },
  { name: "Lukis Gerabah", price: "Rp 17.000", note: "" },
];

const ketentuan = [
  "Mendaftarkan kunjungan dengan mengirimkan surat pemberitahuan kunjungan dari sekolah (bisa melalui faksimili, website) atau membawa surat tersebut pada saat hari kunjungan dilakukan.",
  "Setiap pembelian 20 tiket akan diberikan 1 tiket gratis (Khusus Oval-Kotak, Planetarium).",
  "Untuk rombongan, tiket guru diberikan dengan jumlah maksimal yang sama jumlah guru yang dikenakan tarif tiket anak sebesar 10% dari jumlah total siswa dengan membawa surat kunjungan dari sekolah.",
  "Tarif rombongan sekolah berlaku untuk setiap kunjungan dengan ketentuan membawa surat pemberitahuan.",
  "Kelebihan dari jumlah guru akan dikenakan tarif dewasa.",
  "Tiket yang sudah dibeli tidak dapat dikembalikan dan tiket berlaku hanya untuk 1 hari.",
  "*Perda Kota Yogyakarta Nomor 16 Tahun 2023",
];

export function HargaTiketWrapper() {
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
              <span className="text-white font-medium">Harga Tiket</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Harga Tiket</h1>
            <p className="text-gray-200 mt-2 text-sm">
              Informasi harga tiket masuk wahana Taman Pintar Yogyakarta
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 py-12">
          {/* Contact Banner */}
          <div className="bg-white rounded-md border border-[#2FA4A9]/20 shadow-sm p-4 flex flex-col sm:flex-row items-center justify-between gap-3 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-[#e8f7f7] flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#2FA4A9]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Butuh Informasi Lebih Lanjut?</p>
                <p className="text-xs text-gray-500">Hotline WA: 0857 3979 9999 | Telepon: (0274) 583631</p>
              </div>
            </div>
            <Link
              href="/kunjungan"
              className="shrink-0 bg-[#F5A721] text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-[#d4911a] transition-colors"
            >
              Daftar Kunjungan
            </Link>
          </div>

          {/* Wahana Ticket Tables */}
          {tiketWahana.map((zone) => (
            <div key={zone.zone} className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-6 bg-[#2FA4A9] rounded-full" />
                <h2 className="text-xl font-bold text-gray-800">{zone.zone}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {zone.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white rounded-md border border-gray-100 shadow-sm hover:shadow-md hover:border-[#2FA4A9]/30 transition-all overflow-hidden"
                  >
                    <div className="bg-linear-to-r from-[#2FA4A9] to-[#247d82] px-4 py-3">
                      <h3 className="font-semibold text-white text-sm">{item.name}</h3>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="text-center flex-1">
                          <p className="text-xs text-gray-400 mb-1">Anak (3–16 th)</p>
                          <p className="text-[#2FA4A9] font-bold text-base">{item.childPrice}</p>
                        </div>
                        <div className="w-px h-10 bg-gray-100" />
                        <div className="text-center flex-1">
                          <p className="text-xs text-gray-400 mb-1">Dewasa</p>
                          <p className="text-[#F5A721] font-bold text-base">{item.adultPrice}</p>
                        </div>
                      </div>
                      {item.note && (
                        <p className="text-xs text-gray-400 bg-gray-50 rounded px-2 py-1.5 leading-relaxed flex items-start gap-1">
                          <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#2FA4A9]" /> {item.note}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Program Kreativitas */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-6 bg-[#F5A721] rounded-full" />
              <h2 className="text-xl font-bold text-gray-800">Program Kreativitas</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {programKreativitas.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-md border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
                >
                  <div className="bg-linear-to-r from-[#F5A721] to-[#d4911a] px-4 py-3">
                    <h3 className="font-semibold text-white text-sm">{item.name}</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-2xl font-bold text-[#F5A721] mb-2">{item.price}</p>
                    {item.note && (
                      <p className="text-xs text-gray-400 bg-gray-50 rounded px-2 py-1.5 leading-relaxed flex items-start gap-1">
                        <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#F5A721]" /> {item.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-[#FFF8EC] border border-[#F5A721]/30 rounded-md p-4 text-sm text-gray-600 flex gap-3">
              <MapPin className="w-4 h-4 text-[#F5A721] shrink-0 mt-0.5" />
              <p>Area Playground: Kampung Kerajinan (Lokasi untuk semua program kreativitas)</p>
            </div>
          </div>

          {/* Ketentuan */}
          <div className="bg-white rounded-md border border-gray-100 shadow-sm p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-6 bg-gray-400 rounded-full" />
              <h2 className="text-xl font-bold text-gray-800">Prosedur Kunjungan Rombongan Sekolah</h2>
            </div>
            <ul className="space-y-3">
              {ketentuan.map((k, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                  <span className="w-5 h-5 rounded bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500 shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {k}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/kunjungan"
                className="flex-1 text-center bg-[#2FA4A9] text-white py-3 rounded-md font-semibold hover:bg-[#247d82] transition-colors"
              >
                Daftar Kunjungan Rombongan
              </Link>
              <a
                href="https://wa.me/6285739399999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center border-2 border-[#2FA4A9] text-[#2FA4A9] py-3 rounded-md font-semibold hover:bg-[#2FA4A9] hover:text-white transition-colors"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
