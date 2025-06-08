import {Accordion} from "../components";

export default {
  title: "Componets/Accordion",
  component: Accordion,
};

export const Accordions = () => {
  return (
    <>
      <Accordion name="click me 1">
        Our flagship product combines cutting-edge technology with sleek design.
        Built with premium materials, it offers unparalleled performance and reliability.
      </Accordion>
      <Accordion className="text-cyan-600" name="click me 2">
        Our flagship product combines cutting-edge technology with sleek design.
        Built with premium materials, it offers unparalleled performance and reliability.
      </Accordion>
      <Accordion className="text-blue-600" name="click me 3">
        <h1 className="text-emerald-600">Our flagship product combines cutting-edge technology with sleek design.
        Built with premium materials, it offers unparalleled performance and reliability.</h1>
      </Accordion>
    </>
  );
};
