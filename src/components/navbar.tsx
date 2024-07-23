import Link from "next/link";
import WidthWrapper from "./width-wrapper";
import { Button } from "@nextui-org/react";
import navbarLinks from "@/navbar-links.json";
import NavbarLink from "./navbar-link";
import MenuIcon from "./menu-icon/menu-icon";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-10 border-b-1  px-10 bg-white">
      <WidthWrapper className="flex justify-between items-center ">
        <div className="flex-1 max-[800px]:py-2">
          <Link href={"/"}>
            <img src="/logo.jpg" alt="img" className="w-20" />
          </Link>
        </div>
        <div className="hidden max-[800px]:block">
          <MenuIcon />
        </div>
        <div className="flex items-center gap-6 max-[800px]:hidden">
          {navbarLinks?.map((item, index) => (
            <NavbarLink navbarLink={item} key={index} />
          ))}
        </div>
        <div className="flex items-center gap-4 flex-1 justify-end max-[1200px]:hidden">
          <Button variant="faded">Call Us</Button>
          <Button variant="faded">Whats App</Button>
        </div>
      </WidthWrapper>
    </header>
  );
}
