import { getClient, updateClient } from "../data/Clients"
import { useNavigate, Form , useLoaderData, useActionData, redirect} from "react-router-dom"
import Formu from "../components/Formu.jsx"
import Error from "../components/Error.jsx"

export async function loader({params}){
    const client = await getClient(params.clienteId)
    if(Object.values(client).length == 0){
        throw new Response("", {
            status: 400,
            statusText: `The client with ID ${params.clienteId} does not exist`
        })
    }
    return client

}

export async function action({request, params}) {
  console.log("fede: "+ params)
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const errors = []
  //Validation
  if(Object.values(data).includes('')){
    errors.push('All fields are required')
  }
  
  if(Object.keys(errors).length){
    return errors
  }
  

  await updateClient(params.clienteId, data)
  return redirect('/')
}

function EditClient() {
  const navigate = useNavigate()
  const client = useLoaderData()
  const errors = useActionData()

  return (
    <>
      <h1 className=" font-black text-4xl text-blue-900">Edit Client</h1>
      <p className="mt-3">Complete all fields to update an existint client</p> 

      <div className="flex justify-end">
        <button className=" rounded-3xl bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}>
          back
        </button>
      </div> 
      <div className=" mt-20 bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
      {errors?.length && errors.map((error, i) => <Error key={i}>{error}</Error>)}
        <Form
          method="post"         
          
          >
            <Formu
              client={client}/>
            <input 
              type="submit"
              className=" mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg rounded-3xl"
              value="Save changes"/>
        </Form>
      </div>    
    </>
  )
}

export default EditClient
