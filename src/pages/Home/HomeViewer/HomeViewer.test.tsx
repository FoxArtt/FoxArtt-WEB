import React from 'react';
import ReactDOM from 'react-dom';
import HomeViewer from './HomeViewer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeViewer />, div);
  ReactDOM.unmountComponentAtNode(div);
});