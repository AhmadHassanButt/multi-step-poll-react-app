import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { PollOptions } from '../../src/components/pollOptions';

describe('PollOptions Component', () => {
  it('renders correctly', () => {
    const OptList = [
      { Icon: jest.fn(), label: 'Good', isSelected: false },
      { Icon: jest.fn(), label: 'Bad', isSelected: true },
    ];
    render(<PollOptions OptList={OptList} />);
    expect(screen.getByText('Bad')).toBeInTheDocument();
  });

  it('calls onOptionClick on icon click', () => {
    const onOptionClick = jest.fn();
    const OptList = [{ Icon: jest.fn(), label: 'Good', isSelected: false }];
    render(
      <PollOptions onOptionClick={onOptionClick} OptList={OptList} />
    );
    fireEvent.click(screen.getByTestId('thumbsUp-0'));
    expect(onOptionClick).toHaveBeenCalled();
  });
});
