import React from "react";
import "./modal.header.scss";

export default function ModalHeader(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  return <div className="modal-header" {...props} />;
}
