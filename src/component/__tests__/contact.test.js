import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import About from "../About"
test('should render card', () => {
  render(<About />)
  const heading = screen.getAllByRole("heading")
  expect(heading).toBeTheDocument;
})