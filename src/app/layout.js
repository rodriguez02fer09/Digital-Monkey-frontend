// src/app/layout.js
import {Inter} from 'next/font/google'
import Head from 'next/head'
import Header from '../components/shared/header/src/Header.jsx'
import Footer from '../components/shared/footer/src/Footer.jsx'
import '../sass/globals.scss'

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <body className={inter.className}>
        <Header color={'black'} />
        {children}
        <Footer color={'black'} />
      </body>
    </html>
  )
}
