import React from 'react';
import { render, screen } from '@testing-library/react';
import { PollStep } from '../../src/components/pollStep';

describe('PollStep Component', () => {
  it('renders correctly', () => {
    render(
      <PollStep
        question='How are you doing?'
        onIconClick={() => {}}
        selectedOptions={{ 'How are you doing?': 'Good' }}
        onSubmit={() => {}}
      />
    );
    expect(screen.getByText('How are you doing?')).toBeInTheDocument();
  });
});
