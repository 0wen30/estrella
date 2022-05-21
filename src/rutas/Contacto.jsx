import contacto from "../img/contacto.jpg"

const Contacto = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white bg-opacity-80 p-4 h-full">
      <img
        className="w-full pb-4"
        src={contacto}
        alt="imagen_bienvenida"
      />
      <h3 className="pt-2 pb-6">Puedes enviarnos tus comentarios desde aquí</h3>
      <form className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <div className="w-full p-1">
            <label className="block w-full md:inline-block md:w-2/6" htmlFor="nombre">Nombre:</label>
            <input className="block w-full md:inline-block md:w-4/6" name='nombre' type="text" />
          </div>
          <div className="w-full p-1">
            <label className="block w-full md:inline-block md:w-2/6" htmlFor="direccion">Dirección:</label>
            <input className="block w-full md:inline-block md:w-4/6" name='direccion' type="text" />
          </div>
          <div className="w-full p-1">
            <label className="block w-full md:inline-block md:w-2/6" htmlFor="telefono">Telefono:</label>
            <input className="block w-full md:inline-block md:w-4/6" name='telefono' type="text" />
          </div>
          <div className="w-full p-1">
            <label className="block w-full md:inline-block md:w-2/6" htmlFor="email">Email:</label>
            <input className="block w-full md:inline-block md:w-4/6" name='email' type="text" />
          </div>
          <div className="w-full p-1">
            <label className="block w-full md:inline-block md:w-2/6" htmlFor="ciudad">Ciudad:</label>
            <input className="block w-full md:inline-block md:w-4/6" name='ciudad' type="text" />
          </div>
          <div className="w-full p-1">
            <label className="block w-full md:inline-block md:w-2/6" htmlFor="estado">Estado</label>
            <input className="block w-full md:inline-block md:w-4/6" name='estado' type="text" />
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="flex flex-col mb-4">
            <label htmlFor="comentarios">Comentarios:</label>
            <textarea className="grow h-32" name='comentarios' />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 py-4 justify-around">
            <button>Enviar</button>
            <button>Limpiar</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contacto