// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { Navbar } from '@/components/layouts/navbar'
import { poppins } from './fonts'
import Footer from '@/components/layouts/Footer'

export const metadata = {
  title: 'My Portfolio',
  description: 'Developer portfolio by Arbaz',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins?.className} suppressHydrationWarning>
      <body className="relative min-h-screen"> {/* padding-bottom = height of footer */}
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

// // app/layout.tsx
// import './globals.css'
// import { ReactNode } from 'react'
// import { ThemeProvider } from 'next-themes'
// import { Navbar } from '@/components/layouts/navbar'
// import { poppins } from './fonts'
// import Footer from '@/components/layouts/Footer'

// // ✅ Metadata required for layout file in app directory
// export const metadata = {
//   title: 'My Portfolio',
//   description: 'Developer portfolio by Arbaz',
// }

// // ✅ Correctly typed layout component
// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en" className={poppins?.className} suppressHydrationWarning>
//       <body>
//         <ThemeProvider attribute="class" enableSystem defaultTheme="system">
//           <Navbar />
//           {/* <NavMenu /> */}
//           <main>{children}</main>
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }