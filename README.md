# Otomatik Kaplan - Official Website

Türkiye'nin deneysel elektronik improvizasyon ikilisi **Otomatik Kaplan**'ın resmi web sitesi.

## Grup Hakkında

**Otomatik Kaplan**, 2025 yılında İzmir'de kurulan bir elektronik improvizasyon ikilisidir. Ambient/noise ile tekno arasında gidip gelen, deneysel ney yorumlarını içeren özgün bir ses dünyası yaratırlar.

### Üyeler

- **Bilgekağan Üçok** - Gitar, Synth, Laptop
- **Erkul Eğilmez** - Ney, Vokal, Efekt Pedalları

### İletişim

- **Email:** otomatikkaplan@gmail.com
- **Instagram:** [@otomatikkaplan](https://instagram.com/otomatikkaplan)
- **Spotify:** [Otomatik Kaplan](https://open.spotify.com/artist/otomatikkaplan)

---

## Teknik Dokümantasyon

### Teknoloji Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Fonts:** Space Grotesk (Display), Space Mono (Monospace)
- **Animations:** CSS Keyframes, Intersection Observer API

### Proje Yapısı

```
otomatik-kaplan/
├── app/
│   ├── globals.css          # Global stiller, animasyonlar, efektler
│   ├── layout.tsx           # Root layout, font tanımları, metadata
│   └── page.tsx             # Ana sayfa (tüm sectionlar)
├── components/
│   ├── navigation.tsx       # Fixed navbar (desktop + mobile)
│   ├── scroll-reveal.tsx    # Scroll animasyonu wrapper
│   ├── theme-provider.tsx   # Dark/Light mode provider
│   └── ui/                  # shadcn/ui komponentleri
├── public/
│   └── images/
│       ├── logo.png         # Grup logosu
│       └── banner.png       # Text banner
├── lib/
│   └── utils.ts             # Utility fonksiyonları (cn, vb.)
└── hooks/
    ├── use-mobile.ts        # Mobile detection hook
    └── use-toast.ts         # Toast notification hook
```

---

## Komponent Dokümantasyonu

### 1. Navigation (`components/navigation.tsx`)

Fixed pozisyonlu navbar komponenti.

**Özellikler:**
- Scroll'da şeffaftan solid'e geçiş (60px sonrası)
- Backdrop blur efekti
- Smooth scroll navigation
- Mobile hamburger menu (fullscreen overlay)
- Animated underline hover efekti

**Kullanım:**
```tsx
import { Navigation } from "@/components/navigation"

export default function Page() {
  return (
    <>
      <Navigation />
      {/* Page content */}
    </>
  )
}
```

**Props:** Yok (self-contained)

---

### 2. ScrollReveal (`components/scroll-reveal.tsx`)

Intersection Observer kullanan scroll animasyonu wrapper'ı.

**Özellikler:**
- Viewport'a girince animasyon tetikleme
- Farklı animasyon yönleri (up, left, scale)
- Configurable threshold ve delay

**Props:**
| Prop | Type | Default | Açıklama |
|------|------|---------|----------|
| `children` | `ReactNode` | - | İçerik |
| `className` | `string` | `""` | Ek CSS sınıfları |
| `direction` | `"up" \| "left" \| "scale"` | `"up"` | Animasyon yönü |
| `delay` | `number` | `0` | Gecikme (ms) |
| `threshold` | `number` | `0.1` | Görünürlük eşiği |

**Kullanım:**
```tsx
import { ScrollReveal } from "@/components/scroll-reveal"

<ScrollReveal direction="up" delay={200}>
  <div>Bu içerik scroll'da görünecek</div>
</ScrollReveal>
```

---

## CSS Efektleri (`app/globals.css`)

### Noise/Grain Overlay

```css
.noise-overlay {
  opacity: 0.06;
  animation: grain 0.8s steps(6) infinite;
}
```

Sayfanın üzerinde sürekli hareket eden film grain efekti. `opacity` değeri ayarlanarak yoğunluk kontrol edilebilir.

### Glitch Animasyonu

```css
.glitch-text {
  animation: glitch-constant 3s ease-in-out infinite;
}

.glitch-text:hover {
  animation: glitch-aggressive 0.15s ease-in-out infinite;
}
```

Logo ve başlıklar için sürekli hafif glitch + hover'da agresif glitch.

### Scanlines

```css
.scanlines::before {
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 1px,
    rgba(0, 0, 0, 0.15) 1px,
    rgba(0, 0, 0, 0.15) 2px
  );
}
```

Hero section üzerinde CRT monitor efekti.

### Duotone Yellow

```css
.duotone-yellow::before {
  background: linear-gradient(to bottom, rgba(230, 210, 0, 0.2), rgba(0, 0, 0, 0.3));
  mix-blend-mode: color;
}
```

Fotoğraflara sarı tonlu filtre efekti.

---

## Renk Paleti

| Token | Değer | Kullanım |
|-------|-------|----------|
| `--background` | `#000000` | Ana arkaplan |
| `--foreground` | `#fafafa` | Ana metin |
| `--primary` | `#E6D200` | Vurgu rengi (sarı) |
| `--muted` | `#1a1a1a` | İkincil arkaplan |
| `--muted-foreground` | `#a1a1a1` | İkincil metin |
| `--border` | `#2a2a2a` | Kenarlıklar |

---

## Sayfa Bölümleri

### Hero Section
- Fullscreen background image (duotone yellow filter)
- Animated logo with glitch effect
- Scroll indicator

### About Section (`#about`)
- Grup açıklaması
- Üye profilleri (fotoğraf + bio)

### Albums Section (`#albums`)
- 3 albüm kartı
- Grayscale → color hover efekti
- Spotify linkleri

### Concerts Section (`#concerts`)
- Yaklaşan konserler (bilet butonu)
- Geçmiş konserler (muted style)

### Gallery Section (`#gallery`)
- Masonry grid layout
- Grayscale → color + zoom hover
- Caption overlay

### Videos Section (`#videos`)
- YouTube embed
- Upcoming video placeholder

### Links Section (`#links`)
- Platform-specific hover colors
- Large CTA buttons

### Footer
- Minimal design
- Small logo + social icons
- Copyright

---

## Kurulum

```bash
# Dependencies yükle
pnpm install

# Development server başlat
pnpm dev

# Production build
pnpm build

# Production server başlat
pnpm start
```

---

## Özelleştirme

### Logo Değiştirme
`public/images/logo.png` dosyasını değiştirin.

### Renkleri Değiştirme
`app/globals.css` içindeki `@theme inline` bloğunu düzenleyin:

```css
@theme inline {
  --primary: #YOUR_COLOR;
}
```

### Yeni Bölüm Ekleme
1. `page.tsx`'e yeni section ekleyin
2. `navigation.tsx`'deki `navLinks` array'ine link ekleyin
3. Section'a matching `id` attribute verin

---

## Lisans

Bu proje Otomatik Kaplan için özel olarak geliştirilmiştir.

© 2025 Otomatik Kaplan. Tüm hakları saklıdır.
