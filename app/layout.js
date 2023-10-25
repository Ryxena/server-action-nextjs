import './globals.css'
import { Montserrat } from 'next/font/google'

const inter = Montserrat({ subsets: ['latin'], weight: "400" })

export const metadata = {
  title: 'No refresh',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
