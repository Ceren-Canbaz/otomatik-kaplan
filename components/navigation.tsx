"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { LOGO_SM } from "@/lib/utils"

const navLinks = [
  { href: "#about", label: "HAKKİNDA" },
  { href: "#discography", label: "DİSKOGRAFİ" },
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

  useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
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
        className={`fixed left-0 right-0 top-0 transition-all duration-300 ${
          mobileOpen ? "z-[120]" : "z-[100]"
        } ${
          scrolled || mobileOpen
            ? "bg-black/92 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <Image
              src={LOGO_SM}
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

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`relative flex h-10 w-10 items-center justify-center lg:hidden ${
              mobileOpen ? "z-[120]" : "z-[110]"
            }`}
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-foreground" strokeWidth={1.5} />
            ) : (
              <div className="relative h-5 w-6">
                <span className="absolute left-0 top-0 h-[2px] w-full bg-foreground" />
                <span className="absolute left-0 top-[9px] h-[2px] w-full bg-foreground" />
                <span className="absolute left-0 top-[18px] h-[2px] w-full bg-foreground" />
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        role="dialog"
        aria-modal={mobileOpen}
        aria-label="Menü"
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-[105] bg-black/95 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="flex h-full flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <a
              href="#"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3"
            >
              <Image
                src={LOGO_SM}
                alt="Otomatik Kaplan"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/20 text-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Menüyü kapat"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>

          <div
            className="mobile-nav-menu flex flex-1 flex-col items-center justify-center gap-8 pb-16"
            data-open={mobileOpen}
          >
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="mobile-nav-link font-sans text-2xl font-bold uppercase tracking-widest text-foreground hover:text-primary"
                style={{ transitionDelay: mobileOpen ? `${index * 50}ms` : "0ms" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
