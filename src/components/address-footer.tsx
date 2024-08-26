import Link from "next/link";
import WidthWrapper from "./width-wrapper";

export default function AddressFooter() {
  return (
    <WidthWrapper className="flex justify-between max-[500px]:flex-col gap-1 py-3">
      <div>
        <div>
          <span className="text-sm font-semibold text-black/50">
            SCO- 76, 1st Floor, Tribune road, Sector-20C, Chandigarh.(U.T)
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
        <Link className="whitespace-nowrap" href={"tel:+91-172-4695222"}>
          +91-172-4695222
        </Link>
        <Link className="whitespace-nowrap" href={"tel:+91-92163-23222"}>
          +91-92163-23222
        </Link>
      </div>
    </WidthWrapper>
  );
}
