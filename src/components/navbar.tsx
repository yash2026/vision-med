import Link from "next/link";
import WidthWrapper from "./width-wrapper";
import { Button } from "@nextui-org/react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-10 border-b-1 py-4 px-10">
      <WidthWrapper className="flex justify-between items-center ">
        <div className="flex-1">
          <Link href={"/"}>Logo</Link>
        </div>
        <div className="">List</div>
        <div className="flex items-center gap-4 flex-1 justify-end">
          <Button variant="faded">Call Us</Button>
          <Button variant="faded">Whats App</Button>
        </div>
      </WidthWrapper>
    </header>
  );
}
