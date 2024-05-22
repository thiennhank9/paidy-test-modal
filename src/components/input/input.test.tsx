import TestRenderer from "react-test-renderer";
import Input from "./input";

describe("Input", () => {
  test("render Input", () => {
    const testRenderer = TestRenderer.create(<Input />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
    const testInstance = testRenderer.root;
    const input = testInstance.findByType("input");
    expect(input).toBeDefined();
  });
});
