import Accordion from "./components/Accordion";

///import { Button } from "./components";
function App() {
  
  return (
    <>
      <Accordion name="click me">Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.</Accordion>
      <Accordion className="text-amber-800" name="click me">Our flagship product combines cutting-edge technology with sleek design. </Accordion>
    </>
  );
}

export default App;
