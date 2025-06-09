"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Card from "./Card";

type ToastContextType = {
  showToast: (msg: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function Toast({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (show) {
      timer = setTimeout(() => setShow(false), 2000);
    }
    return () => clearTimeout(timer);
  }, [show]);

  function showToast(msg: string) {
    setMessage(msg);
    setShow(true);
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {show && (
        <div className="fixed top-6 right-2 z-50 flex justify-end items-start">
          <Card className="p-2 rounded-none px-5">{message}</Card>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used inside ToastProvider");
  }
  return context;
}
