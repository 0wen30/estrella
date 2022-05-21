import info from "../img/info.jpg"

const Informacion = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white bg-opacity-80 p-4 h-full">
        <img
          className="w-full pb-4"
        src={info} 
        alt="imagen_bienvenida" 
      />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus, ut odit dicta ratione nostrum molestiae consectetur sunt eligendi voluptatem corporis numquam ipsum facilis assumenda. Praesentium omnis cum commodi! Eligendi.</p>
    </div>
  )
}

export default Informacion