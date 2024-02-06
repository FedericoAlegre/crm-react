
function Formu({client}) {
  return (
    <>
        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="nombre"
            >Name:</label>
            <input 
                id="nombre"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Nombre del Cliente"
                name="nombre"
                defaultValue={client?.nombre}
            />
        </div>
        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="empresa"
            >Company:</label>
            <input 
                id="empresa"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Client's company"
                name="empresa"
                defaultValue={client?.empresa}
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="email"
            >E-mail:</label>
            <input 
                id="email"
                type="email"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Client's email"
                name="email"
                defaultValue={client?.email}
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="telefono"
            >Phone:</label>
            <input 
                id="telefono"
                type="tel"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Client's phone"
                name="telefono"
                defaultValue={client?.telefono}
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="notas"
            >Notes:</label>
            <textarea
                as="textarea"
                id="notas"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                placeholder="Client's notes"
                name="notas"
                defaultValue={client?.notas}
            />
        </div>
    </>
  )
}

export default Formu
