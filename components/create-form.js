export default function CreateForm(props){
    return(
        <form onSubmit={props.create} className="bg-green-200 p-3 w-3/4 items-center mx-auto rounded-md">
        <h2 className="font-bold text-3xl text-center pb-4 font-mono">Create Cookie Stand</h2>
        
        <div className="pl-2">
          <li className="flex">
            <label className="font-medium text-xl font-mono"><h3 className="mr-2">Location</h3></label>
            <input name="location" className="flex-auto w-full"/>
          </li>

          <div className="flex">
            <ul className="inline-block">
              </ul>
                <div className="p-4 pt-8 flex space-x-3 w-full">

                <div className="flex w-full space-x-16">
                  <li className="pr-4 flex flex-col">
                    <label className="pb-1 text-lg font-bold font-mono">Minimum Customers per Hour</label>
                    <input name="min"/>
                  </li>

                  <li className="pr-4 flex flex-col">
                    <label className="pb-1 text-lg font-bold font-mono">Maximum Customers per Hour</label>
                    <input name="max"/>
                  </li>

                  <li className="pr-4 flex flex-col w-1/4">
                    <label className="pb-1 text-lg font-bold font-mono">Average Cookies per Sale</label>
                    <input name="avg"/>
                  </li>
                    
                    <button className="font-medium text-xl bg-green-500 w-52 h-16 rounded-md hover:bg-blue-500">Create</button>
                  </div>                
              </div>
          </div>
        </div>
      </form>
    )
}
