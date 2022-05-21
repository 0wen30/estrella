import React from 'react'
import { Link } from 'react-router-dom'

const Navegacion = () => {
    return (
        <nav>
            <ul className="md:flex md:justify-evenly text-center text-xl my-5 capitalize">
                <li className='hover:bg-slate-300 w-full py-2'><Link to="/servicios">servicios</Link></li>
                <li className='hover:bg-slate-300 w-full py-2'><Link to="/clientes">clientes</Link></li>
                <li className='hover:bg-slate-300 w-full py-2'><Link to="/informacion">información</Link></li>
                <li className='hover:bg-slate-300 w-full py-2'><Link to="/contacto">contáctanos</Link></li>
                <li className='hover:bg-slate-300 w-full py-2'><a href="http://www.transportadoraestrella.com:2095/horde/index.php">webmail</a></li>
            </ul>
        </nav>
    )
}

export default Navegacion