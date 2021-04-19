import React from "react"
import twitter from "../../assets/img/twitter.png"
import instagram from "../../assets/img/instagram.png"
import linkedin from "../../assets/img/linkedin.png"
import github from "../../assets/img/github.png"

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
