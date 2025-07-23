// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { Navbar } from '@/components/layouts/navbar'
import { poppins } from './fonts'

// ✅ Metadata required for layout file in app directory
export const metadata = {
  title: 'My Portfolio',
  description: 'Developer portfolio by Arbaz',
}

// ✅ Correctly typed layout component
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins?.className} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Navbar />
          {/* <NavMenu /> */}
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}