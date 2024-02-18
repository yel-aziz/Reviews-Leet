
'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ToastContainer } from 'react-toastify'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const path = usePathname();
  const proceder = "/login";
  const desire = proceder === path;  
  return (
    

    <html lang="en" className=' bg-[#F1F3F5] mb-5'>
      <body>
        <header>
         {!desire && <Navbar />} 
        </header>
      </body>

      <body className={inter.className} >
      <ToastContainer />
        {children}</body>
    </html>
  )
}
