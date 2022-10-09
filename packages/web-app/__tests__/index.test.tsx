import HomePage from "@home/index";
import { render, screen } from "./test-utils";

describe("Home Page", () => {
  it("renders a heading", () => {
    const textToFind = "Hey there";

    render(<HomePage />);

    const heading = screen.getByText(textToFind);

    expect(heading).toBeInTheDocument();
  });
});
