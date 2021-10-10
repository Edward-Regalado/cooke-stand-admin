export default function Footer({ count }) {

    return(
        <footer className="flex p-4 bg-green-500 mt-8 w-full text-center">
            <h2 className="font-mono text-3xl ml-2 drop-shadow-lg">{count} Locations World wide</h2>
        </footer> 
    )
}