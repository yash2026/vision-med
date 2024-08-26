import { ComponentPropsWithoutRef } from "react";

export default function WidthWrapper({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`w-[1200px] mx-auto max-[1250px]:w-full max-[1250px]:px-5 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
