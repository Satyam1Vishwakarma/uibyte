import { ChevronLeft, ChevronDown } from "lucide-react";
import { useState } from "react";

type AccordionProps = {
  name: string;
  children?: React.ReactNode;
};

export default function Accordion(props: AccordionProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="rounded-2x flex w-full py-3 justify-between"
      >
        {props.name}
        {collapsed ? <ChevronDown /> : <ChevronLeft />}
      </button>

      {!collapsed && <hr className="w-full underline" />}

      {collapsed && <div>{props.children}</div>}
      {collapsed && <hr className="w-full underline" />}
    </div>
  );
}