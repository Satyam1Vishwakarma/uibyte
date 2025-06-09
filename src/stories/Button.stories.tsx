import { Button } from "../components";

export default {
  title: "Components/Button",
  component: Button,
};

export const Buttons = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <Button>deafult</Button>
      <Button className="bg-red-500">2</Button>
      <Button className="bg-white text-black border border-black/75">
        outline
      </Button>
    </div>
  );
};
