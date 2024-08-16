import navbarLinks from "@/data/navbar-links.json";
import { Dispatch, SetStateAction, useState } from "react";
import TruthyRenderer from "./truthy-renderer";
import Link from "next/link";

export default function NavbarMenu({
  closeState,
}: {
  closeState: Dispatch<SetStateAction<boolean>>;
}) {
  const [toggle, setToggle] = useState<string | null>(null);
  return (
    <div className="bg-white fixed top-[70px] left-0 w-screen h-[calc(100vh-70px)]  flex flex-col gap-4 p-8">
      {navbarLinks?.map((item) => (
        <>
          <TruthyRenderer value={!!item?.path}>
            <Link
              onClick={() => closeState(false)}
              href={item?.path!}
              className="font-semibold"
            >
              {item?.name}
            </Link>
          </TruthyRenderer>
          <TruthyRenderer value={!item?.path}>
            <p
              onClick={() => {
                if (toggle === null || toggle !== item.name) {
                  setToggle(item.name);
                } else {
                  setToggle(null);
                }
              }}
              className="font-semibold cursor-pointer"
            >
              {item?.name}
            </p>
            <TruthyRenderer value={toggle === item.name}>
              <div className="flex flex-col gap-2 bg-gray-100 p-2">
                {item.subPaths?.map((item, index) => (
                  <Link
                    onClick={() => closeState(false)}
                    key={index}
                    href={item.path}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </TruthyRenderer>
          </TruthyRenderer>
        </>
      ))}
    </div>
  );
}
