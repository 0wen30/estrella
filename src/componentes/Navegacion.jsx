import React from 'react'
import { Link } from 'react-router-dom'

const Navegacion = () => {
    return (
        <nav>
            <ul className="md:flex md:justify-evenly text-center text-xl ">
                <li><Link to="/servicios">servicios</Link></li>
                <li><Link to="/clientes">clientes</Link></li>
                <li><Link to="/informacion">información</Link></li>
                <li><Link to="/contacto">contáctanos</Link></li>
                <li><Link to="/mail">webmail</Link></li>
            </ul>
        </nav>
    )
}

export default Navegacion