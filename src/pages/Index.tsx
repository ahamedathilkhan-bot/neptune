import StarField from "@/components/StarField";
import NeptuneHero from "@/components/NeptuneHero";
import NeptuneFacts from "@/components/NeptuneFacts";
import NeptuneFooter from "@/components/NeptuneFooter";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-cosmic overflow-x-hidden">
      <StarField />
      <NeptuneHero />
      <NeptuneFacts />
      <NeptuneFooter />
    </div>
  );
};

export default Index;
