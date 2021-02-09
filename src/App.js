import './App.css';
import LightComponent from './components/LightComponent';
import Navbar from'./components/Navbar';
import Counter from './components/Counter'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar />
        <LightComponent /> */}
        <Counter />
      </div>
    )
  }
}

