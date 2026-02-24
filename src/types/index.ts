// Navigation
export interface NavLink {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

export interface DropdownItem {
  label: string;
  href: string;
}

// Wahana
export interface Wahana {
  id: number;
  title: string;
  desc: string;
  category: string;
  img: string;
  color: string;
}

// Berita
export interface Berita {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  img: string;
  author: string;
}

// Gallery
export type GallerySize = "normal" | "tall" | "wide";

export interface GaleriItem {
  id: number;
  alt: string;
  category: string;
  img: string;
  size: GallerySize;
}

// Harga Tiket
export interface TiketItem {
  name: string;
  childPrice: string;
  adultPrice: string;
  note: string;
}

export interface TiketZone {
  zone: string;
  items: TiketItem[];
}

export interface ProgramKreativitas {
  name: string;
  price: string;
  note: string;
}

// Kelembagaan
export interface Kelembagaan {
  year: string;
  desc: string;
}

// Contact
export interface ContactDetail {
  icon: string;
  title: string;
  value: string;
  link: string | null;
}

// Stats
export interface StatItem {
  value: string;
  label: string;
  icon: string;
}
