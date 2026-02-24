import type {
  NavLink,
  Wahana,
  Berita,
  GaleriItem,
  TiketZone,
  ProgramKreativitas,
  Kelembagaan,
  StatItem,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil",
    href: "/profil",
    dropdown: [
      { label: "Sejarah", href: "/profil#sejarah" },
      { label: "Visi & Misi", href: "/profil#visi-misi" },
      { label: "Tujuan", href: "/profil#tujuan" },
      { label: "Makna Logo", href: "/profil#logo" },
    ],
  },
  { label: "Wahana", href: "/wahana" },
  { label: "Berita", href: "/berita" },
  { label: "Kunjungan", href: "/kunjungan" },
  { label: "Galeri", href: "/galeri" },
  { label: "Harga Tiket", href: "/harga-tiket" },
  { label: "Kontak", href: "/kontak" },
];

export const stats: StatItem[] = [
  { value: "3 Jt+", label: "Pengunjung / Tahun", icon: "👥" },
  { value: "200+", label: "Penghargaan Nasional", icon: "🏆" },
  { value: "500", label: "Media per Tahun", icon: "📰" },
  { value: "15+", label: "Zona Wahana", icon: "🏛️" },
];

export const wahanaList: Wahana[] = [
  {
    id: 1,
    title: "Zona Pengolahan Sampah",
    desc: "Area edukasi lingkungan hidup yang mengajarkan cara pengolahan sampah organik dan anorganik secara interaktif.",
    category: "Outdoor",
    img: "/images/assets/zona-sampah.jpg",
    color: "from-green-600 to-green-800",
  },
  {
    id: 2,
    title: "Wahana Bahari",
    desc: "Jelajahi kekayaan laut Nusantara dengan kapal bot mini dan pameran ekosistem laut Indonesia yang memukau.",
    category: "Outdoor",
    img: "/images/assets/wahana-bahari.jpg",
    color: "from-blue-500 to-blue-800",
  },
  {
    id: 3,
    title: "Playground",
    desc: "Area bermain terbuka yang dirancang khusus untuk mengembangkan motorik dan kreativitas anak-anak.",
    category: "Playground",
    img: "/images/assets/playground.jpeg",
    color: "from-yellow-500 to-orange-600",
  },
  {
    id: 4,
    title: "Zona Perpustakaan",
    desc: "Perpustakaan dengan koleksi buku sains dan teknologi lengkap. Ruang baca nyaman untuk semua usia.",
    category: "Indoor",
    img: "/images/assets/zona-perpus.jpg",
    color: "from-[#2FA4A9] to-[#1a2e35]",
  },
  {
    id: 5,
    title: "Kampung Kerajinan",
    desc: "Kenali seni kerajinan tangan tradisional Yogyakarta. Belajar membatik, mengukir, dan kerajinan gerabah.",
    category: "Kreativitas",
    img: "/images/assets/kampung-kerajinan.jeg",
    color: "from-amber-600 to-red-700",
  },
  {
    id: 6,
    title: "Gedung PAUD",
    desc: "Wahana pendidikan interaktif khusus untuk anak usia dini dengan alat peraga yang menyenangkan.",
    category: "Indoor",
    img: "/images/assets/gedung-paud.jpeg",
    color: "from-pink-400 to-pink-700",
  },
  {
    id: 7,
    title: "Planetarium",
    desc: "Pertunjukan langit digital yang memukau. Jelajahi galaksi, bintang, dan planet dalam teater bintang modern.",
    category: "Indoor",
    img: "/images/assets/planetarius.jpeg",
    color: "from-indigo-700 to-purple-900",
  },
  {
    id: 8,
    title: "Gedung Kotak",
    desc: "Pusat teknologi dan sains dengan berbagai alat peraga interaktif tentang fisika, kimia, dan biologi.",
    category: "Indoor",
    img: "/images/assets/gedung-kotak.jpeg",
    color: "from-[#2FA4A9] to-teal-800",
  },
  {
    id: 9,
    title: "Gedung Oval",
    desc: "Gedung ikonik Taman Pintar dengan pameran teknologi informasi dan komunikasi yang canggih.",
    category: "Indoor",
    img: "/images/assets/gedung-oval.jpeg",
    color: "from-slate-600 to-slate-900",
  },
  {
    id: 10,
    title: "Dino Adventure",
    desc: "Petualangan seru di dunia dinosaurus. Kenali berbagai jenis dinosaurus dan kehidupan prasejarah.",
    category: "Indoor",
    img: "/images/assets/bg-depan.jpeg",
    color: "from-emerald-600 to-green-900",
  },
  {
    id: 11,
    title: "Teater 4D",
    desc: "Nikmati pengalaman bioskop 4 dimensi dengan kursi bergerak dan efek suara surround yang imersif.",
    category: "Indoor",
    img: "/images/assets/bg-depan.jpeg",
    color: "from-red-600 to-red-900",
  },
  {
    id: 12,
    title: "Hand On Science",
    desc: "Pelajari berbagai eksperimen sains secara langsung dengan panduan instruktur berpengalaman.",
    category: "Kreativitas",
    img: "/images/assets/bg-depan.jpeg",
    color: "from-violet-500 to-purple-800",
  },
  {
    id: 13,
    title: "Lalu Lintas",
    desc: "Wahana edukasi lalu lintas untuk anak-anak. Belajar aturan dan keselamatan berkendara.",
    category: "Outdoor",
    img: "/images/assets/playground.jpeg",
    color: "from-orange-500 to-red-700",
  },
  {
    id: 14,
    title: "Kreasi Batik",
    desc: "Belajar membatik tradisional dengan berbagai motif khas Yogyakarta dari pengrajin berpengalaman.",
    category: "Kreativitas",
    img: "/images/assets/kampung-kerajinan.jpeg",
    color: "from-amber-600 to-yellow-900",
  },
];

