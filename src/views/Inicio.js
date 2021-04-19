import React from "react"
import { Stars } from "../components/imgComponents/Stars"
import PcStar1 from "../components/imgComponents/PcStar1"
import { Humo } from "../components/imgComponents/Humo"
import nebulosa from "../assets/img/nebulosa.png"
import plat1 from "../assets/img/planeta1.png"
import plat2 from "../assets/img/planeta2.png"
import plat3 from "../assets/img/planeta3.png"
import plat4 from "../assets/img/planeta4.png"
import cometa from "../assets/img/cometa.png"
import girl from "../assets/img/Girl.svg"
import ojoAbiertoIzquierdo from "../assets/img/ojoAbierto.svg"
import ojoAbiertoDerecho from "../assets/img/ojoAbiertoD.svg"
import ojoCerrado from "../assets/img/ojoCerrado.svg"
import pupila from "../assets/img/pupila.svg"
import SocialMedia from "../components/socialMedia/SocialMedia"

const Inicio = () => {
  return (
    <div className="center container__home">
      <Stars />
      <SocialMedia />
      <div className="girl-Group center">
        <img className="center  inicio__girl" src={girl} />
        <div className="girl__ojos">
          <div className="ojo__Izquierdo">
            <img src={ojoCerrado} className="ojo__izquierdo-cerrado" />
            <div className="ojo__izquierdo-abierto">
              <img src={ojoAbiertoIzquierdo} className="ojo__abierto-izquierdo" />
              <img src={pupila} className="ojo__pupila-izquierdo" />
            </div>
          </div>
          <div className="ojo__Derecho">
            <img src={ojoCerrado} className="ojo__derecho-cerrado" />
            <div className="ojo__derecho-abierto">
              <img src={ojoAbiertoDerecho} className="ojo__abierto-derecho" />
              <img src={pupila} className="ojo__pupila-derecho" />
            </div>
          </div>
        </div>
        <PcStar1 />
        <Humo />
      </div>
      <img className="center inicio__cometa-1" src={cometa} />
      <img className="center inicio__cometa-2" src={cometa} />
      <img className="center inicio__nebulosa" src={nebulosa} />
      <img className="center inicio__planeta1" src={plat1} />
      <img className="center inicio__planeta2" src={plat2} />
      <img className="center inicio__planeta3" src={plat3} />
      <img className="center inicio__planeta4" src={plat4} />
    </div>
  )
}

export default Inicio
