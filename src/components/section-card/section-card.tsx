import { ComponentPropsWithoutRef } from "react";

function Root({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={`flex gap-5 ${className}`} {...props} />;
}

function FlexChildLayout({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return <div className={`flex-1 ${className}`} {...props} />;
}

function ContentHeading({
  className,
  ...props
}: ComponentPropsWithoutRef<"h3">) {
  return <h3 className={`font-bold text-[#2f4688] ${className}`} {...props} />;
}

export { Root, FlexChildLayout, ContentHeading };