export const beritaList: Berita[] = [
  {
    id: 1,
    title: "Kontes Robot Pintar Yogyakarta 2025",
    excerpt:
      "Form Pendaftaran dan Juknis kontes Robot Pintar Yogyakarta (KRPY) 2025 dapat diakses di link berikut https://linktr.ee/InspireKRPY2025 ...",
    date: "Rabu, 29 Oktober 2025",
    category: "Event",
    img: "/images/assets/bg-depan.jpeg",
    author: "Admin Taman Pintar",
  },
  {
    id: 2,
    title: 'Kontes Roket Air Taman Pintar 2025 "Partisipasi Aktif Pelajar"',
    excerpt:
      "Taman Pintar Yogyakarta kembali menghadirkan Kontes Roket Air Taman Pintar 2025 yang akan berlangsung di Taman Budaya Embung Giwangan.",
    date: "Minggu, 21 September 2025",
    category: "Kompetisi",
    img: "/images/assets/gedung-oval.jpeg",
    author: "Admin Taman Pintar",
  },
  {
    id: 3,
    title: "Kontes Roket Air Taman Pintar 2025",
    excerpt:
      "Pendaftaran peserta melalui link berikut: https://bit.ly/kontesroketairtp2025",
    date: "Sabtu, 16 Agustus 2025",
    category: "Kompetisi",
    img: "/images/assets/planetarius.jpeg",
    author: "Admin Taman Pintar",
  },
  {
    id: 4,
    title: "Pembukaan Pasar Minggu TBEG: Ruang Srawung Warga",
    excerpt:
      "Taman Budaya Embung Giwangan (TBEG) hadir dengan kegiatan Pasar Minggu yang kreatif dan menyenangkan.",
    date: "Minggu, 27 Juli 2025",
    category: "Kegiatan",
    img: "/images/assets/1.jpg",
    author: "Admin Taman Pintar",
  },
  {
    id: 5,
    title: "Cybersecurity dan Literasi Digital untuk Siswa SMP dan SMA",
    excerpt:
      "Taman Pintar menyelenggarakan program pelatihan keamanan siber dan literasi digital untuk pelajar.",
    date: "Selasa, 24 Juni 2025",
    category: "Kegiatan",
    img: "/images/assets/kampung-kerajinan.jpeg",
    author: "Admin Taman Pintar",
  },
  {
    id: 6,
    title: "Kompetisi Roket Air Nasional Indonesia dan Taman Pintar",
    excerpt:
      "Kompetisi bergengsi tingkat nasional mempertemukan para pelajar terbaik dari seluruh Indonesia.",
    date: "Kamis, 19 Juni 2025",
    category: "Kompetisi",
    img: "/images/assets/wahana-bahari.jpg",
    author: "Admin Taman Pintar",
  },
  {
    id: 7,
    title: "Peresmian Taman Budaya Embung Giwangan",
    excerpt:
      "Taman Budaya Embung Giwangan resmi dibuka sebagai ruang publik baru yang menggabungkan seni, budaya, dan olahraga.",
    date: "Sabtu, 24 Mei 2025",
    category: "Berita",
    img: "/images/assets/gedung-kotak.jpeg",
    author: "Admin Taman Pintar",
  },
  {
    id: 8,
    title: "Taman Pintar Siap Hadapi Libur Lebaran 2025",
    excerpt:
      "Sambut libur Lebaran 2025 dengan berbagai program dan wahana spesial yang telah disiapkan.",
    date: "Rabu, 2 April 2025",
    category: "Promo",
    img: "/images/assets/playground.jpeg",
    author: "Admin Taman Pintar",
  },
];

