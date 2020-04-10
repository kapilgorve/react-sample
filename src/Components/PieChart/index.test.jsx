import React from 'react';
import { cleanup, render } from '@testing-library/react';

import PieChart from './index';

afterEach(cleanup);

describe('<PieChart/> Component', () => {
  it('renders <PieChart/> ', () => {
    const { asFragment } = render(<PieChart interest="10" totalPayable="10550" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
