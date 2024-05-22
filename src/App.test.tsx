import TestRenderer from "react-test-renderer";
import App from "./App";

describe("App", () => {
  test("render App", () => {
    const testRenderer = TestRenderer.create(<App />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
    const testInstance = testRenderer.root;
    expect(testInstance.findAllByType("input").length).toBe(2);
    expect(testInstance.findByType("button")).toBeDefined();
  });
});