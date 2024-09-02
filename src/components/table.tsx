import { ComponentPropsWithoutRef } from "react";

function TableRow({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={`flex bg-gray-100 border ${className}`} {...props} />;
}
function TableCell({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <p className={`flex-1 p-2 text-sm ${className}`} {...props} />;
}
export { TableRow, TableCell };
