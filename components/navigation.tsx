"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#about", label: "HAKKİNDA" },
  { href: "#albums", label: "ALBÜMLER" },
  { href: "#concerts", label: "KONSERLER" },
  { href: "#gallery", label: "GALERİ" },
  { href: "#kayitlar", label: "KAYITLAR" },
  { href: "#links", label: "LİNKLER" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      const navHeight = 64
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
    setMobileOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-black/92 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Otomatik Kaplan"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="hidden font-sans text-sm font-bold tracking-wider text-foreground sm:block">
              OTOMATİK KAPLAN
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link font-mono text-[0.75rem] uppercase tracking-[0.15em] text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-[110] flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label="Toggle menu"
          >
            <div className="relative h-5 w-6">
              <span
                className={`absolute left-0 h-[2px] w-full bg-foreground transition-all duration-300 ${
                  mobileOpen ? "top-[9px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-[9px] h-[2px] w-full bg-foreground transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[2px] w-full bg-foreground transition-all duration-300 ${
                  mobileOpen ? "top-[9px] -rotate-45" : "top-[18px]"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[105] bg-black transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-sans text-2xl font-bold uppercase tracking-widest text-foreground transition-colors hover:text-primary"
              style={{
                transitionDelay: mobileOpen ? `${index * 50}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.3s ease",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
