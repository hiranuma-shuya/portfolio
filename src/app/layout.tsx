import type { Metadata, Viewport } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import { Header } from '~/app/_component/header'
import { Inner } from '~/app/_component/ui'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], variable: '--font-noto-sans-jp' })

export const metadata: Metadata = {
  title: {
    default: '平沼柊哉 | Software Engineer & Project Manager',
    template: '%s | 平沼柊哉',
  },
  description:
    'ITのこと、まるごとお任せください。システム開発・保守運用・業務効率化・AI導入まで、御社のIT担当として幅広くサポートいたします。',
  openGraph: {
    title: {
      default: '平沼柊哉 | Software Engineer & Project Manager',
      template: '%s | 平沼柊哉',
    },
    description:
      'ITのこと、まるごとお任せください。システム開発・保守運用・業務効率化・AI導入まで、御社のIT担当として幅広くサポートいたします。',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: '平沼柊哉',
    images: [
      {
        url: '/img/portfolio.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  generator: 'Next.js',
  keywords: ['システム開発', 'IT支援', '業務効率化', 'DX推進', 'AI導入', 'IT顧問', 'Web開発', '保守運用', '業務委託'],
  authors: [{ name: '平沼柊哉' }],
  creator: '平沼柊哉',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: import('react').ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${notoSansJP.variable} font-sans`}>
        <Header />
        <main className="pt-16">
          <Inner>{children}</Inner>
        </main>
        <footer className="border-t border-slate-200 py-8 mt-20">
          <Inner>
            <p className="text-center text-sm text-slate-400">&copy; 2025 Hiranuma Shuya. All rights reserved.</p>
          </Inner>
        </footer>
      </body>
    </html>
  )
}
