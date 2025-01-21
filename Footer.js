import React from 'react'
import Logo from '../images/logo.png'
import Icon1 from'../images/Vector (2).png'
import Icon2 from '../images/Vector (3).png'
import Icon3 from '../images/Vector (4).png'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-part1">
            <img src={Logo} alt="#"/>
            <p className="part1-text">Next-generation upgradable NFT</p>
        </div>
        <div className="footer-part2">
            <p className="part2-link"><a href="#">Cyber Saga</a></p><br/>
            <p className="part2-link"><a href="#">Roadmap</a></p><br/>
            <p className="part2-link"><a href="#">Features</a></p><br/>
            <p className="part2-link"><a href="#">Team</a></p><br/>
            <p className="part2-text">© 2021 SprintX. All rights reserved.</p>
        </div>
        <div className="footer-part3">
            <div className="instagram">
                <img src={Icon1} alt="#"/>
                <p className="instagram-link"><a href="#">@sprintX</a></p>
            </div>
            <div className="github">
                <img src={Icon2} alt="#"/>
                <p className="instagram-link"><a href="#">sprintX</a></p>
            </div>
            <div className="facebook">
                <img src={Icon3} alt="#"/>
                <p className="instagram-link"><a href="#">sprintX</a></p>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
