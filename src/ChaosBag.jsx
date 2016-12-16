import React, { Component } from 'react';
import './ChaosBag.css';
import Selectors from './Selectors/Selectors';

class ChaosBag extends Component {
  render() {
    return (
      <div className="ChaosBag">
        <div className="ChaosBag-header">
          <h1>Chaos Bag</h1>
        </div>
        <Selectors />
      </div>
    );
  }
}

export default ChaosBag;
