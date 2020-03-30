import React, { Component } from 'react';
import PropTypes from 'prop-types';

import defaultImg from './img/default.jpg';
import './image.css'

export class VinylItem extends Component {
    render() {
        const { id, artistName, albumName } = this.props.vinyl;
        return (
            <div className='vinylItem' style={vinylStyle}>
                <img src={defaultImg} alt='default_vinyl_img' className='vinylImg' />
                <p>
                    {id} : {artistName} - {albumName}
                </p>
            </div>
        )
    }
}

const vinylStyle = {
    position: 'relative',
    padding: '30px 10px 10px 10px',
    textAlign: 'center'
}

VinylItem.propTypes = {
    vinyl: PropTypes.object.isRequired
}

export default VinylItem
