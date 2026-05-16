import { execSync } from "node:child_process"
import { existsSync, unlinkSync } from "node:fs"
import { join } from "node:path"

const PHOTOS = "public/images/photos"
const IMAGES = "public/images"

const jobs = [
  { in: `${IMAGES}/logo.png`, out: `${IMAGES}/logo.webp`, max: 400, q: 85 },
  { in: `${IMAGES}/logo.png`, out: `${IMAGES}/logo-sm.webp`, max: 128, q: 78 },
  { in: `${PHOTOS}/hero-bg.webp`, out: `${PHOTOS}/hero-bg.webp`, max: 1200, q: 62 },
  { in: `${PHOTOS}/live-sofar.webp`, out: `${PHOTOS}/live-sofar.webp`, max: 1400, q: 72 },
  { in: `${PHOTOS}/gallery-sofar.webp`, out: `${PHOTOS}/gallery-sofar.webp`, max: 900, q: 72 },
  { in: `${PHOTOS}/gallery-sofar-close.webp`, out: `${PHOTOS}/gallery-sofar-close.webp`, max: 900, q: 72 },
  { in: `${PHOTOS}/gallery-duo.webp`, out: `${PHOTOS}/gallery-duo.webp`, max: 900, q: 70 },
  { in: `${PHOTOS}/gallery-erkul.webp`, out: `${PHOTOS}/gallery-erkul.webp`, max: 700, q: 72 },
  { in: `${PHOTOS}/gallery-bigo.webp`, out: `${PHOTOS}/gallery-bigo.webp`, max: 700, q: 72 },
  { in: `${PHOTOS}/gallery-bigo2.webp`, out: `${PHOTOS}/gallery-bigo2.webp`, max: 700, q: 72 },
]

function kb(path) {
  return (Number(execSync(`stat -f%z "${path}"`).toString().trim()) / 1024).toFixed(0)
}

function toJpegSource(input) {
  if (input.endsWith(".webp")) {
    const png = `${input}.src.png`
    execSync(`dwebp "${input}" -o "${png}"`, { stdio: "pipe" })
    return png
  }
  return input
}

for (const { in: input, out, max, q } of jobs) {
  if (!existsSync(input)) {
    console.warn(`skip (missing): ${input}`)
    continue
  }
  const src = toJpegSource(input)
  const resized = `${out}.resize.jpg`
  const tmp = `${out}.tmp.webp`
  execSync(`sips -Z ${max} "${src}" --out "${resized}"`, { stdio: "pipe" })
  execSync(`cwebp -q ${q} "${resized}" -o "${tmp}"`, { stdio: "pipe" })
  execSync(`mv "${tmp}" "${out}"`, { stdio: "pipe" })
  unlinkSync(resized)
  if (src !== input) unlinkSync(src)
  console.log(`✓ ${out} (${kb(out)} KB)`)
}

console.log("\n", execSync(`du -sh ${PHOTOS} ${IMAGES}`).toString())
