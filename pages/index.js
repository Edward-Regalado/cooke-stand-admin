import Head from 'next/head'
// import Link from 'next/link'
import { useState } from 'react'
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'

export default function Home() {

  return (
    <div className="bg-green-30">
      <Head>
        <title>Cookie Stand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      
    </div>
  )
}
