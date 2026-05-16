import { mkdir, writeFile } from "node:fs/promises"
import { execSync } from "node:child_process"
import { join } from "node:path"

const OUT = "public/images/photos"
const TMP = ".tmp-images"

const images = [
  {
    name: "hero-bg",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blackandyellow.JPG-dzn1NVwcrzlO7CfrD7JbcB0YJkUD9r.jpeg",
    maxWidth: 1400,
    quality: 72,
  },
  {
    name: "live-sofar",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/colorized-sofar.JPG-ktXFvHXWzojC3bdIxKpBeE9iUD3uzO.jpeg",
    maxWidth: 1600,
    quality: 82,
  },
  {
    name: "gallery-sofar",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/colorized-sofar.JPG-ktXFvHXWzojC3bdIxKpBeE9iUD3uzO.jpeg",
    maxWidth: 1200,
    quality: 80,
  },
  {
    name: "gallery-erkul",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bw-erkul-9ADeylaxtrUpeW1px0KuQEv1uQcewv.jpeg",
    maxWidth: 900,
    quality: 80,
  },
  {
    name: "gallery-bigo",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bw-bigo-ebMZwG7Ftnt22wwh7pGK3O3QoYVlZc.jpeg",
    maxWidth: 900,
    quality: 80,
  },
  {
    name: "gallery-sofar-close",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/colorized-sofar-close-shot.JPG-BVqi2t87DJkLoDZE30tjtNAGzsgbdt.jpeg",
    maxWidth: 1200,
    quality: 80,
  },
  {
    name: "gallery-duo",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bw-erkul-bigo-2-FhxUmJpgD3yTs47jPH0DJtUmyqoJyW.jpeg",
    maxWidth: 1200,
    quality: 80,
  },
  {
    name: "gallery-bigo2",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bw-bigo2-KIuq4GK7hfGrldDqsblk48prfeoNZb.jpeg",
    maxWidth: 900,
    quality: 80,
  },
]

await mkdir(OUT, { recursive: true })
await mkdir(TMP, { recursive: true })

for (const img of images) {
  const raw = join(TMP, `${img.name}.jpg`)
  const resized = join(TMP, `${img.name}-resized.jpg`)
  const out = join(OUT, `${img.name}.webp`)

  console.log(`→ ${img.name}`)
  execSync(`curl -fsSL "${img.url}" -o "${raw}"`, { stdio: "inherit" })
  execSync(`sips -Z ${img.maxWidth} "${raw}" --out "${resized}"`, { stdio: "inherit" })
  execSync(`cwebp -q ${img.quality} "${resized}" -o "${out}"`, { stdio: "inherit" })

  const size = execSync(`stat -f%z "${out}"`).toString().trim()
  console.log(`  ✓ ${out} (${(Number(size) / 1024).toFixed(0)} KB)\n`)
}

// Optimize logo
const logoOut = "public/images/logo.webp"
execSync(`cwebp -q 90 public/images/logo.png -o ${logoOut}`, { stdio: "inherit" })
console.log("✓ logo.webp")
