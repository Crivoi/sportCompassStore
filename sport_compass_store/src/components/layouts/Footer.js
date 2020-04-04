import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='navFooter' style={footerStyle}>
            <Link to='/about' id='aboutBtn' style={linkStyle}>About</Link>
        </footer>
    )
}

const footerStyle = {
    backgroundColor: '#0d0d0d',
    overflow: 'hidden',
    borderTop: '1.5px solid #d9d9d9',
    borderRadius: '2px',
    width: '100%',
    position: 'fixed',
    bottom: '0px',
    padding: '0px',
    zIndex: '998'
}

const linkStyle = {
    color: 'white',
    textAlign: 'center',
    padding: '0.5em 1em',
    paddingLeft: '50px',
    marginLeft: '1em',
    float: 'left',
    textDecoration: 'none',
    fontSize: '18px',
    fontFamily: "Raleway, 'sans-serif'"
}
