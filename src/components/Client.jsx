import { useNavigate, Form, redirect } from "react-router-dom"
import { deleteClient } from "../data/Clients"
export async function action({params}){
    await deleteClient(params.clientId)
    return redirect('/')

}

function Client({client}) {
    const navigate = useNavigate()
  return (
    <tr className="border-b">
        <td className="p-6 space-y-2">
            <p className=" text-2xl text-gray-800">{client.nombre}</p>
            <p>{client.empresa}</p>
        </td>
        <td className="p-6 space-y-2">
            <p className=" text-2xl text-gray-800"><span className=" text-gray-800 uppercase font-bold">Email: </span>{client.email}</p>
            <p className=" text-2xl text-gray-800"><span className=" text-gray-800 uppercase font-bold">telefono: </span>{client.telefono}</p>
        </td>
        <td className="p-6 flex gap-3">
            <button 
                type="button"
                className=" p-2 rounded-3xl text-blue-600 hover:bg-blue-600 hover:text-white uppercase font-bold "
                onClick={() => navigate(`/clients/${client.id}/edit`)}>
                    edit
            </button>
            <Form
             method="post"
             action={`/clients/${client.id}/delete`}
             onSubmit={(e)=>{
                if(!confirm("Are you sure?")){                    
                    e.preventDefault()                    
                }
             }}>
                <button 
                    type="submit"
                    className=" p-2 rounded-3xl text-red-600 hover:bg-red-600 hover:text-white uppercase font-bold ">
                        delete
                </button>
            </Form>                      
        </td>
    </tr>
  )
}

export default Client
