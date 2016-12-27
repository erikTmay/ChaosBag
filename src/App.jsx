import React, { Component } from 'react';
import './App.css';
import Selectors from './selectors/Selectors';
import ChaosBag from './chaosBag/ChaosBag';

export default class App extends Component {
  render() {
    return (
      <div className="ChaosBag">
        <div className="ChaosBag-header">
          <h1>Chaos Bag</h1>
        </div>
        <Selectors />
        <ChaosBag />
      </div>
    );
  }
}
