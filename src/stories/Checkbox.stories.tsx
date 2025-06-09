import {Checkbox} from "../components";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
};

export const Checkboxes = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Checkbox>Do you agree with terms and conditions</Checkbox>
    </div>
  );
};