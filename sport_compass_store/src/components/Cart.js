import React, { Component } from 'react';

import CartItem from './CartItem';
import './default.css'

class Cart extends Component {
    state = {
        cart: []
    }

    componentDidMount() {
        console.log(this.props.cartItems);
        this.setState({
            cart: this.props.cartItems
        });
    }

    removeVinyl = (id) => {
        this.setState({
            cart: [...this.state.cart.filter(vinyl => vinyl.id !== id)]
        });
    }

    checkOut = () => {
        this.setState({
            cart: []
        });
    }

    computeCost = () => {
        let totalCost = 0;
        this.state.cart.forEach(vinyl => totalCost += parseInt(vinyl.price));
        return totalCost;
    }

    render() {
        return (
            <div className='cartContainer' style={cartContainerStyle}>
                {this.state.cart.map(vinyl => (
                    <CartItem key={vinyl.id} vinyl={vinyl} removeVinyl={this.removeVinyl}/>
                ))}
                <div className='checkoutWrapper' style={checkoutWrapperStyle}>
                    <p className='subtotal' >Subtotal: {this.computeCost()}&euro;</p>
                    <button className='appBtn' 
                        style={checkoutBtnStyle}
                        onClick={this.checkOut}
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
    gridTemplateColumns: '1fr 1fr 1fr',
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
