import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './default.css'

class VinylItem extends Component {
    render() {
        const { artistName, albumName, artwork } = this.props.vinyl;
        const vinylImg = `/img/${artwork}`;
        return (
            <div className='vinylItem' style={vinylStyle}>
                <img src={vinylImg} 
                    onError={(e) => {
                        e.target.onError=null;
                        e.target.src='/img/default.jpg';
                    }}
                    alt='vinylImg'
                    className='vinylImg'
                />
                <p>
                    {artistName} - {albumName}
                </p>
                <button className='appBtn' 
                    style={addToCartBtnStyle}
                    onClick={this.props.addToCart.bind(this, this.props.vinyl)}
                >
                    Add To Cart
                </button>
            </div>
        )
    }
}

const vinylStyle = {
    position: 'relative',
    padding: '30px 10px 10px 10px',
    textAlign: 'center',
    fontSize: '18px'
}

const addToCartBtnStyle = {
    fontFamily: 'Raleway, sans-serif',
    borderRadius: '8px',
    border: '2px solid #d9d9d9',
    padding: '5px 5px',
}

VinylItem.propTypes = {
    vinyl: PropTypes.object.isRequired
}

export default VinylItem
