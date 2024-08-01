import subfooter from "@/sub-footer.json";
import Link from "next/link";
import WidthWrapper from "./width-wrapper";

function Subfooter() {
  const subfooterKeys = Object.keys(subfooter);
  console.log(subfooterKeys);
  return (
    <WidthWrapper className="mt-10">
      <div className="grid grid-cols-4 py-8">
        {subfooterKeys.map((key, index) => (
          <div key={index} className="flex flex-col gap-3">
            <h3 className="text-xl font-bold">{key}</h3>
            <div className="flex flex-col gap-3">
              {(subfooter as Record<string, { name: string; path: string }[]>)[
                key
              ]?.map((link) => (
                <Link key={link.name} href={link.path} children={link.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </WidthWrapper>
  );
}

export default Subfooter;
