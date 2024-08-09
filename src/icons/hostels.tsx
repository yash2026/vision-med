import React, { ComponentPropsWithoutRef } from "react";

export default function Hostels(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      {...props}
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
    >
      <defs>
        <style>
          {`.cls-1, .cls-2 {
            fill: none;
            stroke: #020202;
            stroke-miterlimit: 10;
            stroke-width: 1.92px;
          }
          .cls-2 {
            stroke-linecap: square;
          }`}
        </style>
      </defs>
      <g id="office">
        <line className="cls-1" x1="11.04" y1="14.88" x2="12.96" y2="14.88" />
        <line className="cls-1" x1="11.04" y1="11.04" x2="12.96" y2="11.04" />
        <line className="cls-1" x1="11.04" y1="7.21" x2="12.96" y2="7.21" />
        <line className="cls-1" x1="7.21" y1="14.88" x2="9.13" y2="14.88" />
        <line className="cls-1" x1="7.21" y1="11.04" x2="9.13" y2="11.04" />
        <line className="cls-1" x1="7.21" y1="7.21" x2="9.13" y2="7.21" />
        <line className="cls-1" x1="14.88" y1="14.88" x2="16.79" y2="14.88" />
        <line className="cls-1" x1="14.88" y1="11.04" x2="16.79" y2="11.04" />
        <line className="cls-1" x1="14.88" y1="7.21" x2="16.79" y2="7.21" />
        <rect className="cls-2" x="9.13" y="18.71" width="5.75" height="3.83" />
        <line className="cls-1" x1="23.5" y1="22.54" x2="0.5" y2="22.54" />
        <polygon
          className="cls-2"
          points="16.79 3.38 16.79 1.46 7.21 1.46 7.21 3.38 4.33 3.38 4.33 22.54 19.67 22.54 19.67 3.38 16.79 3.38"
        />
      </g>
    </svg>
  );
}
