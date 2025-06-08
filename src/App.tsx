import { Avatar } from "./components";

function App() {
  return (
    <>
      <Avatar src="https://avatars.githubusercontent.com/u/124599?v=4" fallback="A"></Avatar>
      <Avatar className="w-20 h-20" src="https://avatars.githubusercontent.com/u/124599?v=4" fallback="B"></Avatar>
      <Avatar src="https://avatars.githubusercontent." fallback="F"></Avatar>
    </>
  );
}

export default App;
