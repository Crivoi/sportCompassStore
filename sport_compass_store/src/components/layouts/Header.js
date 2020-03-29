import React from 'react'
import { Link } from 'react-router-dom';

import logo from './layouts_img/logo.png';
import cart from './layouts_img/cart.png';

export default function Header() {
    return (
        <header style={navStyle}>
                <Link to='/' style={linkStyle}>
                    <img src={logo} alt='logo' style={navImgStyle} /> 
                    Home
                </Link>                
                <Link to='/cart' style={linkStyle}>
                    <img src={cart} alt='cart' style={navImgStyle} />
                    Cart
                </Link>
        </header>
    )
}

const navStyle = {
    backgroundColor: '#f2f2f2',
    overflow: 'hidden',
    borderBottom: '1.5px solid #d9d9d9',
    borderRadius: '2px',
    width: '100%',
    position: 'fixed',
}

const linkStyle = {
    color: 'black',
    textAlign: 'center',
    textDecoration: 'none',
    margin: '1em',
    padding: '3px',
    float: 'left',
    fontSize: '20px',
    fontFamily: "Raleway, 'sans-serif'"
}

const navImgStyle = {
    width: '14px',
    paddingRight: '5px',
    paddingLeft: '5px'
}