import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

export default function About() {
    return (
        <div>
            <Header />
            <h1 className="text-5xl">About Us Page Coming Soon!</h1>
            <Link href="/">
                <button className="text-2xl mt-10 p-4 bg-white rounded-md hover:bg-blue-500">Home Page</button>
            </Link>
            <Footer />
        </div>
    )
}