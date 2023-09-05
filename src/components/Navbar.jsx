import React from 'react'
import {Button, Image, Menu, Typography} from 'antd'
import { HomeOutlined, UserOutlined, AppstoreAddOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css';
import prepaid from "../assets/Prepaid Friends_New1 2.png";
import account from "../assets/Account.png"

import './Navbar.css'
const Navbar = () => {


  return (
    <div className="custom-navbar">
    <div className='menu-svg'>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13" fill="none">
  <rect y="0.478821" width="19.6479" height="1.74648" rx="0.873239" fill="#1B1B1B"/>
  <rect y="5.71826" width="19.6479" height="1.74648" rx="0.873239" fill="#1B1B1B"/>
  <rect y="10.9576" width="13.9718" height="1.74648" rx="0.873239" fill="#1B1B1B"/>
</svg>
    </div>
    <div className='imag-logo'>
    <img src={prepaid} alt="logo"/>
    </div>
    <div className='Nav-Parent'>
    <div className="nav-links">
      <Button type="link"  className="nav-link">
        HOME
      </Button>
      <Button type="link"  className="nav-link">
        BUY BULK CARDS
      </Button>
      <Button type="link"  className="nav-link">
        HOW IT WORKS
      </Button>
      <Button type="link"  className="nav-link" >
        CONTACT
      </Button>
    </div>
    <div className='loginDivParent'>
        <Button type='link' className='nav-link login-button' >
            LOGIN
        </Button>
    </div>
    </div>
   <div className='account'>
    <img src={account} alt="person"/>
   </div>
  </div>
  )
}

export default Navbar
