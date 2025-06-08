import { Button } from "@/components";

function App() {
  return (
    <>
      <Button>click me</Button>
      <Button className="bg-red-500">click me</Button>
      <Button className="bg-white text-black border border-black/75">click me</Button>
    </>
  );
}

export default App;
