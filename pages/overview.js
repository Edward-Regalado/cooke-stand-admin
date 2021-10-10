import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Overview() {
    
    return (
        <div>
            <Header />
            <div className="flex flex-col place-items-center">
                <h1 className="text-5xl text-center pb-8">Overview Page Coming Soon!</h1>
                <Link href="/">
                    <button className="drop-shadow-lg font-bold m-2 bg-green-500 p-2 rounded-md hover:bg-blue-500 w-44">Home Page</button>
                </Link>
            </div>
            
            <Footer />
        </div>
    )
}