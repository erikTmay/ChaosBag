import React from 'react';
import ReactDOM from 'react-dom';
import ChaosBag from './ChaosBag';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChaosBag />, div);
});
