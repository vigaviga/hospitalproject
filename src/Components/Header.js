
import React from 'react';
import '../Styles/Header.css';
import Logo  from '../Images/Logo.png'

const Header = () => {
  return (
    <div>
      <div className="Header">
        <div className="LogoAndTextContainer">
            <div className="LogoContainer">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="TextContainer">
                Orthopaedic Surgery Clinical Research Program
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;