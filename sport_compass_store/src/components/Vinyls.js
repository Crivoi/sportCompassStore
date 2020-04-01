import React, { Component } from 'react'
import PropTypes from 'prop-types';
import VinylItem from './VinylItem';

class Vinyls extends Component {
    render() {
        return (
            this.props.vinyls.map(vinyl => (
                <VinylItem key={vinyl.id} vinyl={vinyl} addToCart={this.props.addToCart} />
            ))
        )
    }
}

Vinyls.propTypes = {
    vinyls: PropTypes.array.isRequired
}

export default Vinyls;
