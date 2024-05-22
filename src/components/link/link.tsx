/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./link.scss";

export default function Link(props: React.HTMLProps<HTMLAnchorElement>) {
  return <a {...props} />;
}
