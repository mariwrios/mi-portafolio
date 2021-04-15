import React from "react"
import estrellas from "../img/estrellas.svg"
import nebulosa from "../img/nebulosa.svg"
import girl from "../img/girl.svg"
import plat1 from "../img/planta1.svg"
import plat2 from "../img/planta2.svg"
import plat3 from "../img/planta3.svg"
import plat4 from "../img/planeta4.svg"

import SocialMedia from "../components/socialMedia/SocialMedia"

const Inicio = () => {
  return (
    <div className="center container__home">
      <SocialMedia />
      <img className="center  inicio__estrellas" src={estrellas} />
      <img className="center  inicio__girl" src={girl} />
      <img className="center inicio__nebulosa" src={nebulosa} />
      <img className="center inicio__planeta1" src={plat1} />
      <img className="center inicio__planeta2" src={plat2} />
      <img className="center inicio__planeta3" src={plat3} />
      <img className="center inicio__planeta4" src={plat4} />
    </div>
  )
}

export default Inicio
