import { render } from "@testing-library/react";
import DefaultLayout from "../DefaultLayout";
import "@testing-library/jest-dom";

jest.mock("../Header", () => () => <div>Mocked Header</div>);

describe("DefaultLayout component", () => {
  it("should render children within the main element", () => {
    const { getByText } = render(
      <DefaultLayout>
        <div>Test Children</div>
      </DefaultLayout>
    );

    const mainElement = getByText("Test Children");
    expect(mainElement).toBeInTheDocument();
  });

  it("should render the Header component", () => {
    const { getByText } = render(
      <DefaultLayout>
        <div>Test Children</div>
      </DefaultLayout>
    );

    const headerElement = getByText("Mocked Header");
    expect(headerElement).toBeInTheDocument();
  });
});
