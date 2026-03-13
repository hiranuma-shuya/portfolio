import Link from 'next/link'
import type React from 'react'
import { tv } from 'tailwind-variants'
import { Spinner } from './spinner'

export const ButtonVariants = tv({
  base: 'px-3 py-2 rounded-lg inline-block text-center flex items-center justify-center',
  variants: {
    size: {
      base: 'w-full max-w-[140px] md:max-w-[200px]',
    },
    variant: {
      base: 'bg-navy-500 text-white font-semibold hover:bg-navy-600 transition-all duration-300',
      subtle: 'bg-navy-50 text-navy-500 hover:bg-navy-100 transition-all duration-300',
    },
  },
})

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
  size?: 'base'
  variant?: 'base'
  href?: string
  target?: string
  isLoading?: boolean
}

export const Button: React.FC<Props> = ({
  children,
  className,
  size = 'base',
  variant = 'base',
  href = '',
  target = '',
  isLoading = false,
  ...buttonProps
}) => {
  return href ? (
    <Link href={href} target={target} className={ButtonVariants({ size, variant, className })}>
      {children}
    </Link>
  ) : (
    <button {...buttonProps} className={ButtonVariants({ size, variant, className })}>
      {isLoading && <Spinner />}
      {children}
    </button>
  )
}
