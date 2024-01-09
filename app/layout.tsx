import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import './globals.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SF WESTERN EUROPE',
  description: 'SF International Western Europe landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/cka2oek.css" />
      </head>
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>
        
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  )
}
