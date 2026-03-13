'use client'

import Link from 'next/link'
import { Inner } from '~/app/_component/ui'

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Plans', href: '/#plans' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Career', href: '/#career' },
]

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      <Inner>
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="text-navy-500 font-bold text-lg tracking-wide">
            Hiranuma Shuya
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-600 hover:text-navy-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/contact"
              className="text-sm bg-navy-500 text-white px-4 py-2 rounded-lg hover:bg-navy-600 transition-colors"
            >
              お問い合わせ
            </Link>
          </nav>
          <Link
            href="/contact"
            className="md:hidden text-sm bg-navy-500 text-white px-4 py-2 rounded-lg hover:bg-navy-600 transition-colors"
          >
            お問い合わせ
          </Link>
        </div>
      </Inner>
    </header>
  )
}
