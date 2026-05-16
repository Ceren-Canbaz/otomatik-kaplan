# Components Documentation

Bu dosya projedeki custom komponentlerin detaylı dokümantasyonunu içerir.

---

## Navigation Component

**Dosya:** `components/navigation.tsx`

### Açıklama
Sayfanın üst kısmında sabit duran (fixed) navigation bar komponenti. Scroll durumuna göre görünümü değişir ve mobil cihazlarda hamburger menüye dönüşür.

### Özellikler

1. **Scroll Detection**
   - 60px'den az scroll: Şeffaf arkaplan
   - 60px'den fazla scroll: Siyah arkaplan + blur efekti

2. **Smooth Scroll**
   - Tüm navigation linkleri smooth scroll kullanır
   - Navbar yüksekliği hesaba katılır (64px offset)

3. **Mobile Menu**
   - Hamburger icon → X icon animasyonu
   - Fullscreen overlay
   - Staggered link animasyonları

### State

```typescript
const [scrolled, setScrolled] = useState(false)    // Scroll durumu
const [mobileOpen, setMobileOpen] = useState(false) // Mobile menu durumu
```

### Fonksiyonlar

```typescript
// Smooth scroll handler
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
```

### Navigation Links

```typescript
const navLinks = [
  { href: "#about", label: "HAKKİNDA" },
  { href: "#albums", label: "ALBÜMLER" },
  { href: "#concerts", label: "KONSERLER" },
  { href: "#gallery", label: "GALERİ" },
  { href: "#videos", label: "VİDEOLAR" },
  { href: "#links", label: "LİNKLER" },
]
```

### Styling Classes

| Class | Açıklama |
|-------|----------|
| `nav-link` | Desktop link stili, hover underline efekti |
| `backdrop-blur-md` | Scroll sonrası blur efekti |
| `transition-all duration-300` | Smooth geçişler |

---

## ScrollReveal Component

**Dosya:** `components/scroll-reveal.tsx`

### Açıklama
Intersection Observer API kullanan wrapper komponenti. İçerik viewport'a girdiğinde animasyonlu şekilde görünür hale gelir.

### Props Interface

```typescript
interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "left" | "scale"
  delay?: number
  threshold?: number
}
```

### Prop Detayları

| Prop | Type | Default | Açıklama |
|------|------|---------|----------|
| `children` | `ReactNode` | required | Animasyonlanacak içerik |
| `className` | `string` | `""` | Ek Tailwind sınıfları |
| `direction` | `string` | `"up"` | Animasyon yönü |
| `delay` | `number` | `0` | Başlangıç gecikmesi (ms) |
| `threshold` | `number` | `0.1` | Ne kadar görününce tetikleneceği (0-1) |

### Animasyon Tipleri

1. **up** - Aşağıdan yukarı kayarak gelir
   ```css
   transform: translateY(50px) → translateY(0)
   ```

2. **left** - Soldan sağa kayarak gelir
   ```css
   transform: translateX(-30px) → translateX(0)
   ```

3. **scale** - Küçükten büyüğe ölçeklenir
   ```css
   transform: scale(0.95) → scale(1)
   ```

### Kullanım Örnekleri

```tsx
// Basit kullanım
<ScrollReveal>
  <h2>Başlık</h2>
</ScrollReveal>

// Delay ile
<ScrollReveal delay={200}>
  <p>200ms sonra görünecek</p>
</ScrollReveal>

// Farklı yön
<ScrollReveal direction="left" delay={100}>
  <Card>Soldan gelecek</Card>
</ScrollReveal>

// Scale efekti
<ScrollReveal direction="scale" threshold={0.2}>
  <Image src="..." />
</ScrollReveal>
```

### CSS Classes

```css
.scroll-reveal-up {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
}

.scroll-reveal-up.revealed {
  opacity: 1;
  transform: translateY(0);
}
```

---

## Theme Provider Component

**Dosya:** `components/theme-provider.tsx`

### Açıklama
next-themes kütüphanesini kullanarak dark/light mode desteği sağlar. Bu projede varsayılan olarak dark mode kullanılmaktadır.

### Kullanım

```tsx
// layout.tsx
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

---

## UI Components (shadcn/ui)

Projede kullanılan shadcn/ui komponentleri `components/ui/` dizininde bulunur.

### Kullanılan Komponentler

| Komponent | Kullanım Yeri |
|-----------|---------------|
| `Button` | CTA butonları, social linkler |
| `Card` | Albüm kartları, video kartları |
| `Separator` | Bölüm ayırıcıları |

### Button Variants

```tsx
// Primary (sarı)
<Button className="bg-primary text-background">
  Bilet Al
</Button>

// Outline
<Button variant="outline" className="border-primary/50">
  Spotify'da Dinle
</Button>

// Ghost
<Button variant="ghost">
  Daha Fazla
</Button>
```

---

## Utility Functions

**Dosya:** `lib/utils.ts`

### cn()

Tailwind sınıflarını birleştirmek için utility fonksiyonu.

```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**Kullanım:**
```tsx
<div className={cn(
  "base-class",
  isActive && "active-class",
  variant === "large" && "text-xl"
)}>
```

---

## Custom Hooks

### useMobile

**Dosya:** `hooks/use-mobile.ts`

Ekran genişliğine göre mobil cihaz tespiti yapar.

```typescript
import { useIsMobile } from "@/hooks/use-mobile"

function Component() {
  const isMobile = useIsMobile()
  
  return isMobile ? <MobileView /> : <DesktopView />
}
```

### useToast

**Dosya:** `hooks/use-toast.ts`

Toast bildirimleri için hook.

```typescript
import { useToast } from "@/hooks/use-toast"

function Component() {
  const { toast } = useToast()
  
  const handleClick = () => {
    toast({
      title: "Başarılı!",
      description: "İşlem tamamlandı.",
    })
  }
}
```
