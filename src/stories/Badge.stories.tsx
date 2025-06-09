import {Badge} from "../components";

export default {
  title: "Components/Badge",
  component: Badge,
};

export const Badges = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <Badge>default</Badge>
      <Badge varient="outline">outline</Badge>
      <Badge varient="destructive">destructive</Badge>
    </div>
  );
};