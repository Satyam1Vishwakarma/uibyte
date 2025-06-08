// Accordion.stories.tsx or Accordion.stories.jsx
import {Card} from "../components";

export default {
  title: "Componets/Card",         // Fix typo: 'componnent' -> 'component'
  component: Card,       // Use 'component' and point to the default Accordion export
};

export const Cards = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <Card>Hello this my card</Card>
      <Card className="bg-blue-300">Hello this my card 2</Card>
      <Card className="bg-cyan-300 border-2">Hello this my card 3</Card>
    </div>
  );
};