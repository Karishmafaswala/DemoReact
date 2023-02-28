import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from "./components/pages";
import App from './App';

test('renders with correct text', () => {
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  const { getByTextId } = render(<Home />);
  const headerEl =component.getByTextId("home");

  expect(headerEl.textContent).toBe(0)
});
