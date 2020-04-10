import React from 'react';
import { render , cleanup } from '@testing-library/react';
import Header from './index';

afterEach(cleanup)


test('renders header', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/EMI Calculator/i);
  expect(linkElement).toBeInTheDocument();
});

describe('<Header/> spec', () => {
  it('renders header component', () => {
      const {asFragment} =  render(<Header/>)
      expect(asFragment()).toMatchSnapshot();
  });
});
