import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Bitcoin from './component/Bitcoin';
import Bitcoinrupiah from './component/Bitcoinrupiah';
import Rupiahbitcoin from './component/Rupiahbitcoin';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <br/>
        <router>
        <Route exact path="/" component={Bitcoin}/>
        <Route path="/Bitcoinrupiah" component={Bitcoinrupiah}/>
        <Route path="/Rupiahbitcoin" component={Rupiahbitcoin}/>
        </router>
      </div>
    );
  }
}

export default App;
