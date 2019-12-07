import React from 'react';
import ReactDOM from 'react-dom';
import NavbarComponent from './NavbarComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavbarComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});