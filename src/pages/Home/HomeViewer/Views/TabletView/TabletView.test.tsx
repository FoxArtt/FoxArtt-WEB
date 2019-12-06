import React from 'react';
import ReactDOM from 'react-dom';
import TabletView from './TabletView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TabletView />, div);
  ReactDOM.unmountComponentAtNode(div);
});