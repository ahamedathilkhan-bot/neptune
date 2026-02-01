import { motion } from "framer-motion";
import FactCard from "./FactCard";
import { Globe, Thermometer, Wind, Moon, Clock, Orbit } from "lucide-react";

const facts = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Diameter",
    value: "49,528 km",
    description: "Nearly 4 times wider than Earth, making it the fourth-largest planet in our solar system.",
  },
  {
    icon: <Thermometer className="w-6 h-6" />,
    title: "Temperature",
    value: "-214°C",
    description: "One of the coldest places in the solar system, with freezing methane, ammonia, and water clouds.",
  },
  {
    icon: <Wind className="w-6 h-6" />,
    title: "Wind Speed",
    value: "2,100 km/h",
    description: "The fastest winds in the solar system, creating massive storms that dwarf hurricanes on Earth.",
  },
  {
    icon: <Moon className="w-6 h-6" />,
    title: "Moons",
    value: "16",
    description: "Including Triton, the largest moon that orbits in the opposite direction of Neptune's rotation.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Day Length",
    value: "16 Hours",
    description: "Neptune rotates quickly despite its massive size, completing a day faster than Earth.",
  },
  {
    icon: <Orbit className="w-6 h-6" />,
    title: "Distance",
    value: "4.5B km",
    description: "Orbiting 30 times farther from the Sun than Earth, a year on Neptune lasts 165 Earth years.",
  },
];

const NeptuneFacts = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Discover the <span className="text-gradient-neptune">Ice Giant</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Neptune, the eighth and farthest known planet from the Sun, 
            holds mysteries that continue to captivate astronomers worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, index) => (
            <FactCard key={fact.title} {...fact} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeptuneFacts;
