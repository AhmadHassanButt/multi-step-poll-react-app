import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { PollForm } from '../../src/pages/PollForm';

describe('PollApp Component', () => {
  it('renders correctly', () => {
    render(<PollForm />);
    expect(screen.getByText('How are you doing?')).toBeInTheDocument();
  });

  it('allows selecting options', () => {
    render(<PollForm />);
    fireEvent.click(screen.getByTestId('thumbsUp-0'));
  });
});
