import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Barlow_Condensed, DM_Mono, DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const barlowCondensed = Barlow_Condensed({ subsets: ['latin'], variable: '--font-barlow-condensed', weight: ['400', '500', '600', '700', '800', '900'] })
const dmMono = DM_Mono({ subsets: ['latin'], variable: '--font-dm-mono', weight: ['400', '500'] })

export const metadata: Metadata = {
  title: 'Peña Madridista Baku | Hala Madrid y nada más',
  description: 'The first official Real Madrid Peña in Azerbaijan. A home for every Madridista in Baku since 2007.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#101114',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${dmSans.variable} ${barlowCondensed.variable} ${dmMono.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
