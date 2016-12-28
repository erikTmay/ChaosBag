import React from 'react';
import './App.css';
import Selectors from './Selectors/Selectors';
import ChaosBag from './chaosBag/ChaosBag';

export default () => {
    return (
        <div className="app">
            <div className="app-header">
                <h1>Chaos Bag</h1>
            </div>
            <Selectors />
            <ChaosBag />
        </div>
    );
}
