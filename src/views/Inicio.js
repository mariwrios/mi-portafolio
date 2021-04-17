import React from "react"
import { Stars } from "../components/imgComponents/Stars"
import { Girl } from "../components/imgComponents/Girl"
import { PcStar2 } from "../components/imgComponents/PcStar2"
import PcStar1 from "../components/imgComponents/PcStar1"
import { Humo } from "../components/imgComponents/Humo"
import nebulosa from "../assets/img/nebulosa.png"
import planeta2 from "../assets/img/planeta2.png"
import planeta1 from "../assets/img/planeta1.png"
import planeta3 from "../assets/img/planeta3.png"
import planeta4 from "../assets/img/planeta4.png"
import SocialMedia from "../components/socialMedia/SocialMedia"

const Inicio = () => {
  return (
    <div className="center container__home">
      <Stars />
      <SocialMedia />
      <div className="girl-Group center">
        <Girl />
        <PcStar2 />
        <PcStar1 />
        <Humo />
      </div>
      <img className="center inicio__nebulosa" src={nebulosa} />
      <img className="center inicio__planeta1" src={planeta1} />
      <img className="center inicio__planeta2" src={planeta2} />
      <img className="center inicio__planeta3" src={planeta3} />
      <img className="center inicio__planeta4" src={planeta4} />
    </div>
  )
}

export default Inicio
