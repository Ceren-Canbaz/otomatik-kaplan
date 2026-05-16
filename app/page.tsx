import Image from "next/image"
import { Instagram } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { ScrollReveal } from "@/components/scroll-reveal"
import { asset, LOGO_HERO, LOGO_SM } from "@/lib/utils"

// Discography — Live at OKHQ (Spotify)
const release = {
  title: "Live at OKHQ",
  meta: "Single · 2025 · 3 parça",
}

const tracks = [
  {
    title: "Fame with Armor",
    subtitle: "Live at OKHQ",
    duration: "8:15",
    spotifyUrl: "https://open.spotify.com/track/24c3W7bDvwwlpKDFRjkuTk",
  },
  {
    title: "Turquoise Conflict",
    subtitle: "Live at OKHQ",
    duration: "7:49",
    spotifyUrl: "https://open.spotify.com/track/08FrmlpF8ryY4zKhobbG7v",
  },
  {
    title: "Steppe",
    subtitle: "Live at OKHQ",
    duration: "7:27",
    spotifyUrl: "https://open.spotify.com/track/47jXlgVLXL2Ea2pQd7xewv",
  },
]

// Upcoming concerts
const upcomingConcerts: { date: string; venue: string; city: string }[] = []

// Past concerts
const pastConcerts = [
  { date: "19 EYL 2025", venue: "Darağac / Audiodar", city: "İzmir" },
]

