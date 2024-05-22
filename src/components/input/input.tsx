import React from "react";
import "./input.scss";

export default function Input(props: React.HTMLProps<HTMLInputElement>) {
  return <input {...props} />;
}
