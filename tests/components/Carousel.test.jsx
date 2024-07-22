import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Carousel } from '../../src/components/carousel';

describe('Carousel Component', () => {
  it('renders correctly with initial state', () => {
    render(
      <Carousel setCurrentStep={() => {}}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Carousel>
    );
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
  });

  it('handles dot click and updates currentIndex', () => {
    const setCurrentStep = jest.fn();
    render(
      <Carousel setCurrentStep={setCurrentStep}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Carousel>
    );
    fireEvent.click(screen.getByTestId('dot-1'));
    expect(setCurrentStep).toHaveBeenCalledWith(1);
  });
});
