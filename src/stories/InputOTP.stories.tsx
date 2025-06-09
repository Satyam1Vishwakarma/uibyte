import { rejects } from "assert";
import { InputOTP } from "../components";

export default {
  title: "Componets/InputOTP",
  component: InputOTP,
};

export const Inputs = () => {
  function verify(otp: string): Promise<boolean> {
    return new Promise((resolve) => {
      console.log("Checking OTP:", otp);
      const isValid = otp === "1234";
      console.log("Result", isValid);
      resolve(isValid);
    });
  }

  return (
    <div className="flex flex-col justify-center items-center h-full gap-y-3">
      <InputOTP size="4" onVerify={verify}></InputOTP>
      <h1 className="text-sm">Hint: Enter 1,2,3,4 and the console for logs</h1>
    </div>
  );
};
