import React, { Component } from 'react';
import './ChaosBag.css';
import Selectors from './selectors/Selectors';
import Tokens from './tokens/Tokens';

class ChaosBag extends Component {
  render() {
    return (
      <div className="ChaosBag">
        <div className="ChaosBag-header">
          <h1>Chaos Bag</h1>
        </div>
        <Selectors />
        <Tokens />
      </div>
    );
  }
}

export default ChaosBag;
