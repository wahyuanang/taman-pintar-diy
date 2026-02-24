import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProfilContent from "@/components/sections/ProfilContent";

export function ProfilWrapper() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-[#f9fafb]">
        {/* Page Header */}
        <div className="relative overflow-hidden bg-[#1a2e35] py-14">
          <Image src="/images/assets/bg-depan.jpg" alt="" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-linear-to-r from-[#1a2e35]/95 via-[#1a2e35]/80 to-[#2FA4A9]/60" />
          <div className="relative container mx-auto px-4 md:px-8 z-10">
            <div className="text-center">
              <nav className="text-sm text-gray-300 mb-3">
                <span>Beranda</span>
                <span className="mx-2">/</span>
                <span className="text-white font-medium">Profil</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold text-white">Profil Kami</h1>
              <p className="text-gray-200 mt-2 text-sm">
                Mengenal lebih dekat Taman Pintar Yogyakarta
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Section Nav */}
        <div className="lg:hidden bg-white border-b border-gray-100 sticky top-16 z-30 shadow-sm">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
              {[
                { id: "sejarah", label: "Sejarah" },
                { id: "visi-misi", label: "Visi & Misi" },
                { id: "tujuan", label: "Tujuan" },
                { id: "logo", label: "Logo" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="whitespace-nowrap px-4 py-1.5 text-sm font-medium text-[#2FA4A9] border border-[#2FA4A9] rounded-md hover:bg-[#2FA4A9] hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 py-12">
          <ProfilContent />
        </div>
      </main>
      <Footer />
    </>
  );
}
