import React from "react";
import "./label.scss";

export default function Label(props: React.HTMLProps<HTMLLabelElement>) {
  return <label {...props} />;
}
