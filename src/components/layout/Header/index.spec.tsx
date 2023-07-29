import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ReactElement } from "react";
import Header from ".";

type MockLinkProps = {
  children: ReactElement;
};

jest.mock(
  "next/link",
  () =>
    ({ children }: MockLinkProps) =>
      children
);

describe("Header component", () => {
  it("renders the header and its children", () => {
    const { getByText } = render(<Header />);

    expect(getByText("Police Department of Berlin")).toBeInTheDocument();
    expect(getByText("Stolen bikes")).toBeInTheDocument();
  });
});
