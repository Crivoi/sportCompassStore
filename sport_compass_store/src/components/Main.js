import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Vinyls from './Vinyls';
import vinylDB from '../VinylDB/vinylDB.json';


class Main extends Component {
    state = {
        vinyls: []
    }

    componentDidMount() {
      const data = vinylDB;
      this.setState(data);
    }

    render() {
        return (
          <div>
            <div className="mainAbout" style={mainAbout}>
              <h2>Vinyl Market</h2>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel sagittis ligula, gravida lobortis purus. 
                Etiam suscipit nulla a mollis pretium. Aliquam facilisis nunc ipsum, vitae malesuada arcu dapibus nec. 
                Vivamus tincidunt vitae neque sit amet viverra. Cras non bibendum libero. Fusce semper mollis faucibus. 
              </h3>
            </div>
            <div className="vinylsContainer" style={vinylsContainerStyle}>
                <Vinyls vinyls={this.state.vinyls} style={containerItemStyle} />
            </div>  
          </div>
        )
    }
}

const vinylsContainerStyle = {
  position: 'relative',
  display: 'grid',
  margin: '0px 50px',
  border: '1px solid #d9d9d9',
  borderRadius: '8px',
  background: ' #f2f2f2',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  top: '100px'
}

const mainAbout = {
  position: 'relative',
  textAlign: 'center',
  fontFamily: 'Raleway, sans-serif',
  border: '1px solid #d9d9d9',
  borderRadius: '8px',
  background: '#f2f2f2',
  margin: '0px 50px',
  padding: '10px',
  top: '85px'
}

const containerItemStyle = {
}

export default Main;

