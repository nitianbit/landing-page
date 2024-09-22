import React, {useState} from 'react';
import './css/demo.css';
import './css/head.css';
import './css/fonts/style.css';
import './fonts/fonts.css';
import './style.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <header className="header">
                <div className="container flex-between-center">
                    <div className="logo">
                        <a href="Home" >
                            <img src="./images/logo.png" alt="" />
                        </a>
                    </div>
                    <div className={menuOpen ? "menu active flex-between-center" : "menu flex-between-center"}>
                    <i class="icon-close2 menucls" onClick={() =>{setMenuOpen(!menuOpen)}}></i>
                        <ul className='flex-between-center'>
                            <li><a href="Home">Home </a></li>
                            <li><a href="Aboutus">About Us</a></li>
                            <li><a href="Forbuyers">For Buyers</a></li>
                            <li><a href="Forbuildersdealers">For Builders/Dealers</a></li>
                        </ul>
                        <div class="con">
                            <a href="Contactus" className='button'>Contact Us</a>
                        </div>
                    </div>
                    <i class="icon-menu ml-2" onClick={() =>{setMenuOpen(!menuOpen)}}></i>
                </div>
            </header>
        </>
    )
}

export default Header;

