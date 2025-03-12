import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserProfile from './UserProfile';

describe('UserProfile Component', () => {
  test('renders name correctly', () => {
    render(<UserProfile name="John Doe" />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  test('renders age when provided', () => {
    render(<UserProfile name="John Doe" age={25} />);
    expect(screen.getByText('Age: 25')).toBeInTheDocument();
  });

  test('renders hobby when provided', () => {
    render(<UserProfile name="John Doe" hobby="Reading" />);
    expect(screen.getByText('Hobby: Reading')).toBeInTheDocument();
  });

  test('does not render age when not provided', () => {
    render(<UserProfile name="John Doe" />);
    expect(screen.queryByText(/Age:/)).not.toBeInTheDocument();
  });
});