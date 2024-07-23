import CrossIcon from "@/icons/cross-icon";
import { Dispatch, SetStateAction } from "react";

export default function NavbarMenu({
  setToggle,
}: {
  setToggle: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="bg-white fixed top-0 left-0 w-screen h-screen">
      <div className="flex items-center justify-between px-5 py-4">
        <img src="/logo.jpg" alt="img" className="w-20" />

        <CrossIcon onClick={() => setToggle(false)} width={40} height={40} />
      </div>
    </div>
  );
}
