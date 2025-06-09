"use client";

import React, { useState } from "react";

type CheckboxProps = {
  name?: string;
  children: React.ReactNode;
};

export default function Checkbox({ name, children }: CheckboxProps) {
  let [isClicked, setIsClicked] = useState(false);

  return (
    <div className="flex" onClick={() => setIsClicked((prev) => !prev)}>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={isClicked}
        readOnly
      />
      <span className="ml-1">{children}</span>
    </div>
  );
}
