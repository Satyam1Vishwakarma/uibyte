"use client";

import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

type InputOTPProps = {
  size: string;
  className?: string;
  onVerify?: (otp: string) => Promise<boolean>;
};

export default function Checkbox({ size, className, onVerify }: InputOTPProps) {
  const num = parseInt(size, 10);
  const refs = useRef<Array<HTMLInputElement | null>>([]);
  const [data, setData] = useState<string[]>([]);

  async function handleChange(value: any, index: any) {
    let mydata: any = [...data];
    mydata[index] = value;
    setData(mydata);

    if (index == num - 1 && onVerify) {
      //let newdata = data.join(""); Here, you are using the old data state, which has not yet been updated because setData is asynchronous. So when you join data, you get a string missing the latest entered digit.
      let newdata = mydata.join("");
      await onVerify(newdata);
    }

    refs.current[(index += 1)]?.focus();
  }

  return (
    <div className="flex justify-between gap-1.5">
      {[...Array(num)].map((_, index) => (
        <input
          ref={(el) => {
            refs.current[index] = el;
          }}
          key={index}
          className={twMerge(
            "border border-black/50 rounded-4xl size-14 text-center",
            className
          )}
          maxLength={1}
          inputMode="numeric"
          value={data[index]}
          onChange={(e) => handleChange(e.target.value, index)}
        />
      ))}
    </div>
  );
}
