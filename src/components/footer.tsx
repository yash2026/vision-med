import Link from "next/link";
import WidthWrapper from "./width-wrapper";

export default function Footer() {
  return (
    <footer className="border-t-1 mt-auto">
      <WidthWrapper className=" flex flex-row justify-between max-[580px]:flex-col items-center py-5 gap-2">
        <div className="flex items-center gap-4 text-sm font-medium">
          <Link href={"/terms-and-conditions"} className="hover:text-blue-500">
            Terms & Conditions
          </Link>
          <Link href={"/privacy-policy"} className="hover:text-blue-500">
            Privacy Policy
          </Link>
        </div>
        <p className="text-black/60">
          © {new Date().getFullYear()} Vision MED All Rights Reserved.
        </p>
      </WidthWrapper>
    </footer>
  );
}
