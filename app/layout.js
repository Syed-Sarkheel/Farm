import { Exo_2 } from 'next/font/google'
import './globals.css'

const inter = Exo_2({ subsets: ['latin'] })

export const metadata = {
  title: 'FarmHub',
  description: 'An app connecting farmers and retailers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
