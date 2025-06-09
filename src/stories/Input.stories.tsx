import {Input} from "../components";

export default {
  title: "Components/Input",
  component: Input,
};

export const Inputs = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-y-3">
      <Input type="file"></Input>
      <Input type="color"></Input>
      <Input type="inputbox" placeholder="Inputbox"></Input>
    </div>
  );
};