export const galeriItems: GaleriItem[] = [
  {
    id: 1,
    alt: "Gedung Oval Taman Pintar",
    category: "Fasilitas",
    img: "/images/assets/gedung-oval.jpeg",
    size: "tall",
  },
  {
    id: 2,
    alt: "Pengunjung Taman Pintar",
    category: "Kegiatan",
    img: "/images/assets/bg-depan.jpeg",
    size: "normal",
  },
  {
    id: 3,
    alt: "Wahana Bahari",
    category: "Wahana",
    img: "/images/assets/wahana-bahari.jpg",
    size: "normal",
  },
  {
    id: 4,
    alt: "Kontes Robot Pintar",
    category: "Event",
    img: "/images/assets/gedung-kotak.jpeg",
    size: "wide",
  },
  {
    id: 5,
    alt: "Planetarium Taman Pintar",
    category: "Wahana",
    img: "/images/assets/planetarius.jpeg",
    size: "tall",
  },
  {
    id: 6,
    alt: "Kegiatan Kreasi Batik",
    category: "Kegiatan",
    img: "/images/assets/kampung-kerajinan.jpeg",
    size: "normal",
  },
  {
    id: 7,
    alt: "Playground Taman Pintar",
    category: "Wahana",
    img: "/images/assets/playground.jpeg",
    size: "normal",
  },
  {
    id: 8,
    alt: "Gedung Kotak Taman Pintar",
    category: "Fasilitas",
    img: "/images/assets/gedung-kotak.jpeg",
    size: "normal",
  },
  {
    id: 9,
    alt: "Pameran Sains",
    category: "Event",
    img: "/images/assets/bg-depan.jpeg",
    size: "wide",
  },
  {
    id: 10,
    alt: "Dino Adventure",
    category: "Wahana",
    img: "/images/assets/gedung-paud.jpeg",
    size: "tall",
  },
  {
    id: 11,
    alt: "Kreasi Gerabah",
    category: "Kegiatan",
    img: "/images/assets/kampung-kerajinan.jpeg",
    size: "normal",
  },
  {
    id: 12,
    alt: "Area Playground",
    category: "Fasilitas",
    img: "/images/assets/playground.jpeg",
    size: "normal",
  },
  {
    id: 13,
    alt: "Hand On Science",
    category: "Wahana",
    img: "/images/assets/zona-perpus.jpg",
    size: "normal",
  },
  {
    id: 14,
    alt: "Kontes Roket Air",
    category: "Event",
    img: "/images/assets/zona-sampah.jpg",
    size: "normal",
  },
  {
    id: 15,
    alt: "Kampung Kerajinan",
    category: "Kegiatan",
    img: "/images/assets/kampung-kerajinan.jpeg",
    size: "tall",
  },
];

export const tiketWahana: TiketZone[] = [
  {
    zone: "Gedung Oval & Kotak",
    items: [
      {
        name: "Oval Kotak",
        childPrice: "Rp 14.000",
        adultPrice: "Rp 24.000",
        note: "Semua Umur",
      },
      {
        name: "Dino Adventure",
        childPrice: "Rp 20.000",
        adultPrice: "Rp 25.000",
        note: "Loket Tiket di Gedung Oval Kotak Lantai 2",
      },
      {
        name: "Teater 4D",
        childPrice: "Rp 15.000",
        adultPrice: "Rp 20.000",
        note: "",
      },
      {
        name: "Hand On Science",
        childPrice: "Rp 12.000",
        adultPrice: "Rp 12.000",
        note: "",
      },
    ],
  },
  {
    zone: "Area Playground",
    items: [
      {
        name: "Planetarium",
        childPrice: "Rp 25.000",
        adultPrice: "Rp 25.000",
        note: "Semua Umur",
      },
      {
        name: "PAUD Barat / Timur",
        childPrice: "Rp 5.000",
        adultPrice: "-",
        note: "Usia Pra TK/TK, 3–6 tahun",
      },
      {
        name: "Wahana Bahari (Kapal Boat Mini)",
        childPrice: "Rp 8.000",
        adultPrice: "Rp 8.000",
        note: "Beban Maks 80kg",
      },
      {
        name: "Lalu Lintas",
        childPrice: "Rp 15.000",
        adultPrice: "-",
        note: "Usia Pra TK/TK, 3–6 tahun",
      },
    ],
  },
];

export const programKreativitas: ProgramKreativitas[] = [
  {
    name: "Kreasi Batik",
    price: "Rp 20.000",
    note: "Usia Minimal 8 tahun → Area Playground Kampung Kerajinan",
  },
  {
    name: "Kreasi Gerabah",
    price: "Rp 15.000",
    note: "Usia Minimal 8 tahun → Area Playground Kampung Kerajinan",
  },
  { name: "Lukis Kaos", price: "Rp 48.000", note: "" },
  { name: "Lukis Gerabah", price: "Rp 17.000", note: "" },
];

export const kelembagaan: Kelembagaan[] = [
  {
    year: "2006",
    desc: "UPT Taman Pintar pada Dinas Pendidikan Kota Yogyakarta",
  },
  { year: "2008", desc: "Kantor Pengelolaan Taman Pintar" },
  { year: "2010", desc: "UPT Taman Pintar menerapkan PPK BLUD Penuh" },
  {
    year: "2016",
    desc: "Bidang Pengelolaan Taman Pintar Dinas Pariwisata Kota Yogyakarta",
  },
  {
    year: "2021",
    desc: "UPT Pengelolaan Taman Budaya Dinas Kebudayaan Kota Yogyakarta",
  },
];
