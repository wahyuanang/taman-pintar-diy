"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Ticket } from "lucide-react";
import { navLinks } from "@/data/content";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-white/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/logo-tp.png"
              alt="Taman Pintar Yogyakarta"
              width={120}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive(link.href) ? "text-[#2FA4A9] bg-[#e8f7f7]" : "text-gray-700 hover:text-[#2FA4A9] hover:bg-[#e8f7f7]"}`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-100 py-1 z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-[#2FA4A9] hover:bg-[#e8f7f7] transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive(link.href) ? "text-[#2FA4A9] bg-[#e8f7f7]" : "text-gray-700 hover:text-[#2FA4A9] hover:bg-[#e8f7f7]"}`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/harga-tiket"
              className="inline-flex items-center gap-2 bg-[#F5A721] text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-[#d4911a] transition-colors shadow-sm"
            >
              <Ticket className="w-4 h-4" />
              Beli Tiket
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-3 space-y-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-[#e8f7f7] hover:text-[#2FA4A9] transition-colors"
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileDropdownOpen && (
                    <div className="pl-4 space-y-1 mt-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="block px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-[#e8f7f7] hover:text-[#2FA4A9] transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive(link.href) ? "text-[#2FA4A9] bg-[#e8f7f7]" : "text-gray-700 hover:text-[#2FA4A9] hover:bg-[#e8f7f7]"}`}
                >
                  {link.label}
                </Link>
              ),
            )}
            <div className="pt-2">
              <Link
                href="/harga-tiket"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#F5A721] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#d4911a] transition-colors"
              >
                <Ticket className="w-4 h-4" />
                Beli Tiket
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
