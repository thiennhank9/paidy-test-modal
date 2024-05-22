import TestRenderer from "react-test-renderer";
import Label from "./label";

describe("Label", () => {
  test("render Label", () => {
    const testRenderer = TestRenderer.create(<Label />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
    const testInstance = testRenderer.root;
    const label = testInstance.findByType("label");
    expect(label).toBeDefined();
  });
});
