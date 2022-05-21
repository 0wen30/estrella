import home from "../img/home.jpg"

const Home = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white bg-opacity-80 p-4 h-full">
        <img
          className="w-full pb-4"
          src={home} 
          alt="imagen_bienvenida" 
        />
        <p className="md:max-w-3xl m-auto">
        Transportadora Estrella, s.a. de c.v. nace como sociedad, el 8 de junio de 1987, teniendo como antecedente inmediato la empresa "Transportes Cargueros Nacionales, s.a. de c.v." Constituida el 14 de Diciembre de 1974, con la dirección ambas del Sr. Joaquín Montiel Vázquez y como resultado de su amplia experiencia en el ramo del transporte de carga al haberse desempeñado exitosamente como fundador y director de empresas similares en la región de Córdoba. Con la experiencia de mas de 30 años en el ramo del transporte de carga y con el objetivo de garantizar un servicio rápido y eficiente la empresa cuenta con sus propios talleres para trabajos de mantenimiento menor y mayor; de mecánica, hojalatería, pintura, llantas, Muelles, lavado, lubricación y electricidad, en sus instalaciones asentadas en un área 9,600 metros cuadrados, localizada en el domicilio social de la empresa.
        </p>
    </div>
  )
}

export default Home