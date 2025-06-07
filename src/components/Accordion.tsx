import React, { useState } from "react";
import { ChevronLeft, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
        className="flex w-full py-3 justify-between"
      >
        {props.name}
        <motion.div
          animate={{ rotate: collapsed ? 90 : 0 }}
          className="overflow-hidden"
        >
          {collapsed ? <ChevronDown /> : <ChevronLeft />}
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {!collapsed && (
          <motion.hr
            key="bar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full underline"
          />
        )}

        {collapsed && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div>{props.children}</div>
            <hr className="w-full underline" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
