import "./index.css"
import Inicio from "./views/Inicio"
import Proyectos from "./views/Proyectos"
import Navbar from "./components/navbar/Navbar"

function Portafolio() {
  return (
    <div className="portafolio">
      <Navbar />
      <Inicio />

      <Proyectos />
    </div>
  )
}

export default Portafolio
