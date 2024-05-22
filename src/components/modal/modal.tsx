import React from "react";
import ModalBody from "./modal.body";
import ModalHeader from "./modal.header";
import "./modal.scss";

export default function Modal(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="modal" {...props} />;
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
