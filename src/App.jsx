import { Route, BrowserRouter, Routes } from "react-router-dom"
import Footer from "./componentes/Footer"
import Header from "./componentes/Header"
import { Clientes, Contacto, Home, Informacion, Servicios, WebMail } from "./rutas"

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <section className='grow bg-white shadow-sombra bg-opacity-30 px-4'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/servicios" element={<Servicios />} />
                    <Route path="/clientes" element={<Clientes />} />
                    <Route path="/informacion" element={<Informacion />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>
            </section>
            <Footer />
        </BrowserRouter>
    )
}

export default App