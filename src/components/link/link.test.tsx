import TestRenderer from "react-test-renderer";
import Link from "./link";

describe("Link", () => {
  test("render Link", () => {
    const testRenderer = TestRenderer.create(<Link />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});