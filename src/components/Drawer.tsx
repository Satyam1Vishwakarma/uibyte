"use client";

import React, { useState } from "react";
import Card from "./Card";
import { CircleX } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

type DrawerProps = {
  name: string;
  className?: string;
  children: React.ReactNode;
  postion?: "top" | "bottom" | "left" | "right";
};

export default function Drawer({
  name,
  className,
  children,
  postion = "bottom",
}: DrawerProps) {
  let [isVisible, setIsVisble] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsVisble(true)}
        className={twMerge(
          "border border-black/40 rounded-2xl p-2 bg-black text-white",
          className
        )}
      >
        {name}
      </button>
      {postion == "bottom" ? (
        <AnimatePresence initial={false}>
          {isVisible && (
            <motion.div
              key="content"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.37, ease: "easeInOut" }}
              className="fixed inset-0 z-50 h-full w-full flex justify-center items-end"
            >
              <Card className="w-full p-4 shadow-lg bg-white rounded-t-2xl">
                <div className="flex flex-col">
                  <button
                    onClick={() => setIsVisble(false)}
                    className="pb-3 self-end"
                  >
                    <CircleX />
                  </button>
                  <div>{children}</div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      ) : postion === "top" ? (
        <AnimatePresence initial={false}>
          {isVisible && (
            <motion.div
              key="content"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.37, ease: "easeInOut" }}
              className="fixed inset-0 z-50 h-full w-full flex justify-center items-start"
            >
              <Card className="w-full p-4 shadow-lg bg-white rounded-t-2xl">
                <div className="flex flex-col">
                  <button
                    onClick={() => setIsVisble(false)}
                    className="pb-3 self-end"
                  >
                    <CircleX />
                  </button>
                  <div>{children}</div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      ) : postion === "left" ? (
        <AnimatePresence initial={false}>
          {isVisible && (
            <motion.div
              key="content"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.37, ease: "easeInOut" }}
              className="fixed inset-0 z-50 w-full flex justify-start items-center"
            >
              <Card className="h-full max-w-md p-4 shadow-lg bg-white rounded-t-2xl">
                <div className="flex flex-col">
                  <button
                    onClick={() => setIsVisble(false)}
                    className="pb-3 self-end"
                  >
                    <CircleX />
                  </button>
                  <div>{children}</div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      ) : postion === "right" ? (
        <AnimatePresence initial={false}>
          {isVisible && (
            <motion.div
              key="content"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.37, ease: "easeInOut" }}
              className="fixed inset-0 z-50 w-full flex justify-end items-center"
            >
              <Card className="h-full max-w-md p-4 shadow-lg bg-white rounded-t-2xl">
                <div className="flex flex-col">
                  <button
                    onClick={() => setIsVisble(false)}
                    className="pb-3 self-end"
                  >
                    <CircleX />
                  </button>
                  <div>{children}</div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      ) : null}
    </div>
  );
}
