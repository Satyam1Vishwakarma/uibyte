"use client";

import { twMerge } from "tailwind-merge";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name?: string;
  type: string;
  className?:string
};

export default function Checkbox({
  name,
  type,
  className,
  ...rest
}: InputProps) {
  return (
    <div>
      <input type={type} name={name} id={name} {...rest} className={twMerge("border border-black/50 rounded-2xl p-1.5",className)}/>
    </div>
  );
}
