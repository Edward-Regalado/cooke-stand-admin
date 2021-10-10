import Head from 'next/head'
import { useState } from 'react'
// import { useAuth, AuthProvider } from '../contexts/auth'
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'
import LoginForm from '../components/login-form'
import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'

export default function Home() {
  
  const { user, login, logout } = useAuth();
  const { resources, loading, createResource, deleteResource } = useResource();

  return (
    <div className="bg-green-30">
      <Head>
        <title>Cookie Stand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <LoginForm />
    </div>
  )
}

function StandList () {

}
