import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="mt-4">{children}</div>;
}
