"use state";

import type React from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Button({ className, children, ...rest }: ButtonProps) {
  //const [clicked, setClicked] = useState(false);

  return (
    <button
      className={twMerge("bg-black text-white p-2 rounded-2xl w-sm", className)}
      //animate={{ backgroundColor: clicked ? "#2563eb" : "#000000" }}
      {...rest}
    >
      {children}
    </button>
  );
}
