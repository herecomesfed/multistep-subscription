import { ReactNode } from "react";

// interface plansData {
//   name: string;
//   pricing: {
//     monthly: number;
//     yearly: number;
//   };
//   icon?: string;
//   selected: boolean;
// }

// interface addonsData {
//   name: string;
//   description: string;
//   pricing: {
//     monthly: number;
//     yearly: number;
//   };
//   selected: boolean;
// }

export default function OptionsContainer({
  children,
  onClick,
  selected = false,
}: {
  children: ReactNode;
  onClick: () => void;
  selected: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className={`[&:not(last-child)]:mb-3 p-3 border rounded-lg flex-grow cursor-pointer ${
        selected ? "bg-magnolia border-purplish-blue" : "border-cool-gray"
      }`}
    >
      {children}
    </div>
  );
}
