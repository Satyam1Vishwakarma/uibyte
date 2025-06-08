import React from "react";

type BadgeProps = {
  children?: React.ReactNode;
  varient?: "outline" | "destructive" | "default";
};
export default function Badge(props: BadgeProps) {
  if (props.varient === "outline") {
    return (
      <div className="border border-black/35 rounded-2xl p-1 text-xs font-mono w-min">
        {props.children}
      </div>
    );
  } else if (props.varient === "destructive") {
    return (
      <div className="rounded-2xl p-1 text-xs bg-[#E2000B] text-white font-mono w-min">
        {props.children}
      </div>
    );
  }else{
    return <div className="rounded-2xl p-1 text-xs bg-black text-white font-mono w-min">
        {props.children}
      </div>
  }
}
