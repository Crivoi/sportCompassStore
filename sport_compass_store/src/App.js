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
    vinyls: []
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Header />
            <Route exact path='/' component={Main} />
            <Route path='/cart' component={Cart} />
            <Route path='/about' component={About} />
            <Footer />
          </div>
        </div>
      </Router>
    )
  };
}

export default App;
