import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class VinylItem extends Component {
    render() {
        const { id, artistName, albumName } = this.props.vinyl;
        return (
            <div style={vinylStyle}>
                <p>
                    {id} : {artistName} - {albumName}
                </p>
            </div>
        )
    }
}

const vinylStyle = {
    position: 'relative',
    padding: '0px 10px'
}

VinylItem.propTypes = {
    vinyl: PropTypes.object.isRequired
}

export default VinylItem
