"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge"

type AvatarProps = {
  src: string;
  loading?: "lazy" | "eager";
  fallback?: string;
  className?: string;
};
export default function Avatar({
  src,
  loading = "lazy",
  fallback = "?",
  className=""
}: AvatarProps) {
  const [isloaded, setisloaded] = useState(false);

  return (
    <div className={twMerge("relative w-10 h-10 rounded-4xl border border-black/25 overflow-hidden flex justify-center items-center",className)}>
      <img ///////// image needs to mounted in dom first to fire up onload and error
        src={src}
        alt={fallback}
        loading={loading}
        onLoad={() => setisloaded(true)}
        onError={() => setisloaded(false)}
        style={{ visibility: isloaded ? "visible" : "hidden" }}
      />
      {!isloaded && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-sm font-medium text-gray-600">
          {fallback}
        </div>
      )}
    </div>
  );
}
