import { useState } from 'react'
import Table from './report-table'
import Footer from './footer'
import CreateForm from './create-form'
// import Link from 'next/link'

export default function Main(props) {

  const [ cookieData, setCookieData ] = useState([])
  

  function createCookieStand(e) {
    e.preventDefault();
    
    const locationData = {
      location: e.target.location.value,
      min: e.target.min.value,
      max: e.target.max.value,
      avg: e.target.avg.value,
      id: cookieData.length
    }
    
    setCookieData([...cookieData, locationData]);
  }
    return(

        <main className="flex flex-col items-center">
            <CreateForm create={createCookieStand}/>
            {cookieData.length > 0 ? <Table data={cookieData}/> : <h2 className="pt-5 text-xl font-bold font-mono drop-shadow-lg">No Cookie Stands Available</h2>
            }
            <Footer count={cookieData.length}/>
        </main>
    )
}