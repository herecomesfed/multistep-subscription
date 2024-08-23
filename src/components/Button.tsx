import { createElement } from "react";
export default function Button({
  children,
  element = "button",
  hasBg = true,
  onClick,
}: {
  children: string;
  element?: "a" | "button";
  hasBg?: boolean;
  onClick?: () => void;
}) {
  const ButtonTag = createElement(
    element === "button" ? "button" : "a",
    {
      className: `px-3 py-2 ${
        hasBg ? "bg-marine-blue text-white" : "text-cool-gray"
      }`,
      onClick,
    },
    children
  );
  return ButtonTag;
}
