import React from "react"
import { Stars } from "../components/imgComponents/Stars"
import { Girl } from "../components/imgComponents/Girl"
import PcStar1 from "../components/imgComponents/PcStar1"
import { Humo } from "../components/imgComponents/Humo"
import nebulosa from "../assets/img/nebulosa.png"
import plat1 from "../assets/img/planeta1.png"
import plat2 from "../assets/img/planeta2.png"
import plat3 from "../assets/img/planeta3.png"
import plat4 from "../assets/img/planeta4.png"
import SocialMedia from "../components/socialMedia/SocialMedia"

const Inicio = () => {
  return (
    <div className="center container__home">
      <Stars />
      <SocialMedia />
      <div className="girl-Group center">
        <Girl />

        <PcStar1 />
        <Humo />
      </div>
      <img className="center inicio__nebulosa" src={nebulosa} />
      <img className="center inicio__planeta1" src={plat1} />
      <img className="center inicio__planeta2" src={plat2} />
      <img className="center inicio__planeta3" src={plat3} />
      <img className="center inicio__planeta4" src={plat4} />
    </div>
  )
}

export default Inicio
