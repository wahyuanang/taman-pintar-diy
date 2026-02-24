import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, PrinterIcon, MessageCircle, Mail, Globe, Facebook, Twitter, Youtube, Instagram, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a2e35] text-white">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Image src="/images/logo-tp.png" alt="Taman Pintar Yogyakarta" width={140} height={56} className="h-12 w-auto object-contain brightness-0 invert mb-4" />
            <p className="text-sm text-gray-300 leading-relaxed mt-3">
              Sejak terjadinya ledakan perkembangan sains sekitar tahun 90-an, terutama Teknologi Informasi, pada gilirannya telah menghantarkan peradaban manusia menuju era tanpa batas.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { label: "Facebook", Icon: Facebook, href: "#" },
                { label: "Twitter", Icon: Twitter, href: "#" },
                { label: "YouTube", Icon: Youtube, href: "#" },
                { label: "Instagram", Icon: Instagram, href: "#" },
              ].map(({ label, Icon, href }) => (
                <a key={label} href={href} aria-label={label} className="w-8 h-8 rounded-md bg-[#2FA4A9] flex items-center justify-center text-white hover:bg-[#F5A721] transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#F5A721] uppercase tracking-wider mb-4">Tautan &amp; Link</h3>
            <div className="space-y-2">
              <p className="text-xs text-gray-400 font-medium uppercase">Eksternal</p>
              {[
                { label: "ASPAC", href: "https://aspac.id" },
                { label: "PP IPTEK", href: "https://ppiptek.id" },
              ].map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-gray-300 hover:text-[#2FA4A9] transition-colors">
                  {l.label} <ExternalLink className="w-3 h-3" />
                </a>
              ))}
              <p className="text-xs text-gray-400 font-medium uppercase pt-3">Internal</p>
              <a href="https://jogjakota.go.id" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-gray-300 hover:text-[#2FA4A9] transition-colors">
                Pemerintah Kota Yogyakarta <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#F5A721] uppercase tracking-wider mb-4">Navigasi</h3>
            <ul className="space-y-2">
              {[
                { label: "Beranda", href: "/" },
                { label: "Sejarah", href: "/profil#sejarah" },
                { label: "Wahana", href: "/wahana" },
                { label: "Berita", href: "/berita" },
                { label: "Kunjungan", href: "/kunjungan" },
                { label: "Galeri", href: "/galeri" },
                { label: "Harga Tiket", href: "/harga-tiket" },
                { label: "Kontak", href: "/kontak" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-300 hover:text-[#2FA4A9] transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#F5A721] uppercase tracking-wider mb-4">Kontak Kami</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {[
                { Icon: MapPin, text: "Jalan Panembahan Senopati 1-3, Yogyakarta 55122", href: null },
                { Icon: Phone, text: "(0274) 583631", href: "tel:+62274583631" },
                { Icon: PrinterIcon, text: "(0274) 583664", href: null },
                { Icon: MessageCircle, text: "085729739999", href: "https://wa.me/6285729739999" },
                { Icon: Mail, text: "info@tamanpintar.com", href: "mailto:info@tamanpintar.com" },
                { Icon: Globe, text: "www.tamanpintar.co.id", href: "https://www.tamanpintar.co.id" },
              ].map(({ Icon, text, href }) => (
                <li key={text} className="flex gap-3 items-start">
                  <Icon className="w-4 h-4 text-[#2FA4A9] shrink-0 mt-0.5" />
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="hover:text-[#2FA4A9] transition-colors">{text}</a>
                  ) : (
                    <span>{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 py-4">
          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Taman Pintar Yogyakarta. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}