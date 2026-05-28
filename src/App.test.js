import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders digitalocean docs', () => {
  const { getByText } = render(<App />);
  const Element = getByText(/No/i);
  expect(Element).toBeInTheDocument();
});
