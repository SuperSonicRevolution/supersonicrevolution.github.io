import './globals.css'
// import { Inter } from 'next/font/google'
import Head from 'next/head'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Super Sonic Revolution 歷年跑者資料庫',
  description: 'Super Sonic Revolution 歷年跑者資料庫',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-tw">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
