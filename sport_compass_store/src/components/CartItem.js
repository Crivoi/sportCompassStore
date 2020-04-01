import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './default.css';

class CartItem extends Component {
    render() {
        const { id, artistName, albumName, labelName, artwork, price } = this.props.vinyl;
        const vinylImg = `/img/${artwork}`;
        return (
            <div className='container' style={cartItemStyle}>
                <img src={vinylImg}
                    onError={(e) => {
                        e.tartget.onError=null;
                        e.target.src='/img/default.jpg';
                    }}
                    alt='vinylImage' 
                    className='cartImg'
                />

                <div className='vinylInfo' style={vinylInfoStyle}>
                    <p style={pStyle}>Album: {albumName}</p>
                    <p style={pStyle}>Artist: {artistName}</p>
                    <p style={pStyle}>Label: {labelName}</p>
                    <p style={pStyle}>Price: {price}&euro;</p>
                </div>

                <button className="removeBtn" 
                    style={removeBtnStyle} 
                    onClick={this.props.removeVinyl.bind(this, id)}
                >   
                    Remove from cart
                </button>
            </div>
        )
    }
}

const cartItemStyle = {
    border: '2px solid #d9d9d9',
    borderRadius: '8px',
    margin: '30px',
    paddingTop: '1.1em'
}

const vinylInfoStyle = {
    display: 'inline-block',
    position: 'relative',
    bottom: '1em',
    left: '6em'
}

const pStyle = {
    padding: '0px'
}

const removeBtnStyle = {
    fontFamily: 'Raleway, sans-serif',
    borderRadius: '8px',
    border: '2px solid #d9d9d9',
    padding: '5px 5px',
    float: 'right',
    position: 'relative',
    top: '5.5em',
    right: '4em'
}

CartItem.propTypes = {
    vinyl: PropTypes.object.isRequired
}

export default CartItem;
