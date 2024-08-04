import subfooter from "@/sub-footer.json";
import Link from "next/link";
import WidthWrapper from "./width-wrapper";

function Subfooter() {
  const subfooterKeys = Object.keys(subfooter);
  console.log(subfooterKeys);
  return (
    <WidthWrapper className="mt-10 max-[1250px]:px-10 max-[600px]:px-4">
      <div className="grid grid-cols-4 py-8 max-[1250px]:gap-8 max-[800px]:grid-cols-3 max-[638px]:grid-cols-2 max-[638px]:text-xs max-[600px]:gap-4">
        {subfooterKeys.map((key, index) => (
          <div key={index} className="flex flex-col gap-3">
            <h3 className="text-xl font-bold max-[500px]:text-lg">{key}</h3>
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
