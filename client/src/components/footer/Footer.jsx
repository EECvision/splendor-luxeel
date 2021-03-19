import React from 'react';
import { NavLink } from 'react-router-dom';
import iconFacebook from '../../assets/icon-facebook.svg';
import iconYoutube from '../../assets/icon-youtube.svg';
import iconInstagram from '../../assets/icon-instagram.svg';
import iconTwitter from '../../assets/icon-twitter.svg';

const handleClick = () => {
  window.scrollTo(0, 0);
}
const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="hidden md:flex w-full flex-col items-center justify-center md:px-0 px-4">
        <div className="w-full bg-black opacity-95 flex items-center justify-start px-12 py-12">
          <NavLink to="/" className="cursor-default flex items-center justify-center">
            <div className="text-2xl md:text-3xl font-medium text-white">Splendor Luxeel</div>
            <span className="hidden sm:block text-4xl lnr lnr-cart text-white"></span>
          </NavLink>
        </div>
        <div className="w-full bg-black opacity-90 flex flex flex-col items-center text-gray-400 py-5">
          <div className="w-full text-center mb-4">FOLLOW US ON</div>
          <div className="w-full max-w-sm flex justify-evenly">
            <img  src={iconFacebook} alt="facebook-icon" className="w-6 h-6" />
            <img src={iconYoutube} alt="youtube-icon" className="w-6 h-6" />
            <img src={iconInstagram} alt="instagram-icon" className="w-6 h-6" />
            <img src={iconTwitter} alt="twitter-icon" className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div style={{fontSize: "10px"}} className="w-full flex flex-col jusitfy-center items-center text-gray-500 text-sm bg-black opacity-90 uppercase px-4 md:px-0 py-2 md:py-0">
        <div onClick={handleClick} className="cursor-pointer md:hidden w-auto flex flex-col items-center justify-center p-1 mb-1">
          <span className="lnr lnr-chevron-up"></span>
          <span className="text-xs">back to top</span>
        </div>
        <div className="w-full max-w-6xl flex flex-wrap justify-evenly items-center text-gray-300 border-t border-b border-gray-800 py-2 md:py-8">
          <div className="p-1">help center</div>
          <div className="p-1">contact us</div>
          <div className="p-1">terms &amp; conditions</div>
          <div className="p-1">become a seller</div>
          <div className="p-1">report a product</div>
        </div>
        <div className="w-full text-center text-xs md:text-left md:px-12 capitalize p-1 md:py-8">all rights reserved</div>
      </div>
    </div>
  )
}

export default Footer;