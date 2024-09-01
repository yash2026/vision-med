import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import TruthyRenderer from "./truthy-renderer";

function PageHeading({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      {...props}
      className={`text-[44px] text-[#2f4688] py-3 font-bold max-[800px]:text-[32px] max-[500px]:text-[24px] ${className}`}
    >
      {children}
    </h2>
  );
}
type BreadcrumbsBuilderProps = {
  breads: {
    title: string;
    link: string;
  }[];
};

function BreadcrumbsBuilder({ breads }: BreadcrumbsBuilderProps) {
  return (
    <div className="flex gap-2 text-black/60">
      {breads?.map((bread, index) => (
        <>
          <TruthyRenderer value={index !== 0}>
            <span>/</span>
          </TruthyRenderer>
          <Link className="hover:text-[#2f4688]/50" href={bread?.link}>
            {bread?.title}
          </Link>
        </>
      ))}
    </div>
  );
}

export { PageHeading, BreadcrumbsBuilder };
