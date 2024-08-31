import React from "react";
import { ContentHeading } from "./section-card/section-card";
import Link from "next/link";

export type SidebarLinkCardProps = {
  heading: string;
  links: { label: string; link: string }[];
};

export default function SidebarLinkCard({
  heading,
  links,
}: SidebarLinkCardProps) {
  return (
    <div className="bg-green-100 rounded-xl p-5 flex flex-col gap-4 sticky top-[70px]">
      <ContentHeading>{heading}</ContentHeading>
      <div className="flex flex-col gap-2">
        {links?.map((link, index) => (
          <Link
            className="p-4 bg-white rounded-[100px] pl-5 border border-green-200 hover:border-white hover:bg-green-200"
            href={link?.link}
            key={index}
          >
            {link?.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
