import { Toast, useToast } from "../components";

export default {
  title: "Componets/Toast",
  component: Toast,
};

export const Toasts = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-y-3">
      <Toast>
        <Example />
      </Toast>
    </div>
  );
};

function Example() {
  const { showToast } = useToast();
  return (
    <button onClick={() => showToast("Hello from Storybook!")}>
      Show Toast
    </button>
  );
}
