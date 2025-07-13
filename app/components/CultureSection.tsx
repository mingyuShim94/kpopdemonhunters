import CultureCard from "./CultureCard";
import { CultureItem } from "../data/culture";

interface CultureSectionProps {
  title: string;
  items: CultureItem[];
  color: "orange" | "purple" | "green" | "blue";
}

export default function CultureSection({ title, items, color }: CultureSectionProps) {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <CultureCard
              key={index}
              item={item}
              color={color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}