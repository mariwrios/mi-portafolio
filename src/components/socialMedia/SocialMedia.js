import React from "react"
import twitter from "../../assets/img/gorjeo 1.png"
import instagram from "../../assets/img/instagram 1.png"
import linkedin from "../../assets/img/linkedin (1) 1.png"
import github from "../../assets/img/logotipo-de-github 1.png"

const SocialMedia = () => {
  return (
    <div className="social__media-group">
      <img alt="twitter logo" src={twitter} />
      <img alt="linkedin logo" src={linkedin} />
      <img alt="instagram logo" src={instagram} />
      <img alt="github logo" src={github} />
    </div>
  )
}

export default SocialMedia
