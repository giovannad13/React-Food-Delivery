import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      
    <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Using branches helps you keep your `main` or `master` branch stable and allows you to develop features or fixes independently. If something goes wrong, you can always revert to the main branch without losing your progress.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>

        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-234-567-8901</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
    </div>
    <hr />
    <p className="footer-copyright">
        Copyright 2024 @ tomatocom - all Rights Reserved.
    </p>
    </div>
  )
}

export default Footer
