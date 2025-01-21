import React from 'react'
import {useNavigate} from 'react-router-dom'
import Image from '../images/image1.png'
import Logo from '../images/logo.png'



function Header() {
  
  const navigate= useNavigate();

  const goToFeature= () =>{
    navigate("/featuresnav");
  };
  const goToRoadmap= () =>{
    navigate("/roadmapnav");
  };
  const goToTeam= () =>{
    navigate("/teamnav");
  };

  return (
    <div className='bg-container'>
      <div className='navigation'>
      <div className="navbar-log">
        <img src={Logo} alt="logo"/>
      </div>
      <div className="navbar-links">
        <ul>
            <li>
              <a className='nav-link' href='/' >Home</a>
            </li>
            <li>
              <a className='nav-link' onClick={goToFeature} >Features</a>
            </li>
            <li>
            <a className='nav-link' onClick={goToRoadmap} >Roadmap</a>
            </li>
            <li>
            <a className='nav-link' onClick={goToTeam} >Team</a>
            </li>
        </ul>
       </div>
       </div>
    <div className='header'>
      <div className="header-form">
        <p className="header-text1">METAVERSE AWAITS, CHOOSE YOUR CYBER WARRIOR</p>
        <h1 className="header-heading">Next-generation upgradable NFT</h1>
        <p className="header-text2">NFT PRE-SALE starts at 25 Jan, 2022</p>
        <div className="header-days">
            <p className="day"><span className='emphasis'>28</span><br/>days</p>
            <p className="day"><span className='emphasis'>28</span><br/>days</p>
            <p className="day"><span className='emphasis'>28</span><br/>days</p>
            <p className="day"><span className='emphasis'>28</span><br/>days</p>
        </div>
        <p className="header-text3">Pre-sale will be available for whitelisted buyers only.
         If you want to register for whitelist, join our Discord or <span className='emphasis1'>fill this form.</span></p>
            <div className="header-input-box">
                <div className="input-btn">
                <input className='input-header' type="text" placeholder='Enter Your Email Address'/>
                <button className='header-btn'>Subscribe</button>
                </div>
                <div className="join">
                <button className='join-btn'>Join our <span className='emphasis2'>Discord</span></button>
                <button className='join-btn btn1'>Join our <span className='emphasis2'>Twitter</span></button>
                </div>
            </div>
        </div>
        <div className="header-img">
            <img className='img1' src={Image} alt="img" />
        </div>
      </div>
    </div>
  )
}

export default Header
