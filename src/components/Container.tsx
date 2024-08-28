import { ReactNode } from "react";

export default function Container({
  children,
  textAlign,
}: {
  children: ReactNode;
  textAlign?: string;
}) {
  return (
    <div className={`mt-4 ${textAlign === "center" ? "text-center" : ""}`}>
      {children}
    </div>
  );
}
