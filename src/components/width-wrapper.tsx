import { ComponentPropsWithoutRef } from "react";

export default function WidthWrapper({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`w-[1200px] mx-auto max-[1210px]:w-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
