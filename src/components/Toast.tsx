"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Card from "./Card";
import { createPortal } from "react-dom";

type ToastContextType = {
  showToast: (msg: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function Toast({ children }: { children?: ReactNode }) {
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
      {typeof window !== "undefined" &&
        createPortal(
          show ? (
            <div className="fixed top-6 right-2 z-[9999] flex justify-end items-start pointer-events-none">
              <Card className="p-2 rounded-none px-5 pointer-events-auto">
                {message}
              </Card>
            </div>
          ) : null,
          document.body
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
