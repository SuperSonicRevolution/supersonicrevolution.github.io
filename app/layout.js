import './globals.css'
import { Noto_Sans_TC } from 'next/font/google'
import Head from 'next/head'

const notoSansTc = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['500']
});

export const metadata = {
  title: 'Super Sonic Revolution 歷年跑者資料庫',
  description: 'Super Sonic Revolution 歷年跑者資料庫',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-tw">
      <body className={notoSansTc.className}>{children}</body>
    </html>
  )
}
