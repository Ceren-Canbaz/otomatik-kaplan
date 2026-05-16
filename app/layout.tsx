import type { Metadata } from 'next'
import { Space_Grotesk, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { asset } from '@/lib/utils'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans'
})

const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Otomatik Kaplan | Elektronik Dogaclama',
  description: 'Otomatik Kaplan - Ambient, noise ve techno elementlerini birleştiren deneysel elektronik doğaçlama ikilisi. Bilgekağan Üçok ve Erkul Eğilmez.',
  keywords: ['otomatik kaplan', 'elektronik müzik', 'doğaçlama', 'ambient', 'noise', 'techno', 'ney', 'deneysel müzik', 'izmir'],
  authors: [{ name: 'Otomatik Kaplan' }],
  openGraph: {
    title: 'Otomatik Kaplan | Elektronik Dogaclama',
    description: 'Ambient, noise ve techno elementlerini birleştiren deneysel elektronik doğaçlama ikilisi.',
    type: 'website',
    locale: 'tr_TR',
  },
  icons: {
    icon: asset('/images/logo.png'),
    apple: asset('/images/logo.png'),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className="bg-background">
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable} font-sans antialiased`}>
        <div className="noise-overlay" />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
