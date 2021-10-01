import Link from 'next/link'

export default function About() {
    return (
        <div className="text-center mt-20 p-20 bg-green-500">
            <h1 className="text-5xl">About Us Page Coming Soon!</h1>
            <Link href="/">
                <button className="text-2xl mt-10 p-4 bg-white rounded-md hover:bg-blue-500">Home Page</button>
            </Link>
        </div>
    )
}