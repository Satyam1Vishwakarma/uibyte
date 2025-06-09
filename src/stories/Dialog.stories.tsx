import { Dialog } from "../components";

export default {
  title: "Components/Dialog",
  component: Dialog,
};

export const Dialogs = () => {
  return (
    <div className="flex justify-center items-center h-full flex-col gap-4">
      <Dialog name="Click me 1">
        <h1>Do you really want to learn React</h1>
      </Dialog>
      <Dialog name="Click me 2" className="bg-red-600">
        <h1 className="text-red-600">Do don't want to learn React</h1>
      </Dialog>
    </div>
  );
};
