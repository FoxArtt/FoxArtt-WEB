import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UnderConstruction from './UnderConstruction';

describe('<UnderConstruction />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<UnderConstruction />);
    const underConstruction = getByTestId('UnderConstruction');

    expect(underConstruction).toBeInTheDocument();
  });
});