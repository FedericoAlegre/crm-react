import { useNavigate, Form , useActionData, redirect} from "react-router-dom"
import Formu from "../components/Formu.jsx"
import Error from "../components/Error.jsx"
import { addClient } from "../data/Clients.jsx"
export async function action(request){
  const formData = await request.request.formData()
  const data = Object.fromEntries(formData)
  const errors = []
  //Validation
  if(Object.values(data).includes('')){
    errors.push('All fields are required')
  }
  
  if(Object.keys(errors).length){
    return errors
  }

  await addClient(data)
  return redirect('/')
}

function NewClient() {

  const errors = useActionData()
  const navigate = useNavigate()

  return (
    <>
      <h1 className=" font-black text-4xl text-blue-900">New Client</h1>
      <p className="mt-3">Complete all fields to register a new client</p> 

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
            <Formu/>
            <input 
              type="submit"
              className=" mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg rounded-3xl"
              value="register client"/>
        </Form>
      </div>    
    </>
  )
}

export default NewClient

