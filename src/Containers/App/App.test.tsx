import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';

import App from './App';

afterEach(cleanup);

describe('<App/> Component', () => {
  it('renders <App/> ', () => {
      const {asFragment} =  render(<App/>)
      expect(asFragment()).toMatchSnapshot();
  });

  it('Enter principal', async () => {
    const { getByTestId } = render(<App />);
    const principalInputElement = getByTestId('principalInput') as HTMLInputElement;
    fireEvent.change(principalInputElement, { target: { value: '20000' } });
    expect(getByTestId('emititle')).toHaveTextContent('1758');
  });

  it('Enter rate', async () => {
    const { getByTestId } = render(<App />);
    const rateInputElement = getByTestId('rateInput') as HTMLInputElement;
    fireEvent.change(rateInputElement, { target: { value: '12' } });
    expect(getByTestId('emititle')).toHaveTextContent('888');
  });

  it('Enter tenure', async () => {
    const { getByTestId } = render(<App />);
    const tenureInputElement = getByTestId('tenureInput') as HTMLInputElement;
    fireEvent.change(tenureInputElement, { target: { value: '2' } });
    expect(getByTestId('emititle')).toHaveTextContent('461');
  });

  it('Enter principal, rate , tenure', async () => {
    const { getByTestId } = render(<App />);
    const principalInputElement = getByTestId('principalInput') as HTMLInputElement;
    const rateInputElement = getByTestId('rateInput') as HTMLInputElement;
    const tenureInputElement = getByTestId('tenureInput') as HTMLInputElement;
    fireEvent.change(principalInputElement, { target: { value: '30000' } });
    fireEvent.change(rateInputElement, { target: { value: '10' } });
    fireEvent.change(tenureInputElement, { target: { value: '3' } });
    expect(getByTestId('emititle')).toHaveTextContent('968');
  });

  it('Check Interest', async () => {
    const { getByTestId } = render(<App />);
    const principalInputElement = getByTestId('principalInput') as HTMLInputElement;
    fireEvent.change(principalInputElement, { target: { value: '20000' } });
    expect(getByTestId('interest')).toHaveTextContent('1100');
  });

  it('Check payable', async () => {
    const { getByTestId } = render(<App />);
    const principalInputElement = getByTestId('principalInput') as HTMLInputElement;
    fireEvent.change(principalInputElement, { target: { value: '20000' } });
    expect(getByTestId('payable')).toHaveTextContent('21100');
  });

});
