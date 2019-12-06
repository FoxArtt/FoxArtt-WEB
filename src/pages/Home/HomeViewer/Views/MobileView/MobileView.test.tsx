import React from 'react';
import ReactDOM from 'react-dom';
import MobileView from './MobileView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MobileView />, div);
  ReactDOM.unmountComponentAtNode(div);
});