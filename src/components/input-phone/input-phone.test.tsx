import TestRenderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import InputPhone, { containOnlyNumbersAndDashes } from "./input-phone";

describe("InputPhone", () => {
  test("containOnlyNumbersAndDashes", () => {
    expect(containOnlyNumbersAndDashes("1")).toBe(true);
    expect(containOnlyNumbersAndDashes("1-")).toBe(true);
    expect(containOnlyNumbersAndDashes("ab")).toBe(false);
    expect(containOnlyNumbersAndDashes("ab1-")).toBe(false);
    expect(containOnlyNumbersAndDashes("+/*&^%$#@!")).toBe(false);
  });

  test("render InputPhone", () => {
    const testRenderer = TestRenderer.create(<InputPhone />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
    const testInstance = testRenderer.root;
    const input = testInstance.findByType("input");
    expect(input).toBeDefined();
    expect(input.props.onKeyPress).toBeDefined();
    expect(input.props.onPaste).toBeDefined();
  });

  test("can not key press non digit or dash", () => {
    const utils = render(<InputPhone />);
    const inputPhone: any = utils.getByLabelText("input-phone");
    fireEvent.keyPress(inputPhone, {
      key: "a",
      keyCode: "65",
    });
    expect(inputPhone.value).toBe("");
  });
});
