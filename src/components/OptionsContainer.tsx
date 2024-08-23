import { ReactNode } from "react";

export default function OptionsContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="[&:not(last-child)]:mb-3 p-3 border border-cool-gray rounded-lg flex-grow">
      {children}
    </div>
  );
}
