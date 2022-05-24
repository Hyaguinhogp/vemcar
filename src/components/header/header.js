import React from 'react';
import './header.css';
import Logo from '../../assets/images/logo.png'

function Header() {
    return (
        <>
            <nav className='navbar'>
                <img className='logo' src={Logo} alt='' />
            </nav>
        </>
    );

}

export default Header;