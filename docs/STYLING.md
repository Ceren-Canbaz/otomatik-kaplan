# Styling Guide

Bu dosya projenin stil sistemini ve CSS efektlerini dokümante eder.

---

## Renk Sistemi

### Design Tokens

Tüm renkler `app/globals.css` içinde CSS custom properties olarak tanımlıdır:

```css
@theme inline {
  --background: #000000;
  --foreground: #fafafa;
  --primary: #E6D200;
  --primary-foreground: #000000;
  --secondary: #1a1a1a;
  --muted: #1a1a1a;
  --muted-foreground: #a1a1a1;
  --accent: #E6D200;
  --border: #2a2a2a;
}
```

### Renk Kullanımı

| Token | Tailwind Class | Kullanım |
|-------|---------------|----------|
| `--background` | `bg-background` | Sayfa arkaplanı |
| `--foreground` | `text-foreground` | Ana metin rengi |
| `--primary` | `bg-primary`, `text-primary` | Vurgu elementleri, CTA |
| `--muted` | `bg-muted` | Kartlar, ikincil alanlar |
| `--muted-foreground` | `text-muted-foreground` | İkincil metin |
| `--border` | `border-border` | Kenarlıklar |

---

## Tipografi

### Font Ailesi

```css
@theme inline {
  --font-sans: 'Space Grotesk', 'Space Grotesk Fallback';
  --font-mono: 'Space Mono', 'Space Mono Fallback';
}
```

### Kullanım

| Font | Class | Kullanım Yeri |
|------|-------|---------------|
| Space Grotesk | `font-sans` | Başlıklar, body text |
| Space Mono | `font-mono` | Navigation, etiketler, tarihler |

### Başlık Stilleri

```tsx
// Ana başlık
<h1 className="font-sans text-5xl md:text-7xl font-bold tracking-tight">

// Section başlığı
<h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tight">

// Alt başlık
<h3 className="font-sans text-xl font-semibold">

// Etiket
<span className="font-mono text-xs uppercase tracking-widest">
```

---

## Animasyonlar

### Grain/Noise Efekti

Film grain efekti için SVG-based noise pattern:

```css
.noise-overlay {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  pointer-events: none;
  z-index: 1000;
  opacity: 0.06;  /* Yoğunluk kontrolü */
  background-image: url("data:image/svg+xml,...");
  animation: grain 0.8s steps(6) infinite;
}

@keyframes grain {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-2%, -2%); }
  20% { transform: translate(2%, 2%); }
  /* ... */
}
```

**Yoğunluk Ayarı:** `opacity` değerini değiştirin (0.03 - 0.15 arası önerilir)

### Glitch Efekti

İki seviyeli glitch animasyonu:

```css
/* Sürekli hafif glitch */
@keyframes glitch-constant {
  0%, 100% { 
    transform: translate(0); 
    filter: brightness(1);
  }
  92% { 
    transform: translate(0); 
  }
  93% { 
    transform: translate(-2px, 1px); 
    filter: brightness(1.1);
  }
  /* ... */
}

/* Hover'da agresif glitch */
@keyframes glitch-aggressive {
  0% { 
    transform: translate(0) skewX(0deg); 
    filter: brightness(1) hue-rotate(0deg);
  }
  20% { 
    transform: translate(-4px, 2px) skewX(-2deg); 
    filter: brightness(1.3) hue-rotate(10deg);
  }
  /* ... */
}
```

### Scanlines

CRT monitor efekti:

```css
.scanlines::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 1px,
    rgba(0, 0, 0, 0.15) 1px,
    rgba(0, 0, 0, 0.15) 2px
  );
  pointer-events: none;
  z-index: 3;
}
```

### Scroll Reveal

Intersection Observer ile tetiklenen animasyonlar:

```css
/* Yukarı kayma */
.scroll-reveal-up {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
}

.scroll-reveal-up.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Soldan kayma */
.scroll-reveal-left {
  opacity: 0;
  transform: translateX(-30px);
}

/* Scale */
.scroll-reveal-scale {
  opacity: 0;
  transform: scale(0.95);
}
```

---

## Özel Efektler

### Duotone Yellow Filter

Fotoğraflara sarı tonlu filtre:

```css
.duotone-yellow {
  position: relative;
}

.duotone-yellow::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom, 
    rgba(230, 210, 0, 0.2), 
    rgba(0, 0, 0, 0.3)
  );
  mix-blend-mode: color;
  pointer-events: none;
  z-index: 2;
}
```

### Photo Grain Overlay

Fotoğraflar üzerinde grain efekti:

```css
.photo-grain::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,...");
  opacity: 0.4;
  mix-blend-mode: overlay;
  pointer-events: none;
  transition: opacity 0.4s ease;
}

.photo-grain:hover::after {
  opacity: 0.1;
}
```

### Vignette

Kenar karartma efekti:

```css
.vignette::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center, 
    transparent 40%, 
    rgba(0, 0, 0, 0.6) 100%
  );
  pointer-events: none;
  z-index: 4;
}
```

---

## Hover Efektleri

### Navigation Link Underline

```css
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--primary);
  transition: width 0.25s ease;
}

.nav-link:hover::after {
  width: 100%;
}
```

### Social Button Platform Colors

```css
.social-btn:hover.spotify {
  border-color: #1DB954;
  color: #1DB954;
  background: rgba(29, 185, 84, 0.05);
}

.social-btn:hover.instagram {
  border-color: #E1306C;
  color: #E1306C;
}

.social-btn:hover.youtube {
  border-color: #FF0000;
  color: #FF0000;
}

.social-btn:hover.soundcloud {
  border-color: #FF5500;
  color: #FF5500;
}
```

### Gallery Item Overlay

```css
.gallery-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 2;
}

.gallery-item:hover::before {
  opacity: 1;
}
```

---

## Responsive Design

### Breakpoints

Tailwind CSS default breakpoints kullanılır:

| Breakpoint | Min Width | Prefix |
|------------|-----------|--------|
| sm | 640px | `sm:` |
| md | 768px | `md:` |
| lg | 1024px | `lg:` |
| xl | 1280px | `xl:` |

### Gallery Grid

```css
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}

@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## Z-Index Katmanları

| Katman | Z-Index | Kullanım |
|--------|---------|----------|
| Background | 0 | Arkaplan görselleri |
| Content | 1-5 | Normal içerik |
| Overlays | 10 | Scanlines, vignette |
| Navigation | 50 | Fixed navbar |
| Mobile Menu | 40 | Fullscreen overlay |
| Noise | 1000 | Grain efekti |

---

## Özelleştirme İpuçları

### Grain Yoğunluğunu Değiştirme

```css
/* Daha az grain */
.noise-overlay {
  opacity: 0.03;
}

/* Daha fazla grain */
.noise-overlay {
  opacity: 0.12;
}
```

### Glitch Hızını Değiştirme

```css
/* Daha yavaş */
.glitch-text {
  animation: glitch-constant 5s ease-in-out infinite;
}

/* Daha hızlı */
.glitch-text {
  animation: glitch-constant 1.5s ease-in-out infinite;
}
```

### Primary Rengi Değiştirme

```css
@theme inline {
  --primary: #FF0000;  /* Kırmızı */
  --accent: #FF0000;
}
```
