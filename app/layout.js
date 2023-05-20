import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Super Sonic Revolution 歷年跑者資料庫',
  description: 'Super Sonic Revolution 歷年跑者資料庫',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-tw">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
