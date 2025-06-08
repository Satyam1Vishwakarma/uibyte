import { Avatar } from "../components";

export default {
  title: "Componets/Avatar",
  component: Avatar,
};

export const Avatars = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <Avatar
        src="https://avatars.githubusercontent.com/u/124599?v=4"
        fallback="A"
      ></Avatar>
      <Avatar
        className="w-20 h-20"
        src="https://avatars.githubusercontent.com/u/124599?v=4"
        fallback="B"
      ></Avatar>
      <Avatar src="https://avatars.githubusercontent." fallback="F"></Avatar>
    </div>
  );
};
