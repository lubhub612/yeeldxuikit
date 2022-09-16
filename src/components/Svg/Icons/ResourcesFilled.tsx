import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const fillColor = theme.isDark ? "#280D5F" : "#FFFFFF";
  return (
  
  <Svg viewBox="0 0 48 48" {...props}>
    <path           
      d="M34 40c-3.5 0-7.4 1.8-9 2.7-.6.3-1.4.3-2 0-1.5-.9-5.5-2.7-9-2.7-3.8 0-8 .6-9.6 1-.6.1-1.2 0-1.7-.4-.4-.4-.7-1-.7-1.6V13c0-.8.5-1.6 1.3-1.9C5.1 10.4 9.7 9 14 9c3.8 0 7.8 1.6 10 2.7C26.2 10.6 30.2 9 34 9c4.3 0 8.9 1.4 10.7 2.1.8.3 1.3 1 1.3 1.9v26c0 .6-.3 1.2-.7 1.5-.5.4-1.1.5-1.7.4-1.6-.3-5.8-.9-9.6-.9zM19.5 20.5c-1.7-.6-3.6-1-5.2-1-2 0-4.1.2-6.1.5-.8.1-1.6-.5-1.7-1.3-.1-.8.5-1.6 1.3-1.7 2.1-.3 4.3-.5 6.5-.5 2.1 0 4.3.5 6.2 1.2.8.3 1.2 1.1.9 1.9-.2.7-1.1 1.2-1.9.9zm0 6.5c-1.7-.6-3.6-1-5.2-1-2 0-4.1.2-6.1.5-.8.1-1.6-.5-1.7-1.3-.1-.8.5-1.6 1.3-1.7 2.1-.3 4.3-.5 6.5-.5 2.1 0 4.3.5 6.2 1.2.8.3 1.2 1.1.9 1.9-.2.7-1.1 1.1-1.9.9zm-5.2 5.4c1.7 0 3.5.4 5.2 1 .8.3 1.6-.2 1.9-.9.3-.8-.2-1.6-.9-1.9-1.9-.6-4.1-1.2-6.2-1.2-2.2 0-4.4.2-6.5.5-.8.1-1.4.9-1.3 1.7.1.8.9 1.4 1.7 1.3 2-.3 4.1-.5 6.1-.5z"
      fill-rule="evenodd"  clip-rule="evenodd"
    ></path>
    <path
      d="M38.3 26.8L34.4 30.7 30.6 26.8 28.3 29 34.4 35.1 36.7 32.9 36.7 32.9 40.6 29z"
      fill={fillColor}
    ></path>
    <path d="M27.4 25.9L26.3 27 27.4 28.1 28.5 27z" fill={fillColor}></path>
    <path d="M25.5 24L24.4 25.1 25.5 26.2 26.6 25.1z" fill={fillColor}></path>
    <path
      d="M28.5 23.2L27.4 22.1 26.3 23.2 27.4 24.3z"
      fill={fillColor}
    ></path>
    <path d="M29.3 26.2L30.4 25.1 29.4 24 28.3 25.1z" fill={fillColor}></path>
    <path d="M40.3 27.1L41.4 28.2 42.6 27.1 41.4 26z" fill={fillColor}></path>
    <path d="M38.4 25.1L39.5 26.3 40.6 25.1 39.5 24z" fill={fillColor}></path>
    <path
      d="M41.4 24.3L42.6 23.2 41.4 22.1 40.3 23.2z"
      fill={fillColor}
    ></path>
    <path d="M43.4 24L42.3 25.1 43.4 26.3 44.5 25.1z" fill={fillColor}></path>
    <path
      d="M38.3 23.5L34.4 19.6 30.6 23.5 28.3 21.2 34.4 15.1 36.7 17.3 36.7 17.3 40.6 21.2z"
      fill={fillColor}
    ></path>
    <g>
      <path
        d="M32 24.4l1.2-.3v2.4H35c.4 0 .6-.2.8-.6.1-.3.2-.5.2-.8 0-.5-.1-.8-.4-1.1-.2-.2-.4-.3-.6-.3h-3l.3-1h2.8c.7 0 1.2.3 1.6.8.3.5.5 1 .5 1.7s-.2 1.2-.6 1.7c-.4.5-.9.7-1.5.7H32v-3.2z"
        fill={fillColor}
      ></path>
    </g>
  </Svg>
);

};

export default Icon;
