import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';

test('renders profile text', () => {
  const { getByText } = render(<Profile />);
  const linkElement = getByText(/Rachael Passov/i);
  expect(linkElement).toBeInTheDocument();
});
