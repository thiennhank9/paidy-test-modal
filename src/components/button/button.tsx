import React from "react";
import "./button.scss";

export default function Button(props: React.HTMLAttributes<HTMLButtonElement>) {
  return <button {...props} />;
}
