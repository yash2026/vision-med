import { ReactNode } from "react";

export default function TruthyRenderer({
  value,
  children,
}: {
  children: ReactNode;
  value: boolean;
}) {
  if (!value) return null;
  return children;
}
