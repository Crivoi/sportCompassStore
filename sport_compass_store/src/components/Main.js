import React, { Component } from 'react';

import Vinyls from './Vinyls';
import vinylDB from '../VinylDB/vinylDB.json';

import searchImg from '../components/layouts/layouts_img/search.png'

import './default.css';

const vinylData = vinylDB;

class Main extends Component {
    state = {
        vinyls: [],
        loading: false,
        currentPage: 1,
        postsPerPage: 6
    }
    
    componentDidMount() {
      const data = vinylData.vinyls;
      this.setState({
        vinyls: data,
      });
    }

    render() {
        return (
          <div>
            <div className="mainAbout" style={mainAbout}>
              <h2>Vinyl Market</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel sagittis ligula, gravida lobortis purus. 
                Etiam suscipit nulla a mollis pretium. Aliquam facilisis nunc ipsum, vitae malesuada arcu dapibus nec. 
                Vivamus tincidunt vitae neque sit amet viverra. Cras non bibendum libero. Fusce semper mollis faucibus. 
              </p>
              <form action='/' className='searchForm' style={searchFormStyle}>
                <img src={searchImg} alt='searchImg' style={searchImgStyle} />
                <input type='text' placeholder='Search for a record...' style={searchInputStyle} />
                <button type='submit' className='appBtn' style={searchBtnStyle}>Search</button>
              </form>
            </div>
            <div className="vinylsContainer" style={vinylsContainerStyle}>
                <Vinyls vinyls={this.state.vinyls} addToCart={this.props.addToCart} />
            </div>  
          </div>
        )
    }
}

const vinylsContainerStyle = {
  position: 'relative',
  display: 'grid',
  margin: '0px 50px',
  marginBottom: '100px',
  paddingBottom: '2em',
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
  top: '85px',
  fontSize: '18px'
}

const searchFormStyle = {
  fontFamily: 'Raleway, sans-serif',
  position: 'relative',

}

const searchInputStyle = {
  fontFamily: 'Raleway, sans-serif',
  borderRadius: '8px',
  border: '1px solid #d9d9d9',
  padding: '5px 5px',
  margin: '0px 10px',
}

const searchImgStyle = {
  width: '16px',
  paddingRight: '5px',
  paddingLeft: '5px'
}

const searchBtnStyle = {
  fontFamily: 'Raleway, sans-serif',
  borderRadius: '8px',
  border: '2px solid #d9d9d9',
  padding: '5px 5px',
}

export default Main;

