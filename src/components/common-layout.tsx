import { ComponentPropsWithoutRef } from "react";

export function Root({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={`flex ${className}`} {...props}>
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
    <div className={`flex-[0.7] ${className}`} {...props}>
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
    <div className={`flex-[0.3] ${className}`} {...props}>
      {children}
    </div>
  );
}
