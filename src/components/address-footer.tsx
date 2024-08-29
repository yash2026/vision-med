import Link from "next/link";
import WidthWrapper from "./width-wrapper";

export default function AddressFooter() {
  return (
    <WidthWrapper className="flex justify-between max-[500px]:flex-col gap-1 py-3">
      <div>
        <div>
          <span className="text-sm font-semibold text-black/50">
            Office No. 26, Ground Floor, Pacific City Centre, Near Jat Bhawan,
            Rohtak (Hr.)
          </span>
        </div>
        <Link
          className="text-sm font-semibold text-black/50"
          href={"mailto:visionmedicos333@gmail.com"}
        >
          visionmedicos333@gmail.com
        </Link>
      </div>
      <div className="flex flex-col text-sm font-semibold whitespace-nowrap text-black/50">
        <Link className="whitespace-nowrap" href={"tel:+91-70117-62602"}>
          +91-70117-62602
        </Link>
        <Link className="whitespace-nowrap" href={"tel:+91-95881-17017"}>
          +91-95881-17017
        </Link>
      </div>
    </WidthWrapper>
  );
}
