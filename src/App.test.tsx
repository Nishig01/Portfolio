import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio subtitle', () => {
  render(<App />);
  const subtitleElement = screen.getByText(/Full Stack Developer/i);
  expect(subtitleElement).toBeInTheDocument();
});
