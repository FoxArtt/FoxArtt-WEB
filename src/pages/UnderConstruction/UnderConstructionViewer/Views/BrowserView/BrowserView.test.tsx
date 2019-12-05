import React from 'react';
import ReactDOM from 'react-dom';
import BrowserView from './BrowserView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserView />, div);
  ReactDOM.unmountComponentAtNode(div);
});