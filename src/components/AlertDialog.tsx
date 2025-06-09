"use client"

import React, { useState } from "react";
import Card from "./Card";
import { CircleX } from 'lucide-react';
import { twMerge } from "tailwind-merge"

type AlertDialogProps = {
  name: string;
  className?: string;
  children: React.ReactNode;
};

export default function AlertDialog(props: AlertDialogProps) {
  let [isVisible, setIsVisble] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsVisble(true)}
        className={twMerge("border border-black/40 rounded-2xl p-2 bg-black text-white",props.className)}
      >
        {props.name}
      </button>
      {isVisible && (
        <div className="fixed inset-0 z-50 h-full w-full flex justify-center items-center">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm"></div>
          <Card className="fixed z-20 p-4 shadow-lg bg-white rounded-xl pt-3">
            <div className="flex flex-col">
              <button
                onClick={() => setIsVisble(false)}
                className="pb-3 self-end"
              >
                <CircleX/>
              </button>
              <div>{props.children}</div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
