import { AlertDialog } from "../components";

export default {
  title: "Components/AlertDialog",
  component: AlertDialog,
};

export const AlertDialogs = () => {
  return (
    <div className="flex justify-center items-center h-full flex-col gap-4">
      <AlertDialog name="Click me 1">
        <h1>Do you really want to learn React</h1>
      </AlertDialog>
      <AlertDialog name="Click me 2" className="bg-red-600">
        <h1 className="text-red-600">Do don't want to learn React</h1>
      </AlertDialog>
    </div>
  );
};
