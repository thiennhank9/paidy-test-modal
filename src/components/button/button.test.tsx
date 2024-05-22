import TestRenderer from "react-test-renderer";
import Button from "./button";

describe("Button", () => {
  test("render Button", () => {
    const testRenderer = TestRenderer.create(<Button />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
    const testInstance = testRenderer.root;
    const button = testInstance.findByType("button");
    expect(button).toBeDefined();
  });
});
