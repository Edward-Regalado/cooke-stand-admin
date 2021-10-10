import { hours, hourly_sales } from '../data'

export default function Table(props){
    
    // const h = hours;
    // const hs = hourly_sales;
    // const total = 0;
    // const header = hours.map(item => { return(item)})
    // var table = document.getElementById("myTable")
    // total = 0
    // for (var i = 1; i < table.)
    
    return(
        <table className="tableRow m-8 w-3/4 bg-green-500" id="myTable">
          <thead>
            <tr className="odd:bg-green-500">
              <th>Location</th>
              {hours.map(item => {
                  return(<th id=''>{item}</th>
              )})}
              <th>Totals</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map(item => {
              return(
                <tr className="odd:bg-green-400 even:bg-green-300 border border-gray-700">
                    <td className="border border-gray-700 text-center font-bold capitalize p-1">{item.location}</td>
                    {hourly_sales.map(item => {
                        return(<td className="text-center border border-gray-700">{item}</td>)
                    })}
                    {/* <td>{item.id}</td>
                    <td>{item.avg}</td> */}
                    {/* <td className="border border-gray-700">{data.min}</td>
                    <td className="border border-gray-700">{item.max}</td>
                    <td className="border border-gray-700">{item.avg}</td> */}
                </tr>)
            })}

          </tbody>
          <tfoot>
              <tr className="bg-green-500 border border-gray-700 text-center font-bold">Totals</tr>
          </tfoot>
        </table>
    )
}