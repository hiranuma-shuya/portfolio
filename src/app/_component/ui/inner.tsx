import type { ReactNode } from 'react'

export const Inner = ({ children }: { children: ReactNode }) => {
  return <div className="container px-4 mx-auto max-w-screen-lg">{children}</div>
}
