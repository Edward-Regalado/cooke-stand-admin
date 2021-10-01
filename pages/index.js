import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {

  const [cookieData, setCookieData] = useState([])

  function createCookieStand(e) {
    e.preventDefault();
    setCookieData(`{"location": "${e.target.location.value}","minCustomers": ${e.target.min.value},"maxCustomer": ${e.target.max.value}, "avgCookies": ${e.target.avg.value}}`)
  }

  return (
    <div className="bg-green-30">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-between bg-green-500 p-5 mb-10">
        <h1 className="font-bold text-4xl">Cookie Stand Admin</h1>
        <Link href="/about_us">
          <button className="font-bold m-2 bg-white p-2 rounded-md hover:bg-blue-500"href="about_us">About Us</button>
        </Link>
      </header>
      
      <main className="flex flex-col items-center">

      <form onSubmit={createCookieStand} className="bg-green-200 p-3 w-3/4 items-center mx-auto rounded-md">
        <h2 className="font-bold text-3xl text-center pb-4">Create Cookie Stand</h2>
        
        <div className="pl-2">
          <li className="flex">
            <label className="font-medium text-xl">Location</label>
            <input name="location" className="flex-auto w-full"/>
          </li>

          <div className="flex">
            <ul className="inline-block">
              </ul>
                <div className="p-4 pt-8 flex w-full">

                <div className="flex w-full space-x-9">
                  <li className="pr-4 flex flex-col">
                    <label className="pb-1 font-medium text-xl">Minimum Customers per Hour</label>
                    <input name="min"/>
                  </li>

                  <li className="pr-4 flex flex-col">
                    <label className="pb-1 font-medium text-xl">Maximum Customers per Hour</label>
                    <input name="max"/>
                  </li>

                  <li className="pr-4 flex flex-col w-1/4">
                    <label className="pb-1 font-medium text-xl">Average Cookies per Sale</label>
                    <input name="avg"/>
                  </li>
                    
                    <button className="font-medium text-xl bg-green-500 w-52 h-16 rounded-md hover:bg-green-300">Create</button>
                  </div>                
              </div>
          </div>
        </div>
      </form>
        <div className="text-center pt-10">

          <h3 className="w-ful text-lg font-medium">Report Table Coming Soon...</h3>
          <p className="m-8 w-full text-lg font-medium">{cookieData}</p>

        </div>

      </main>

      <footer className="p-4 bg-green-500 mt-8">
        <p>&copy; 2021</p>
      </footer> 

    </div>
  )
}
