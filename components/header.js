import Link from 'next/link'

export default function Header(){
    return (
        <header className="flex justify-between bg-green-500 p-5 mb-10">
        <h1 className="font-bold text-4xl font-mono drop-shadow-lg">Cookie Stand Admin</h1>
        <Link href="/overview">
          <button className="font-bold m-2 bg-white p-2 rounded-md hover:bg-blue-500 drop-shadow-lg"href="about_us">Overview</button>
        </Link>
      </header>
    )
}