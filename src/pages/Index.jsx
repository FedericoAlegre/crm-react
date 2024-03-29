import { useLoaderData } from "react-router-dom"
import Client from "../components/Client";
import { getClients } from "../data/Clients";

export function loader(){
  const clients = getClients()
  return clients
}

function Index() {

  const clients = useLoaderData()

  return (
    <>
      <h1 className=" font-black text-4xl text-blue-900">Clients</h1>
      <p className="mt-3">Administrate your clients</p>

      {clients.length ? (
        <table className=" rounded-md w-full bg-white shadow mt-5 table-auto">
          <thead className=" bg-blue-800 text-white">
            <tr>
              <th className="p-2">Client</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Accions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map( c =>  (
              <Client client={c}
                key={c.id}/>
            ))}
          </tbody>

        </table>
      ) : (
        <p className="text-center mt-10">No clients</p>
      )}
    </>
  )
}

export default Index
