import React, { ComponentPropsWithoutRef } from "react";

export default function AdmSupport(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      fill={props.fill || "currentColor"}
    >
      <title>Check, OK, mobile, phone, smartphone</title>
      <path d="M20,8.5V2.12A2.12,2.12,0,0,0,17.88,0H6.12A2.12,2.12,0,0,0,4,2.12V21.88A2.12,2.12,0,0,0,6.12,24H17.88A2.12,2.12,0,0,0,20,21.88V20.5a6.5,6.5,0,0,0,0-12ZM10,2h4V3H10Zm8,19.88a.12.12,0,0,1-.12.12H6.12A.12.12,0,0,1,6,21.88V2.12A.12.12,0,0,1,6.12,2H8V3.31A1.69,1.69,0,0,0,9.69,5h4.62A1.69,1.69,0,0,0,16,3.31V2h1.88a.12.12,0,0,1,.12.12V8a4.19,4.19,0,0,0-.5,0,6.5,6.5,0,0,0,0,13,4.19,4.19,0,0,0,.5,0ZM17.5,19A4.5,4.5,0,1,1,22,14.5,4.51,4.51,0,0,1,17.5,19Z"></path>
      <polygon points="17 14.59 15.71 13.29 14.29 14.71 17 17.41 20.71 13.71 19.29 12.29 17 14.59"></polygon>
    </svg>
  );
}
