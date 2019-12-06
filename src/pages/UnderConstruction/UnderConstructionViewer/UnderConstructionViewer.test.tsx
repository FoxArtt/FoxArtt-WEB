import React from 'react';
import ReactDOM from 'react-dom';
import UnderConstructionViewer from './UnderConstructionViewer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UnderConstructionViewer />, div);
  ReactDOM.unmountComponentAtNode(div);
});