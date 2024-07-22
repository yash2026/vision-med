import React, { ComponentPropsWithoutRef } from "react";

export default function Education(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      version="1.1"
      id="Icons"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 32 32"
      style={{ enableBackground: "new 0 0 32 32" } as any}
      xmlSpace="preserve"
      {...props}
    >
      <style type="text/css">
        {`
	        .st0{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
        `}
      </style>
      <path
        className="st0"
        d="M17,13V5c0-0.6-0.4-1-1-1h-1c-1.1,0-2-0.9-2-2v0"
      ></path>
      <path className="st0" d="M3,13c0,3.9,3.1,7,7,7h0c3.9,0,7-3.1,7-7"></path>
      <path
        className="st0"
        d="M7,2L7,2c0,1.1-0.9,2-2,2H4C3.4,4,3,4.4,3,5v8"
      ></path>
      <circle className="st0" cx="25" cy="9" r="4"></circle>
      <line className="st0" x1="25" y1="9" x2="25" y2="9"></line>
      <path
        className="st0"
        d="M10,20l0,1.5c0,4.1,3.4,7.5,7.5,7.5h0c4.1,0,7.5-3.4,7.5-7.5V13"
      ></path>
    </svg>
  );
}
