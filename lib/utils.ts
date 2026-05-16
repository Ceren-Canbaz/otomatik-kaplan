import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Prefix public asset paths for GitHub Pages basePath (e.g. /otomatik-kaplan) */
export function asset(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${base}${normalized}`
}

export const LOGO_HERO = asset("/images/logo.webp")
export const LOGO_SM = asset("/images/logo-sm.webp")
