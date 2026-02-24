"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const sidebarItems = [
  { id: "sejarah", label: "Sejarah" },
  { id: "visi-misi", label: "Visi & Misi" },
  { id: "tujuan", label: "Tujuan" },
  { id: "logo", label: "Makna Logo" },
];

const kelembagaan = [
  { year: "2006", desc: "UPT Taman Pintar pada Dinas Pendidikan Kota Yogyakarta" },
  { year: "2008", desc: "Kantor Pengelolaan Taman Pintar" },
  { year: "2010", desc: "UPT Taman Pintar menerapkan PPK BLUD Penuh" },
  { year: "2016", desc: "Bidang Pengelolaan Taman Pintar Dinas Pariwisata Kota Yogyakarta" },
  { year: "2021", desc: "UPT Pengelolaan Taman Budaya Dinas Kebudayaan Kota Yogyakarta" },
];

const misi = [
  "Pengembangan Sumber Daya Manusia di bidang sains dan teknologi",
  "Penyediaan alat peraga pembelajaran yang berkualitas",
  "Menumbuhkembangkan minat anak dan generasi muda terhadap sains melalui imajinasi, percobaan dan permainan yang menyenangkan",
];

export default function ProfilContent() {
  const [activeSection, setActiveSection] = useState("sejarah");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    sidebarItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="flex gap-0">
      {/* Sticky Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-24 bg-white rounded-md border border-gray-100 shadow-sm p-4">
          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3 px-2">
            Tentang Kami
          </p>
          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-md text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-[#2FA4A9] text-white shadow-sm"
                    : "text-gray-600 hover:bg-[#e8f7f7] hover:text-[#2FA4A9]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 lg:pl-10 space-y-20">
        {/* Sejarah */}
        <section id="sejarah" ref={(el) => { sectionRefs.current.sejarah = el; }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#2FA4A9] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Sejarah</h2>
          </div>

          <div className="prose prose-gray max-w-none space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
            <p>
              Sejak terjadinya ledakan perkembangan sains sekitar tahun 90-an, terutama Teknologi
              Informasi, pada gilirannya telah menghantarkan peradaban manusia menuju era tanpa
              batas. Perkembangan sains ini adalah sesuatu yang patut disyukuri dan tentunya
              menjanjikan kemudahan-kemudahan bagi perbaikan kualitas hidup manusia.
            </p>
            <p>
              Menghadapi realitas perkembangan dunia semacam itu, dan wujud kepedulian terhadap
              pendidikan, maka Pemerintah Kota Yogyakarta menggagas sebuah ide untuk Pembangunan{" "}
              <strong className="text-[#2FA4A9]">"Taman Pintar"</strong>.
            </p>
            <p>
              Disebut <em>"Taman Pintar"</em>, karena di kawasan ini nantinya para siswa, mulai
              pra sekolah sampai sekolah menengah bisa dengan leluasa memperdalam pemahaman soal
              materi-materi pelajaran yang telah diterima di sekolah dan sekaligus berekreasi.
            </p>
            <p>
              Dengan Target Pembangunan Taman Pintar adalah memperkenalkan science kepada siswa
              mulai dari dini, harapan lebih luas kreatifitas anak didik terus diasah, sehingga
              bangsa Indonesia tidak hanya menjadi sasaran eksploitasi pasar teknologi belaka,
              tetapi juga berusaha untuk dapat menciptakan teknologi sendiri.
            </p>
            <p>
              Bangunan Taman Pintar ini dibangun di eks kawasan Shopping Center, dengan
              pertimbangan tetap adanya keterkaitan yang erat antara Taman Pintar dengan fungsi
              dan kegiatan bangunan yang ada di sekitarnya, seperti Taman Budaya, Benteng
              Vredeburg, Societiet Militer dan Gedung Agung.
            </p>
          </div>

          {/* Timeline Pembangunan */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-gray-700 mb-6">Tahapan Pembangunan</h3>
            <div className="space-y-6 relative before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-[#e8f7f7]">
              {[
                { year: "2004", title: "Relokasi Area", desc: "Relokasi area Shopping Center dimulai sebagai persiapan pembangunan Taman Pintar." },
                { year: "2006", title: "Soft Opening I", desc: "Diresmikan Playground dan Gedung PAUD Barat serta PAUD Timur oleh Mendiknas Bambang Soedibyo pada 20 Mei 2006." },
                { year: "2007", title: "Soft Opening II", desc: "Gedung Oval lantai I-II dan Gedung Kotak lantai I diresmikan pada 9 Juni 2007." },
                { year: "2008", title: "Grand Opening", desc: "Pembangunan Tahap III selesai. Grand Opening oleh Presiden RI Susilo Bambang Yudhoyono pada 16 Desember 2008." },
              ].map((item) => (
                <div key={item.year} className="pl-12 relative">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-[#2FA4A9] flex items-center justify-center shadow-sm">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-md p-4 shadow-sm">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="bg-[#F5A721] text-white text-xs font-bold px-2 py-0.5 rounded">
                        {item.year}
                      </span>
                      <h4 className="font-semibold text-gray-800 text-sm">{item.title}</h4>
                    </div>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kelembagaan */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-gray-700 mb-5">Kelembagaan</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {kelembagaan.map((k) => (
                <div
                  key={k.year}
                  className="p-4 rounded-md border border-gray-100 bg-white shadow-sm hover:border-[#2FA4A9]/30 transition-colors"
                >
                  <div className="text-2xl font-bold text-[#2FA4A9] mb-1">{k.year}</div>
                  <p className="text-sm text-gray-600">{k.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visi & Misi */}
        <section id="visi-misi" ref={(el) => { sectionRefs.current["visi-misi"] = el; }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#2FA4A9] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Visi & Misi</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Visi */}
            <div className="bg-linear-to-br from-[#2FA4A9] to-[#1a2e35] rounded-md p-6 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-md flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Visi</h3>
              <p className="leading-relaxed text-gray-100">
                Sebagai wahana ekspresi, apresiasi dan kreasi sains yang terbaik se-Asia Tenggara
                dalam suasana yang menyenangkan.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white border border-gray-100 rounded-md p-6 shadow-sm">
              <div className="w-10 h-10 bg-[#e8f7f7] rounded-md flex items-center justify-center mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Misi</h3>
              <ul className="space-y-2">
                {misi.map((m, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-[#2FA4A9] text-white flex items-center justify-center text-xs shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Motto & Kebijakan Mutu */}
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <div className="bg-[#FFF8EC] border border-[#F5A721]/30 rounded-md p-5">
              <div className="flex gap-3 items-start mb-3">
                <span className="text-2xl">💡</span>
                <h3 className="font-bold text-gray-800">Motto</h3>
              </div>
              <p className="text-gray-700 font-semibold">Mencerdaskan dan Menyenangkan</p>
              <p className="text-sm text-gray-500 mt-1">
                dengan pendekatan Niteni, Niroake, Nambahi
              </p>
            </div>
            <div className="bg-[#e8f7f7] border border-[#2FA4A9]/20 rounded-md p-5">
              <div className="flex gap-3 items-start mb-3">
                <span className="text-2xl">🏅</span>
                <h3 className="font-bold text-gray-800">Kebijakan Mutu</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Taman Pintar bertekad memberikan pelayanan wisata pendidikan dengan alat peraga
                pembelajaran yang terbaik demi kepuasan pelanggan.
              </p>
            </div>
          </div>
        </section>

        {/* Tujuan */}
        <section id="tujuan" ref={(el) => { sectionRefs.current.tujuan = el; }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#2FA4A9] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Tujuan</h2>
          </div>

          <p className="text-gray-500 mb-8 text-sm md:text-base">
            Taman Pintar hadir dengan berbagai tujuan strategis untuk mendukung pendidikan
            dan pengembangan sains bagi generasi muda Indonesia.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                icon: "📚",
                title: "Pembelajaran Sains",
                desc: "Menyediakan sarana pembelajaran sains bagi siswa yang mendukung kurikulum pendidikan.",
              },
              {
                icon: "🌟",
                title: "Cinta Sains",
                desc: "Memotivasi anak dan generasi muda untuk mencintai sains dan teknologi sebagai bekal masa depan.",
              },
              {
                icon: "👨‍🏫",
                title: "Pengembangan Guru",
                desc: "Membantu guru dalam mengembangkan metode pengajaran di bidang sains yang lebih inovatif.",
              },
              {
                icon: "🎡",
                title: "Wisata Sains",
                desc: "Memberi alternatif wisata sains yang edukatif dan menyenangkan untuk keluarga Indonesia.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 bg-white rounded-md border border-gray-100 shadow-sm hover:border-[#2FA4A9]/30 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-[#e8f7f7] rounded-md flex items-center justify-center shrink-0">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Logo */}
        <section id="logo" ref={(el) => { sectionRefs.current.logo = el; }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#2FA4A9] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Makna Logo</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col items-center">
              <div className="bg-[#f9fafb] rounded-md p-8 border border-gray-100 w-full flex justify-center">
                <Image
                  src="/images/logo-tp.png"
                  alt="Logo Taman Pintar Yogyakarta"
                  width={200}
                  height={160}
                  className="h-36 w-auto object-contain"
                />
              </div>
              <p className="text-sm text-gray-400 mt-3 text-center">Logo Taman Pintar Yogyakarta</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: "✨",
                  title: "Kembang Api",
                  desc: "Kembang api adalah simbolisasi dari intelegensi dan imajinasi. Dalam Bahasa Jawa, kembang api menggambarkan MLETHIK = PINTAR = PADHANG MAK BYAAR = PINTAR.",
                },
                {
                  icon: "😊",
                  title: "Menyenangkan",
                  desc: "KEMBANG API merupakan sesuatu yang menyenangkan, MENGHIBUR, sesuai dengan VISI TAMAN PINTAR sebagai wahana ekspresi, apresiasi dan kreasi sains dalam suasana yang menyenangkan.",
                },
                {
                  icon: "🌍",
                  title: "Outward Looking",
                  desc: "Gambar LOGO yang muncul ke luar mengandung makna OUTWARD LOOKING, selalu melihat ke luar untuk terus belajar mengikuti dinamika perubahan di luar dirinya.",
                },
                {
                  icon: "☀️",
                  title: "Matahari",
                  desc: "Gambar LOGO tampak seperti matahari mengandung makna menyinari sepanjang masa.",
                },
                {
                  icon: "🤝",
                  title: "Keselarasan",
                  desc: "Jari jemari kembang api melambangkan KESELARASAN antara INTELEGENSI dan SOCIAL LIFE, diharapkan pengguna Taman Pintar mempunyai IQ, SQ, dan EQ.",
                },
                {
                  icon: "🌱",
                  title: "Warna Hijau–Biru",
                  desc: "Warna gabungan HIJAU–BIRU melambangkan PERTUMBUHAN TAK TERBATAS. Miring ke kanan sebagai visualisasi pergerakan ke arah yang lebih baik.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#e8f7f7] flex items-center justify-center shrink-0">
                    <span className="text-base">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-0.5">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