// Gallery images (optimized WebP in /public/images/photos)
const galleryImages = [
  { src: asset("/images/photos/gallery-sofar.webp"), caption: "Sofar Sounds İzmir · 2025", aspect: "landscape" },
  { src: asset("/images/photos/gallery-erkul.webp"), caption: "Erkul Eğilmez · Ney", aspect: "portrait" },
  { src: asset("/images/photos/gallery-bigo.webp"), caption: "Bilgekağan Üçok · Guitar", aspect: "portrait" },
  { src: asset("/images/photos/gallery-sofar-close.webp"), caption: "Sofar Sounds İzmir · 2025", aspect: "landscape" },
  { src: asset("/images/photos/gallery-duo.webp"), caption: "Live Performance", aspect: "landscape" },
  { src: asset("/images/photos/gallery-bigo2.webp"), caption: "Electronics Setup", aspect: "portrait" },
]

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      {/* Global noise overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <section className="scanlines vignette relative flex min-h-screen flex-col items-center justify-center px-4 py-20">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={asset("/images/photos/hero-bg.webp")}
            alt=""
            fill
            sizes="100vw"
            fetchPriority="low"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="glitch-constant glitch-hover">
            <Image
              src={LOGO_HERO}
              alt="Otomatik Kaplan Logo"
              width={500}
              height={500}
              sizes="(max-width: 768px) 288px, 500px"
              className="w-72 md:w-96 lg:w-[500px]"
              priority
            />
          </div>
          <p className="flicker mt-8 max-w-xl text-center font-mono text-sm uppercase tracking-[0.4em] text-primary">
            Elektronik Doğaçlama İkilisi
          </p>
          <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            İzmir / Türkiye
          </p>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Scroll
            </span>
            <div className="h-12 w-[1px] animate-pulse bg-gradient-to-b from-primary to-transparent" />
          </div>
        </div>
      </section>

      {/* Live Photo Section */}
      <section className="relative overflow-hidden">
        <div className="photo-grain duotone-yellow relative h-[50vh] md:h-[70vh]">
          <Image
            src={asset("/images/photos/live-sofar.webp")}
            alt="Otomatik Kaplan live at Sofar Sounds Izmir"
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
          <div className="absolute bottom-8 left-8 z-10">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              Sofar Sounds İzmir
            </p>
            <p className="mt-1 font-mono text-[10px] text-muted-foreground">
              2025
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative px-4 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="flicker mb-8 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Hakkında
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
              Bin yıllık bir arkadaşlığın sonucu olarak 2025&apos;te doğan Otomatik Kaplan, 
              Bilgekağan Üçok ve Erkul Eğilmez&apos;den oluşan iki kişilik bir elektrikli 
              doğaçlama grubu.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 text-lg leading-relaxed text-foreground/90 md:text-xl">
              İlk canlı performansını Sofar İzmir&apos;de yapan Otomatik Kaplan, türlerin 
              kalıplarına bağlı kalmadan ambient ve noise elementlerinin atmosferik 
              etkisini techno&apos;nun agresif, hipnotik iskeleti üzerine oturtuyor.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="mt-6 text-lg leading-relaxed text-foreground/90 md:text-xl">
              Müziklerini &quot;zamansal kalıplara sığdırmadan&quot; çalan ikili, her performansında 
              bir öncekinden farklıyı, yeniyi keşfetmek için yola çıkıyor.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <div className="mt-12 border-l-2 border-primary/50 pl-6">
              <p className="font-mono text-sm italic text-muted-foreground">
                Klasik Türk müziğinin ağırbaşlı çalgılarından biri olan ney, bu bağlamının 
                hem içinde hem dışında, deneysel bir şekilde grubun geniş sonik paletinin 
                içinde yer alıyor.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Discography Section */}
      <section id="discography" className="relative bg-[#0a0a0a] px-4 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="flicker mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Diskografi
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={50}>
            <p className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
              {release.title}
            </p>
            <p className="mb-10 font-mono text-xs text-muted-foreground">{release.meta}</p>
          </ScrollReveal>

          <div className="flex flex-col gap-1">
            {tracks.map((track, index) => (
              <ScrollReveal key={track.spotifyUrl} delay={index * 80}>
                <a
                  href={track.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="discography-track group flex items-center gap-4 rounded-sm border border-transparent px-3 py-3 transition-all hover:border-primary/30 hover:bg-primary/5"
                >
                  <span className="w-6 shrink-0 text-center font-mono text-sm text-muted-foreground group-hover:text-primary">
                    {index + 1}
                  </span>
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden">
                    <Image
                      src={LOGO_SM}
                      alt={track.title}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium text-foreground group-hover:text-primary">
                      {track.title}
                      <span className="font-normal text-muted-foreground"> — {track.subtitle}</span>
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    {track.duration}
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <a
              href="https://open.spotify.com/artist/otomatikkaplan"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-full items-center justify-center gap-2 border border-primary px-6 py-3 font-mono text-xs uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-background md:w-auto"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              Spotify&apos;da dinle
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Concerts Section */}
      <section id="concerts" className="relative px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="flicker mb-16 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Konserler
            </h2>
          </ScrollReveal>
          
          {upcomingConcerts.length > 0 && (
          <div className="mb-16">
            <ScrollReveal>
              <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-foreground/60">
                Yaklaşan
              </h3>
            </ScrollReveal>
            
            {upcomingConcerts.map((concert, index) => (
              <ScrollReveal key={concert.date + concert.venue} delay={index * 100} direction="left">
                <div className="flex flex-col items-start justify-between gap-4 border-b border-[#1a1a1a] py-6 md:flex-row md:items-center">
                  <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-8">
                    <span className="font-mono text-sm text-primary">{concert.date}</span>
                    <span className="text-lg font-bold text-foreground">{concert.venue}</span>
                    <span className="text-sm text-muted-foreground">{concert.city}</span>
                  </div>
                  <button className="ticket-btn flex items-center gap-2 border border-primary px-4 py-2 font-mono text-xs uppercase tracking-wider text-primary transition-all duration-300 hover:bg-primary hover:text-background">
                    BİLET AL <span className="arrow">→</span>
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
          )}
          
          {/* Past */}
          <div>
            <ScrollReveal>
              <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-[#444]">
                Geçmiş Konserler
              </h3>
            </ScrollReveal>
            
            {pastConcerts.map((concert, index) => (
              <ScrollReveal key={concert.date + concert.venue} delay={index * 100} direction="left">
                <div className="flex flex-col items-start justify-between gap-4 border-b border-[#1a1a1a] py-4 md:flex-row md:items-center">
                  <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-8">
                    <span className="font-mono text-sm text-[#3a3a3a] line-through">{concert.date}</span>
                    <span className="text-[#3a3a3a]">{concert.venue}</span>
                    <span className="text-sm text-[#3a3a3a]">{concert.city}</span>
                  </div>
                  <span className="font-mono text-xs text-[#3a3a3a]">TAMAMLANDI</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative px-4 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="flicker mb-16 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Galeri
            </h2>
          </ScrollReveal>
          
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <ScrollReveal key={image.src} delay={index * 100} direction="scale">
                <div className={`gallery-item photo-grain cursor-pointer ${image.aspect === "portrait" ? "row-span-2" : ""}`}>
                  <Image
                    src={image.src}
                    alt={image.caption}
                    width={800}
                    height={image.aspect === "portrait" ? 1000 : 600}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    className="h-full w-full object-cover grayscale contrast-110 transition-all duration-400 hover:scale-[1.03] hover:grayscale-0"
                  />
                  <div className="caption font-mono text-xs text-foreground/80">
                    {image.caption}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kayıtlar Section */}
      <section id="kayitlar" className="relative bg-[#050505] px-4 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="flicker mb-16 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Kayıtlar
            </h2>
          </ScrollReveal>
          
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal delay={0}>
              <div className="group border border-[#1a1a1a] transition-colors duration-300 hover:border-primary">
                <div className="relative aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/7wvAvDBZAO8"
                    title="Otomatik Kaplan - Sofar Sounds İzmir"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full border-none"
                  />
                </div>
                <p className="p-4 font-mono text-xs text-muted-foreground">
                  Sofar Sounds İzmir · 2025
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <div className="group border border-[#1a1a1a] transition-colors duration-300 hover:border-primary">
                <div className="relative flex aspect-video items-center justify-center bg-[#111]">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">YAKINDA</p>
                    <p className="mt-2 font-mono text-xs text-muted-foreground">
                      Yeni kayıt geliyor...
                    </p>
                  </div>
                </div>
                <p className="p-4 font-mono text-xs text-muted-foreground">
                  Çok Yakında
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="relative px-4 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="flicker mb-16 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Üyeler
            </h2>
          </ScrollReveal>
          
          <div className="grid gap-8 md:grid-cols-2 md:gap-6 lg:gap-8">
            {/* Bilgekagan */}
            <ScrollReveal delay={0}>
              <div className="group">
                <div className="photo-grain relative mb-6 aspect-[4/5] overflow-hidden">
                  <Image
                    src={asset("/images/photos/gallery-bigo.webp")}
                    alt="Bilgekağan Üçok performing with guitar and electronics"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                </div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                    Bilgekağan Üçok
                  </h3>
                  <p className="mt-1 font-mono text-xs text-primary">
                    Electronics / Guitar
                  </p>
                  <p className="font-mono text-[10px] text-muted-foreground">
                    1993, İzmir
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-foreground/70">
                  Müzik, resim gibi geleneksel sanat disiplinlerinin yanı sıra elektrikli 
                  gitar imalatı ve deneysel çalgı yapımla ilgilenir. Üretimlerinde genellikle 
                  doğaçlama ve deneyi ön planda tutar.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  2021&apos;de ambient, noise, experimental electronic etiketlerini taşıyan 
                  albümü YN.HR.#1 ve 2022&apos;de onu takip eden YN.HR.#2&apos;yi yayınladı. 
                  2022 yılından beri Türkiye&apos;nin en eski serbest doğaçlama grubu olan 
                  Çatı 1972 ile aktif olarak sahne almaktadır.
                </p>
                <a 
                  href="https://instagram.com/bilgekaganucok" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary transition-all hover:tracking-[0.2em]"
                >
                  <Instagram className="h-4 w-4" />
                  @bilgekaganucok
                </a>
              </div>
            </ScrollReveal>

            {/* Erkul */}
            <ScrollReveal delay={100}>
              <div className="group">
                <div className="photo-grain relative mb-6 aspect-[4/5] overflow-hidden">
                  <Image
                    src={asset("/images/photos/gallery-erkul.webp")}
                    alt="Erkul Eğilmez performing with ney"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                </div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                    Erkul Eğilmez
                  </h3>
                  <p className="mt-1 font-mono text-xs text-primary">
                    Ney / Experimental Wind
                  </p>
                  <p className="font-mono text-[10px] text-muted-foreground">
                    1994, Eskişehir
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-foreground/70">
                  2006 yılında Ferhan Şensoy ile tanıştıktan sonra tiyatro yapmaya başladı. 
                  Aklının ve yüreğinin derinliklerine 2015&apos;te ney ile inmeyi öğrendi. 
                  2019&apos;da SiyaSiyabend ile çalmaya başladı.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  2021&apos;de Ege Üniversitesi Devlet Türk Musikisi Konservatuvarında eğitim 
                  almaya başladı. 2024 yılında neyin Klasik Türk Müziği dışında da yer 
                  bulabileceğini ispat etmek istediği &quot;Suveyda&quot; isimli bir dinleti 
                  düzenlemeye karar verdi.
                </p>
                <a 
                  href="https://instagram.com/erkulegilmez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary transition-all hover:tracking-[0.2em]"
                >
                  <Instagram className="h-4 w-4" />
                  @erkulegilmez
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section id="links" className="relative bg-[#080808] px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="mb-16 font-sans text-3xl font-bold text-foreground md:text-4xl">
              DİNLE & TAKİP ET
            </h2>
          </ScrollReveal>
          
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <ScrollReveal delay={0} direction="scale">
              <a 
                href="https://open.spotify.com/artist/otomatikkaplan" 
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn spotify flex w-full items-center justify-center gap-3 border border-[#2a2a2a] px-10 py-6 font-mono text-sm uppercase tracking-[0.1em] text-foreground/80 transition-all md:w-auto"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Spotify
              </a>
            </ScrollReveal>
            
            <ScrollReveal delay={100} direction="scale">
              <a 
                href="https://www.instagram.com/otomatikkaplan" 
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn instagram flex w-full items-center justify-center gap-3 border border-[#2a2a2a] px-10 py-6 font-mono text-sm uppercase tracking-[0.1em] text-foreground/80 transition-all md:w-auto"
              >
                <Instagram className="h-6 w-6" />
                Instagram
              </a>
            </ScrollReveal>
            
            <ScrollReveal delay={200} direction="scale">
              <a 
                href="https://www.youtube.com/@OtomatikKaplan" 
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn youtube flex w-full items-center justify-center gap-3 border border-[#2a2a2a] px-10 py-6 font-mono text-sm uppercase tracking-[0.1em] text-foreground/80 transition-all md:w-auto"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] bg-[#020202] px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src={LOGO_SM}
                alt="Otomatik Kaplan"
                width={32}
                height={32}
                className="h-8 w-auto opacity-60"
              />
              <span className="font-sans text-sm tracking-wider text-[#555]">
                OTOMATİK KAPLAN
              </span>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a href="https://www.instagram.com/otomatikkaplan" target="_blank" rel="noopener noreferrer" className="text-[#333] transition-colors hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@OtomatikKaplan" target="_blank" rel="noopener noreferrer" className="text-[#333] transition-colors hover:text-primary">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            
            {/* Copyright */}
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#333]">
              © 2025 Otomatik Kaplan · İzmir, Türkiye
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
