import React, { ComponentPropsWithoutRef } from "react";

export default function Culture(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <style>
          {`
            .cls-1,.cls-2{fill:none;stroke:#000;stroke-linejoin:round;stroke-width:2px;}.cls-1{stroke-linecap:round;}
          `}
        </style>
      </defs>
      <g id="leather-shoes">
        <circle cx="11.1" cy="7.52" r="1.07"></circle>
        <line
          className="cls-1"
          x1="12.55"
          y1="16.05"
          x2="15.55"
          y2="19.05"
        ></line>
        <line
          className="cls-1"
          x1="15.55"
          y1="16.05"
          x2="12.55"
          y2="19.05"
        ></line>
        <circle className="cls-1" cx="23" cy="11" r="2"></circle>
        <path
          className="cls-1"
          d="M54.91,20.92c0-4.33,2-7.43,4.9-9L57.76,8.11A4.82,4.82,0,0,1,54.6,9.28a4.57,4.57,0,0,1-4.4-3.06H44.31a4.57,4.57,0,0,1-4.4,3.06A4.69,4.69,0,0,1,36.8,8.14L34.7,12.3A10,10,0,0,1,39,20.92a9.93,9.93,0,0,1-4.29,8.61l2.25,4a4.77,4.77,0,0,1,3-1A4.61,4.61,0,0,1,44.05,35h6.41a4.6,4.6,0,0,1,4.14-2.45,4.72,4.72,0,0,1,3,1l2.22-3.68C56.93,28.34,54.91,25.25,54.91,20.92Z"
        ></path>
        <path
          className="cls-1"
          d="M47.25,14.72a2.36,2.36,0,1,1,2.36-2.36A2.36,2.36,0,0,1,47.25,14.72Z"
        ></path>
        <path
          className="cls-1"
          d="M44,43A27.89,27.89,0,0,1,27,31C19,41,6,37,6,37,0,42,4,52,4,52v5.57A1.43,1.43,0,0,0,5.43,59H22.57A1.43,1.43,0,0,0,24,57.57V55s4,6,36,3c0,0,0-3.11,0-3.16C60.93,47,55.92,46,44,43Z"
        ></path>
        <path className="cls-2" d="M60,55s-20,2-33-2S4,52,4,52"></path>
        <line className="cls-1" x1="31" y1="36" x2="28" y2="39"></line>
        <line className="cls-1" x1="37" y1="41.06" x2="34" y2="44.06"></line>
        <line
          className="cls-1"
          x1="33.75"
          y1="38.69"
          x2="30.75"
          y2="41.69"
        ></line>
        <path className="cls-1" d="M4,41s9,3,17,0l13,7"></path>
        <path
          className="cls-1"
          d="M47,13v3.14A6.86,6.86,0,0,1,40.14,23H31.43A9.43,9.43,0,0,0,22,32.43v2.73"
        ></path>
      </g>
    </svg>
  );
}
