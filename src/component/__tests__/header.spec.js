import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Header from "../Header";
describe("that all li's in header work fine", () => {
  test('should check if renedered', () => {
    //rendering header
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>)
    //querying 
    const header = screen.getByText("Cart (0)")
    //Assertion
    expect(header).toBeInTheDocument();
    expect(screen.getByTestId("status")).toBeInTheDocument()

  })
})
