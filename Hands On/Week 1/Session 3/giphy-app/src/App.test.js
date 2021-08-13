import { render, screen } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {

  render(<App />)
  const linkElement = screen.getByText(/Search/i);
  const element = screen.getByTestId('custom-element')
  expect(linkElement).toBeInTheDocument();
  expect(element).toBeInTheDocument();
});