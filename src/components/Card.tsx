import React from "react";
import { twMerge } from "tailwind-merge";

type CardProps = {
  className?: string;
  ref?: React.Ref<any>;
  children?: React.ReactNode;
};

export default function Card(props: CardProps) {
  return (
    <div
      ref={props.ref}
      className={twMerge(
        "p-7 rounded-2xl shadow shadow-black/20 border border-black/15",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
