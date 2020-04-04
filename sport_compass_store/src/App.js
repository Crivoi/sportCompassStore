import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

import Main from './components/Main';
import Cart from './components/Cart';
import About from './components/About';

import './App.css';
import './index.css';

class App extends Component {
  state = {
    vinyls: [],
    cart: [],
    top: '-100px'
  }

  cartID = 1;

  addToCart = (vinyl) => {
    let newVinylInfo = {...vinyl, cartID: this.cartID++}
    this.setState({
      cart: [...this.state.cart, newVinylInfo]
    });
    this.showNotification();
  }

  showNotification = () => {
    this.setState({
      top: '0px'
    }, () => {
      setTimeout(() => {
        this.setState({
          top: '-100px'
        });
      }, 1000);
    })
  }

  checkOut = () => {
    this.setState({
        cart: []
    });
  }

  removeVinyl = (id) => {
    this.setState({
        cart: [...this.state.cart.filter(vinyl => vinyl.cartID !== id)]
    });
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Header />
            <Route exact path='/' component={(props) => <Main {...props} addToCart={this.addToCart} top={this.state.top} />} />
            <Route path='/cart' component={(props) =>
              <Cart {...props} cart={this.state.cart} checkOut={this.checkOut} removeVinyl={this.removeVinyl} /> }
            />
            <Route path='/about' component={About} />
            <Footer />
          </div>
        </div>
      </Router>
    )
  };
}

export default App;
