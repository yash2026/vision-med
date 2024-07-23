"use client";

import { NavbarLinkType } from "@/types/navbar";
import { useState } from "react";
import TruthyRenderer from "./truthy-renderer";
import Link from "next/link";
import Downarrow from "@/icons/downarrow";

export default function NavbarLink({
  navbarLink,
}: {
  navbarLink: NavbarLinkType;
}) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="relative h-full">
      <TruthyRenderer value={!!navbarLink?.path}>
        <Link
          className="text-sm text-black/80  hover:text-black h-full flex items-center"
          href={navbarLink?.path!}
        >
          {navbarLink.name}
        </Link>
      </TruthyRenderer>
      <TruthyRenderer value={!navbarLink?.path}>
        <div
          className="flex items-center h-full gap-2 text-sm text-black/80 py-5 hover:text-black"
          onMouseEnter={() => setToggle(true)}
          onMouseLeave={() => setToggle(false)}
        >
          {navbarLink?.name}
          <Downarrow width={8} height={8} />
        </div>
      </TruthyRenderer>
      <TruthyRenderer value={toggle && !navbarLink?.path}>
        <div
          onMouseLeave={() => setToggle(false)}
          onMouseEnter={() => setToggle(true)}
          className="absolute top-full max-[1200px]:right-0 min-[1200px]:left-0 shadow-xl border z-20 p-2 flex flex-col gap-2 bg-white min-w-[200px] rounded silde-up"
        >
          {navbarLink?.subPaths?.map((item, index) => (
            <Link
              key={index}
              href={item?.path!}
              className="whitespace-nowrap text-sm p-2 hover:bg-gray-100"
            >
              {item?.name}
            </Link>
          ))}
        </div>
      </TruthyRenderer>
    </div>
  );
}
