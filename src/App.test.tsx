import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders create scenario heading", () => {
    render(<App />);
    const heading = screen
        .queryAllByText(/Create Scenario/i)
        .find((el) => el.tagName === "H2");
    expect(heading).toBeInTheDocument();
});

test("Renders create scenario button", () => {
    render(<App />);
    const button = screen
        .queryAllByText(/Create Scenario/i)
        .find((el) => el.tagName === "BUTTON");
    expect(button).toBeInTheDocument();
});
