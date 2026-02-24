import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

// This is a generic dynamic page template.
// Replace with actual data fetching based on the slug.
export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-[#f9fafb]">
        {/* Header */}
        <div className="bg-linear-to-r from-[#1a2e35] to-[#2FA4A9] py-14">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <nav className="text-sm text-gray-300 mb-3">
              <Link href="/" className="hover:text-white transition-colors">
                Beranda
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white font-medium capitalize">
                {slug.replace(/-/g, " ")}
              </span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-white capitalize">
              {slug.replace(/-/g, " ")}
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 py-12">
          <div className="max-w-3xl mx-auto bg-white rounded-md border border-gray-100 shadow-sm p-8">
            <p className="text-gray-500 text-sm">
              Halaman ini sedang dalam pengembangan. Silakan kunjungi halaman
              lain yang tersedia.
            </p>
            <div className="flex gap-4 mt-6">
              <Link
                href="/"
                className="bg-[#2FA4A9] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#247d82] transition-colors"
              >
                Kembali ke Beranda
              </Link>
              <Link
                href="/berita"
                className="border border-[#2FA4A9] text-[#2FA4A9] px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#e8f7f7] transition-colors"
              >
                Lihat Berita
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
