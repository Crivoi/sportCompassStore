import React, { Component } from 'react';
import Vinyls from './Vinyls';

class Main extends Component {
    state = {
        vinyls: [
          {
            id: 1,
            artistName: 'Artist Test 1',
            albumName: 'Album Test 1'
          },
          {
            id: 2,
            artistName: 'Artist Test 2',
            albumName: 'Album Test 2'
          },
          {
            id: 3,
            artistName: 'Artist Test 3',
            albumName: 'Album Test 3'
          },
        ]
    }

    render() {
        return (
          <div className="vinylsContainer" style={vinylsContainerStyle}>
              <Vinyls vinyls={this.state.vinyls} />
          </div>
        )
    }
}

const vinylsContainerStyle = {
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: '33% 33% 33%',
  border: '3px solid black',
  top: '100px'
}

export default Main;

