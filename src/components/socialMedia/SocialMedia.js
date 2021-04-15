import React from "react"
import twitter from "../../img/gorjeo 1.png"
import instagram from "../../img/instagram 1.png"
import linkedin from "../../img/linkedin (1) 1.png"
import github from "../../img/logotipo-de-github 1.png"

const SocialMedia = () => {
  return (
    <div className="social__media-group">
      <img src={twitter} />
      <img src={linkedin} />
      <img src={instagram} />
      <img src={github} />
    </div>
  )
}

export default SocialMedia
