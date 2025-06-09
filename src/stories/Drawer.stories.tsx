import { Drawer } from "../components";

export default {
  title: "Componets/Drawer",
  component: Drawer,
};

export const Drawers = () => {
  return (
    <div className="flex justify-center items-center h-full flex-col gap-4">
      <Drawer name="bottom" postion="bottom">
        <h1>Bottom Drawer</h1>
      </Drawer>
      <Drawer name="top"  postion="top">
        <h1>Top Drawer</h1>
      </Drawer>
      <Drawer name="right"  postion="right">
        <h1>Right Drawer</h1>
      </Drawer>
      <Drawer name="left"  postion="left">
        <h1>Left Drawer</h1>
      </Drawer>
    </div>
  );
};
