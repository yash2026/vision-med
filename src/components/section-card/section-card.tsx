import { ComponentPropsWithoutRef } from "react";

function Root({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`flex gap-10 max-[950px]:flex-col text-justify ${className}`}
      {...props}
    />
  );
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
  return (
    <h3
      className={`font-bold leading-8 text-[#2f4688] ${className}`}
      {...props}
    />
  );
}
function Paragraph({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return <p className={`leading-7 text-sm ${className}`} {...props} />;
}
export { Root, FlexChildLayout, ContentHeading, Paragraph };
