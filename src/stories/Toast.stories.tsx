import { Toast, useToast } from "../components";

export default {
  title: "Components/Toast",
  component: Toast,
};

export const Toasts = () => {
  return (
    <Toast>
      <div className="min-h-screen flex items-center justify-center">
        <Example />
      </div>
    </Toast>
  );
};

function Example() {
  const { showToast } = useToast();
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      onClick={() => showToast("Hello from Storybook!")}
    >
      Show Toast
    </button>
  );
}
