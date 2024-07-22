import React, { ComponentPropsWithoutRef } from "react";

export default function TravelIcon(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="100px"
      height="100px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xmlSpace="preserve"
      {...props}
    >
      <path
        d="M89.938,31.113c-0.638-3.626-6.058-5.703-12.096-4.635l-43.223,7.621L18.594,20l-8.206,1.445l5.631,15.931L10,38.438
	l0.579,3.284c7.725,5.414,16.918,7.172,25.527,5.654l5.752-1.016l-2.936,14.057l9.847-1.738l19.349-16.947l12.038-2.122
	C86.194,38.542,90.579,34.739,89.938,31.113z"
      ></path>
      <rect x="10" y="73.333" width="80" height="6.667"></rect>
    </svg>
  );
}
