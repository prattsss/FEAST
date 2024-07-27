import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import data from '../../mocks/restaurant.json';
import Body from '../Body';



describe('body component and its features', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({ json: () => Promise.resolve(data) }));
  //test cases for the body component
  test('should return restaurants and seach button', async () => {
    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>))
    const restaurant = screen.getByText("UK Restaurants & Kitchens")
    expect(restaurant).toBeInTheDocument();
    const inputButton = screen.getByTestId('search')
    expect(inputButton).toBeInTheDocument();
    fireEvent.change(inputButton, { target: { value: "pizza" } })
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    const card = screen.getAllByTestId('restid')
    expect(card.length).toBe(3)
  })
})
