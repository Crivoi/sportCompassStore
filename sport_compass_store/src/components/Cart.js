import React, { Component } from 'react';

import CartItem from './CartItem';
import './default.css'

class Cart extends Component {
    state = {
        cart: []
    }

    componentDidMount() {
        // console.log(this.props.cart);
        this.setState({
            cart: this.props.cart
        });
        console.log(this.state.cart);
    }

    computeCost = () => {
        let totalCost = 0;
        this.state.cart.forEach(vinyl => totalCost += parseFloat(vinyl.price));
        return totalCost;
    }

    render() {
        return (
            <div className='cartContainer' style={cartContainerStyle}>
                {this.state.cart.map(vinyl => (
                    <CartItem key={vinyl.cartID} vinyl={vinyl} removeVinyl={this.props.removeVinyl}/>
                ))}
                <div className='checkoutWrapper' style={checkoutWrapperStyle}>
                    <p className='subtotal' >Subtotal: {this.computeCost()}&euro;</p>
                    <button className='appBtn' 
                        style={checkoutBtnStyle}
                        onClick={this.props.checkOut}
                    >
                        Checkout
                    </button>
                </div>
            </div> 
        )
    }
}

const cartContainerStyle = {
    position: 'relative',
    display: 'block',
    margin: '0px 50px',
    marginBottom: '50px',
    border: '1px solid #d9d9d9',
    borderRadius: '8px',
    background: ' #f2f2f2',
    top: '100px',
    padding: '2em',
}

const checkoutBtnStyle = {
    fontFamily: 'Raleway, sans-serif',
    borderRadius: '8px',
    border: '2px solid #d9d9d9',
    padding: '10px 10px',
}

const checkoutWrapperStyle = {
    textAlign: 'center',
}

export default Cart;
