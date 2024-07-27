import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import data from '../../mocks/menu.json';
import appStore from '../../utils/appStore';
import Cart from '../Cart';
import Header from '../Header';
import RestaurantPage from "../RestuarantPage";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(data) })
)


test('should render menu', async () => {
  await act(async () => render(<BrowserRouter>
    <Provider store={appStore}>
      <Header />
      <RestaurantPage />
      <Cart />
    </Provider>
  </BrowserRouter>))
  const menudata = screen.getAllByTestId("menudata")
  expect(menudata).toBeInTheDocument;
  const Accordian = screen.getAllByTestId("accordian");
  fireEvent.click(Accordian[0]);
  expect(menudata.length).toBe(20)
  const button = screen.getAllByTestId("addButton")
  expect(button[0]).toBeInTheDocument();
  fireEvent.click(button[0])
  fireEvent.click(button[1])
  expect(screen.getByText("Cart (2)")).toBeInTheDocument()
  expect(screen.getAllByTestId("menudata").length).toBe(22);
  const clearButton = screen.getByText('Clear Cart')
  fireEvent.click(clearButton)
  expect(screen.getAllByTestId("menudata").length).toBe(20);

})