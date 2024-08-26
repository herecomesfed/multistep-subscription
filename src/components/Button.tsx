import { createElement } from "react";
export default function Button({
  children,
  element = "button",
  hasBg = true,
  onClick,
}: {
  children: string | JSX.Element;
  element?: "a" | "button";
  hasBg?: boolean;
  onClick?: () => void;
}) {
  const ButtonTag = createElement(
    element === "button" ? "button" : "a",
    {
      className: `${
        hasBg ? "bg-marine-blue text-white px-3 py-2" : "text-cool-gray"
      }`,
      onClick: onClick,
    },
    children
  );
  return ButtonTag;
}
