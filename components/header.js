import Link from 'next/link'
import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource'


export default function Header({username, onLogout}){
  
  const { user, login, logout } = useAuth();
  const { resource, loading, createResource, deleteResource } = useResource();

    return (
      <div className="inline">
          <header className="flex justify-between bg-green-500 p-5 mb-10">
          <h1 className="font-bold text-4xl font-mono drop-shadow-lg">Cookie Stand Admin</h1>
        
          <div className="flex">
            {user ? (
            <div>
              <h2>Welcome { user } </h2>
              <button onClick= { logout } className="font-bold m-2 bg-white p-2 rounded-md hover:bg-blue-500 drop-shadow-lg">Logout</button>
            </div>
      ) : (

            <div>
              <button onClick={() => login(process.env.NEXT_PUBLIC_USERNAME, process.env.NEXT_PUBLIC_PASSWORD)} className="font-bold m-2 bg-white p-2 rounded-md hover:bg-blue-500 drop-shadow-lg">Login</button>
            </div>
      )}
        <Link href="/overview">
          <button className="font-bold m-2 bg-white p-2 rounded-md hover:bg-blue-500 drop-shadow-lg"href="about_us">Overview</button>
        </Link>
          </div>
        </header>
      
      </div>
    )
}