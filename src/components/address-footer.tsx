import Link from "next/link";
import WidthWrapper from "./width-wrapper";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

export default function AddressFooter() {
  return (
    <WidthWrapper className="flex justify-between max-[500px]:flex-col gap-1 py-3">
      <div>
        <div>
          <span className="text-sm font-semibold text-black/50">
            <FaMapMarkerAlt className="text-black/50 mr-2 inline-block" />
            Office No. 26, Ground Floor, Pacific City Centre, Near Jat Bhawan,
            Rohtak (Hr.)
          </span>
        </div>
        <Link
          className="text-sm font-semibold text-black/50"
          href={"mailto:visionmedicos333@gmail.com"}
        >
          <FaEnvelope className="text-black/50 mr-2 inline-block" />
          visionmedicos333@gmail.com
        </Link>
      </div>
      <div className="flex flex-col text-sm font-semibold whitespace-nowrap text-black/50">
        <Link className="whitespace-nowrap" href={"tel:+91-70117-62602"}>
          <FaPhoneAlt className="text-black/50 mr-2 inline-block" />
          +91-70117-62602
        </Link>
        <Link className="whitespace-nowrap" href={"tel:+91-95881-17017"}>
          <FaPhoneAlt className="text-black/50 mr-2 inline-block" />
          +91-95881-17017
        </Link>
        <Link className="whitespace-nowrap" href={"https://wa.me/998902248111"}>
          <FaSquareWhatsapp className="text-[#45c653] mr-2 inline-block" />
          +998 90 224 81 11
        </Link>
      </div>
    </WidthWrapper>
  );
}
