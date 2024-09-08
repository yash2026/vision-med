import Link from "next/link";
import WidthWrapper from "./width-wrapper";
import { Button } from "@nextui-org/react";
import navbarLinks from "@/data/navbar-links.json";
import NavbarLink from "./navbar-link";
import MenuIcon from "./menu-icon/menu-icon";
import Image from "next/image";
import widgetData from "@/data/widgets.json";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] border-b-1 h-[70px]  px-10 max-[1250px]:px-5 max-[450px]:px-1 bg-white">
      <WidthWrapper className="flex justify-between items-center h-full">
        <div className="flex-1 max-[800px]:py-2">
          <Link href={"/"}>
            <Image
              src="/logo.jpg"
              width={80}
              height={50}
              alt="img"
              className="w-20 h-auto"
            />
          </Link>
        </div>
        <div className="hidden max-[800px]:block">
          <MenuIcon />
        </div>
        <div className="flex items-center gap-6 max-[800px]:hidden h-full">
          {navbarLinks?.map((item, index) => (
            <NavbarLink navbarLink={item} key={index} />
          ))}
        </div>
        <div className="flex items-center gap-4 flex-1 justify-end max-[1200px]:hidden">
          <Link href={"tel:+91-70117-62602"}>
            <Button variant="faded">Call Us</Button>
          </Link>
          <Link href={widgetData.widgetsData.whatsapp} target="_blank">
            <Button variant="faded">Whats App</Button>
          </Link>
        </div>
      </WidthWrapper>
    </header>
  );
}
