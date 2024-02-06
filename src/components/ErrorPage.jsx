import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError()

    return(
        <div className="space-y-8">
            <h1 className=" text-center text-6xl font-extrabold mt-20 text-blue-900">CRM - Clients</h1>
            <p className=" text-center"><span className=" font-bold text-red-600">Error: {" "} </span> {error.message || error.statusText}</p>
        </div>
    )
}