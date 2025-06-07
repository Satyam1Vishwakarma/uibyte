// Accordion.stories.tsx or Accordion.stories.jsx
import {Accordion} from "../components";

export default {
  title: "Accordion",         // Fix typo: 'componnent' -> 'component'
  component: Accordion,       // Use 'component' and point to the default Accordion export
};

export const DefaultAccordions = () => {
  return (
    <>
      <Accordion name="click me">
        Our flagship product combines cutting-edge technology with sleek design.
        Built with premium materials, it offers unparalleled performance and reliability.
      </Accordion>
      <Accordion name="click me">
        Our flagship product combines cutting-edge technology with sleek design.
        Built with premium materials, it offers unparalleled performance and reliability.
      </Accordion>
      <Accordion name="click me">
        Our flagship product combines cutting-edge technology with sleek design.
        Built with premium materials, it offers unparalleled performance and reliability.
      </Accordion>
    </>
  );
};
