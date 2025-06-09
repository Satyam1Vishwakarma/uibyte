import { InputOTP, Toast, useToast } from "../components";

export default {
  title: "Componets/InputOTP",
  component: InputOTP,
};

export const InputOTPs = () => {
  return (
    <Toast>
      <Inner></Inner>
    </Toast>
  );
};

function Inner() {
  const { showToast } = useToast();

  function verify(otp: string): Promise<boolean> {
    return new Promise((resolve) => {
      console.log("Checking OTP:", otp);
      const isValid = otp === "1234";
      console.log("Result", isValid);
      showToast("Result:" + isValid);
      resolve(isValid);
    });
  }
  return (
    <div className="flex flex-col justify-center items-center h-full gap-y-3">
      <InputOTP size="4" onVerify={verify}></InputOTP>
      <h1 className="text-sm">Hint: Enter 1,2,3,4</h1>
    </div>
  );
}
