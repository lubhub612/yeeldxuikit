import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
      d="M9.19727 10.4082L11.9449 13.737"
      stroke="#8F9BB7"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.25 5.98016C11.25 8.86635 8.90184 11.2103 6 11.2103C3.09816 11.2103 0.75 8.86635 0.75 5.98016C0.75 3.09396 3.09816 0.75 6 0.75C8.90184 0.75 11.25 3.09396 11.25 5.98016Z"
      stroke="#8F9BB7"
      strokeWidth="1.5"
    />
    </Svg>
  );
};

export default Icon;
