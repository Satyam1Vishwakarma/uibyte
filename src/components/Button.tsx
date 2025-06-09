"use state";

import type React from "react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: React.ReactNode;
};

export default function Button({ className, children, ...rest }: ButtonProps) {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      className={twMerge(
        `bg-black text-white p-2 rounded-2xl w-sm  ${
          clicked ? "" : "shadow-2xl shadow-black/65"
        } `,
        className
      )}
      onMouseUp={() => setClicked(false)}
      onMouseDown={() => setClicked(true)}
      onTouchStart={() => setClicked(true)}
      onTouchEnd={() => setClicked(false)}
      {...rest}
    >
      {children}
    </button>
  );
}
