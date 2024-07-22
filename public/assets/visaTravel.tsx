import React, { ComponentPropsWithoutRef } from "react";

export default function VisaTravel(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs>
        <style>
          {`
        .a{fill:none; stroke:#000; stroke-miterlimit:10;}
        `}
        </style>
      </defs>
      <title>plane-trip-international</title>
      <path
        className="a"
        d="M11.684,17.658,9.261,16.574a.5.5,0,0,0-.453.023l-1.073.617a.5.5,0,0,0-.022.854l3.657,2.36a.5.5,0,0,0,.454.045l4.3-1.7-1.451,3.768a.5.5,0,0,0,.7.623l.967-.5a.5.5,0,0,0,.208-.2l2.7-4.928L22.7,16.011a1.278,1.278,0,0,0-.989-2.357Z"
      ></path>
      <path
        className="a"
        d="M18.034,15.123l-3.827-2.4a.5.5,0,0,0-.5-.021l-1.026.53a.5.5,0,0,0-.048.861l2.989,1.988"
      ></path>
      <path className="a" d="M6.541,15.628a7.5,7.5,0,1,1,8.993-7.352"></path>
      <path
        className="a"
        d="M3.362,14.137l.672-3.361h.72a1,1,0,0,0,.97-1.242l-.5-2a1,1,0,0,0-.97-.758H.685"
      ></path>
      <path
        className="a"
        d="M14.024,3.776H11.315a1,1,0,0,0-.97.758l-.5,2a1,1,0,0,0,.97,1.242h1.053l.527,3.165"
      ></path>
    </svg>
  );
}
