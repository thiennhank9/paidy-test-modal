/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./logo.scss";

export default function Logo(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img className="logo" {...props} />;
}
