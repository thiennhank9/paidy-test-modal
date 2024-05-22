import TestRenderer from "react-test-renderer";
import Logo from "./logo";

describe("Logo", () => {
  test("render Logo", () => {
    const testRenderer = TestRenderer.create(<Logo />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});