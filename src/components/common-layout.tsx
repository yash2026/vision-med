import { ComponentPropsWithoutRef } from "react";

export function Root({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`flex gap-5 max-[800px]:flex-col max-[800px]:gap-10 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function LeftSection({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`flex-[0.7] max-[1000px]:flex-[0.6] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function RightSection({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`flex-[0.3] max-[1000px]:flex-[0.4] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
