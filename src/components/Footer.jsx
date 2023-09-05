import { Typography } from 'antd'
import React from 'react'
import Facebook from "../assets/Facebook.png"
import Linkdin from "../assets/LinkedIn.png"
import "./fotter.css"

const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-Parent">
    <div className="child-media">
      <span>Terms & Condition | Privacy Policy</span>
      </div>
      <div className="child-media">
      <Typography>Copyright © 2023 Prepaid Friends. All rights reserved.</Typography>

      </div>
      <div className='image-icons'>
      <img src={Facebook} alt="fb" className='img-icon' />
      <img src={Linkdin} alt="linkdin" className='img-icon' />
      </div>
    </div>
    
    </div>
  )
}

export default Footer
