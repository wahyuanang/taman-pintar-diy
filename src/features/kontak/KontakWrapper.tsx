"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, PrinterIcon, MessageCircle, Mail, Globe, Clock, Facebook, Twitter, Youtube, Instagram, Send } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const contactDetails = [
  { Icon: MapPin, title: "Alamat", value: "Jalan Panembahan Senopati 1\u20133, Yogyakarta 55122", link: null },
  { Icon: Phone, title: "Telepon", value: "(0274) 583631", link: "tel:+62274583631" },
  { Icon: PrinterIcon, title: "Faksimili", value: "(0274) 583664", link: null },
  { Icon: MessageCircle, title: "WhatsApp", value: "0857 2973 9999", link: "https://wa.me/6285729739999" },
  { Icon: Mail, title: "Email", value: "info@tamanpintar.com", link: "mailto:info@tamanpintar.com" },
  { Icon: Globe, title: "Website", value: "www.tamanpintar.co.id", link: "https://www.tamanpintar.co.id" },
];

const operasional = [
  { day: "Senin – Jumat", time: "08.00 – 16.00 WIB" },
  { day: "Sabtu – Minggu", time: "08.00 – 17.00 WIB" },
  { day: "Hari Libur Nasional", time: "08.00 – 17.00 WIB" },
];

export function KontakWrapper() {
  const [form, setForm] = useState({
    nama: "",
    instansi: "",
    telepon: "",
    email: "",
    pesan: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.");
    setForm({ nama: "", instansi: "", telepon: "", email: "", pesan: "" });
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
              <span className="text-white font-medium">Kontak</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Kontak Kami</h1>
            <p className="text-gray-200 mt-2 text-sm">
              Kami siap membantu Anda! Hubungi kami melalui form atau informasi kontak di bawah.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-md border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#2FA4A9]" />
                  Informasi Kontak
                </h2>
                <div className="space-y-4">
                  {contactDetails.map((d) => (
                    <div key={d.title} className="flex gap-3">
                      <div className="w-9 h-9 bg-[#e8f7f7] rounded-md flex items-center justify-center shrink-0">
                        <d.Icon className="w-4 h-4 text-[#2FA4A9]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">{d.title}</p>
                        {d.link ? (
                          <a
                            href={d.link}
                            target={d.link.startsWith("http") ? "_blank" : undefined}
                            rel={d.link.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-sm font-medium text-[#2FA4A9] hover:underline"
                          >
                            {d.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-gray-700">{d.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-md border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#F5A721]" />
                  Jam Operasional
                </h2>
                <div className="space-y-3">
                  {operasional.map((o) => (
                    <div
                      key={o.day}
                      className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
                    >
                      <span className="text-sm text-gray-600">{o.day}</span>
                      <span className="text-sm font-semibold text-[#2FA4A9]">{o.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-linear-to-br from-[#2FA4A9] to-[#1a2e35] rounded-md p-6 text-white">
                <h2 className="font-bold mb-4 flex items-center gap-2"><Globe className="w-4 h-4" /> Ikuti Kami</h2>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Facebook", Icon: Facebook },
                    { label: "Twitter / X", Icon: Twitter },
                    { label: "YouTube", Icon: Youtube },
                    { label: "Instagram", Icon: Instagram },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href="#"
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-md px-3 py-2 text-sm"
                    >
                      <s.Icon className="w-3.5 h-3.5" />
                      <span className="text-xs">{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form + Map */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-md border border-gray-100 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-6 bg-[#2FA4A9] rounded-full" />
                  <h2 className="text-xl font-bold text-gray-800">Kirim Pesan</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nama"
                      value={form.nama}
                      onChange={handleChange}
                      required
                      placeholder="Masukkan nama lengkap"
                      className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2FA4A9] focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Instansi / Sekolah
                    </label>
                    <input
                      type="text"
                      name="instansi"
                      value={form.instansi}
                      onChange={handleChange}
                      placeholder="Nama instansi / sekolah (opsional)"
                      className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2FA4A9] focus:border-transparent transition"
                    />
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
                        placeholder="email@contoh.com"
                        className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2FA4A9] focus:border-transparent transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Pesan <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="pesan"
                      value={form.pesan}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tuliskan pesan atau pertanyaan Anda..."
                      className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2FA4A9] focus:border-transparent transition resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#2FA4A9] text-white py-3 rounded-md font-semibold hover:bg-[#247d82] transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Kirim Pesan
                  </button>
                </form>
              </div>

              <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#2FA4A9]" />
                    Lokasi Taman Pintar Yogyakarta
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Jl. Panembahan Senopati No.1–3, Ngupasan, Kec. Gondomanan, Kota Yogyakarta 55122
                  </p>
                </div>
                <div className="h-72 bg-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.122617534456!2d110.36295831477252!3d-7.800856294302898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a578db9b96e1b%3A0x93d2f1c2c0c4d94!2sTaman%20Pintar%20Yogyakarta!5e0!3m2!1sid!2sid!4v1640000000000!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Taman Pintar Yogyakarta"
                  />
                </div>
                <div className="p-4">
                  <a
                    href="https://maps.google.com/maps?q=Taman+Pintar+Yogyakarta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#2FA4A9] text-sm font-medium hover:underline"
                  >
                    Buka di Google Maps →
                  </a>
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
