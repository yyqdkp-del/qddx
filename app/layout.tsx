import type { Metadata, Viewport } from 'next'
import { Noto_Serif_SC } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const notoSerifSC = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-serif-sc',
})

export const metadata: Metadata = {
  title: '青岛市道教协会 - 弘道扬德 济世利人',
  description: '青岛市道教协会官方网站，致力于弘扬道教文化、促进道教事业健康发展，服务社会、利益人群。',
  keywords: '青岛道教,道教协会,崂山太清宫,道教文化,道观',
}

export const viewport: Viewport = {
  themeColor: '#2D5A3D',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${notoSerifSC.variable} font-sans antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}
