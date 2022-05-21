import { Link } from "react-router-dom"
import Navegacion from "./Navegacion"


const Header = () => {
  return (
    <header className="bg-white p-4 bg-opacity-30">
      <div className="md:h-20 text-center md:flex">
        <h1 className="md:self-end font-bold text-3xl">
          <Link to="/">TRANSPORTADORA ESTRELLA SA DE CV</Link>
        </h1>
      </div>
      <Navegacion />
    </header>
  )
}

export default Header