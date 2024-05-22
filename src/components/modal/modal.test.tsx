import TestRenderer from "react-test-renderer";
import Modal from "./modal";

describe("Modal", () => {
  test("render Modal", () => {
    const testRenderer = TestRenderer.create(
      <Modal>
        <Modal.Header />
        <Modal.Body />
      </Modal>
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
