import React, { Component } from 'react'

class Cart extends Component {
    render() {
        return (
            <div className='cartContainerStyle' style={cartContainerStyle}>
                Cart
            </div>
        )
    }
}

const cartContainerStyle = {
    position: 'relative',
    display: 'block',
    margin: '0px 50px',
    border: '1px solid #d9d9d9',
    borderRadius: '8px',
    background: ' #f2f2f2',
    gridTemplateColumns: '1fr 1fr 1fr',
    top: '100px',
    padding: '2em'
}

export default Cart;
