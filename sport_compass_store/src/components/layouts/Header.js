import React from 'react'
import { Link } from 'react-router-dom';

import logo from './layouts_img/logo.png';
import cart from './layouts_img/cart.png';

import './layouts.css';

export default function Header() {
    return (
        <header style={navStyle} className='navHeader'>
                <Link to='/' className='link' id='homeLink' style={homeStyle}>
                    <img src={logo} alt='logoImg' style={navImgStyle} /> 
                    Home
                </Link>                
                <Link to='/cart' className='link' id='cartLink' style={cartStyle}>
                    <img src={cart} alt='cartImg' style={navImgStyle} />
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
    top: '0px',
    zIndex: '998'
}

const homeStyle = {
    color: 'black',
    textAlign: 'center',
    textDecoration: 'none',
    margin: '1em',
    padding: '3px 50px',
    float: 'left',
    fontSize: '20px',
    fontFamily: "Raleway, 'sans-serif'"
}

const cartStyle = {
    color: 'black',
    textAlign: 'center',
    textDecoration: 'none',
    margin: '1em',
    padding: '3px 50px',
    float: 'right',
    fontSize: '20px',
    fontFamily: "Raleway, 'sans-serif'"
}

const navImgStyle = {
    width: '14px',
    paddingRight: '5px',
    paddingLeft: '5px'
}