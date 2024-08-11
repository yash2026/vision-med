import React, { ComponentPropsWithoutRef } from "react";

export default function Coaching(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill={props.fill || "#000000"}
      version="1.1"
      viewBox="0 0 28.363 28.363"
      xmlSpace="preserve"
      style={{
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "optimizeQuality" as
          | "auto"
          | "crisp-edges"
          | "pixelated",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      {...props}
    >
      <g>
        <path d="M26.132,21.328l2.231-0.583L23.2,1.002L3.239,6.222H0v20.407h2.933l0.097,0.732l5.501-0.731h15.165v-2.019l2.824-0.377L26.132,21.328z M23.695,12.801l1.008,7.568l-1.008,0.263V12.801z M22.279,2.576l0.412,1.582L9.534,5.909L22.279,2.576z M22.719,5.455l0.104,0.768h-5.868L22.719,5.455z M22.406,25.34H1.29V7.512h21.116V25.34z M23.695,23.311v-1.345l1.18-0.309l0.195,1.469L23.695,23.311z M25.043,13.143l1.747,6.679l-0.829,0.217L25.043,13.143z" />
        <rect x="8.517" y="10.584" width="11.606" height="1.255" />
        <rect x="8.517" y="13.244" width="11.606" height="1.254" />
        <rect x="4.219" y="16.839" width="15.904" height="1.254" />
        <rect x="4.219" y="19.586" width="15.904" height="1.255" />
        <rect x="4.219" y="22.016" width="15.904" height="1.254" />
        <path d="M4.152,11.832c0.386,0.038,0.751-0.084,1.032-0.309c-0.156,0.037-0.318,0.056-0.487,0.039C3.879,11.483,3.28,10.757,3.36,9.939c0.032-0.33,0.173-0.623,0.381-0.852c-0.471,0.197-0.826,0.634-0.879,1.18C2.787,11.055,3.363,11.755,4.152,11.832z" />
        <path d="M3.667,10.329c0.156,0.684,0.836,1.111,1.519,0.955c0.684-0.155,1.046-0.821,0.893-1.504C5.923,9.097,5.308,8.655,4.624,8.81C3.939,8.965,3.512,9.645,3.667,10.329z" />
      </g>
    </svg>
  );
}
