import { motion } from "framer-motion";
import { Brain, Target, Zap, Database, GitBranch, Layers, Shield, Smartphone, Globe, ArrowRight, Check, FileText } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const challenges = [
  { icon: Target, title: "Class Imbalance", problem: "Disaster events represent <5% of data", solution: "SMOTE oversampling + weighted loss function (3x penalty for false negatives)", result: "89% recall on rare disaster events" },
  { icon: Database, title: "Model Size", problem: "Original model: 500MB, too large for edge deployment", solution: "Weight pruning + INT8 quantization pipeline", result: "4x size reduction (120MB) with 0.3% accuracy loss" },
  { icon: Zap, title: "Real-time Inference", problem: "Latency requirements: <50ms per prediction", solution: "Batch processing + Redis caching for repeated queries", result: "12ms average response time" },
  { icon: Layers, title: "Interpretability", problem: "Black-box predictions unacceptable for safety-critical systems", solution: "SHAP values + feature importance visualization", result: "Full explainability for each prediction" },
];

const roadmap = [
  { icon: Globe, title: "Multi-source Integration", description: "Integrate satellite imagery, social media signals, and additional sensor networks", status: "in_progress" },
  { icon: GitBranch, title: "Ensemble Models", description: "Combine multiple specialized models for improved accuracy", status: "planned" },
  { icon: Shield, title: "Edge Deployment", description: "Deploy quantized models to offshore monitoring stations", status: "planned" },
  { icon: Smartphone, title: "Mobile Application", description: "Real-time alerts and predictions for coastal communities", status: "planned" },
];

const Research = () => {
  return (
    <div className="min-h-screen bg-gradient-ocean">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-aqua font-medium text-sm uppercase tracking-wider">Research Documentation</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">Technical Deep Dive into <span className="text-gradient-aqua">Neptune</span></h1>
            <p className="text-xl text-muted-foreground mb-8">Addressing the unique challenges of rare event prediction in oceanographic disaster forecasting through innovative machine learning approaches.</p>
            <div className="flex gap-4">
              <Button className="bg-aqua text-primary-foreground hover:bg-aqua/90 gap-2"><FileText className="h-4 w-4" />Download Full Paper</Button>
              <Button variant="outline" className="border-aqua/30">View GitHub Repository</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-ocean-navy/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Brain className="h-16 w-16 text-aqua mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Mission: Predict the Unpredictable</h2>
              <p className="text-lg text-muted-foreground">Oceanographic disasters—tsunamis, hurricanes, and earthquake-triggered events—occur rarely but with devastating consequences. Traditional statistical methods fail because they assume balanced datasets. Neptune's approach uses deep learning with custom techniques specifically designed for rare event prediction.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Challenges <span className="text-gradient-aqua">Addressed</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Four critical problems we solved to achieve production-grade performance</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div key={challenge.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="glass-card rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-aqua/20 flex items-center justify-center flex-shrink-0"><challenge.icon className="h-6 w-6 text-aqua" /></div>
                  <h3 className="text-xl font-display font-semibold">{challenge.title}</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-coral/10 border border-coral/30 rounded-xl"><p className="text-sm text-muted-foreground mb-1">Problem</p><p className="text-sm">{challenge.problem}</p></div>
                  <div className="p-4 bg-aqua/10 border border-aqua/30 rounded-xl"><p className="text-sm text-muted-foreground mb-1">Solution</p><p className="text-sm">{challenge.solution}</p></div>
                  <div className="flex items-center gap-2 text-safe"><Check className="h-5 w-5" /><p className="text-sm font-medium">{challenge.result}</p></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Future <span className="text-gradient-aqua">Roadmap</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Expanding Neptune's capabilities for global disaster preparedness</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="glass-card rounded-2xl p-6 relative overflow-hidden">
                {item.status === 'in_progress' && <div className="absolute top-4 right-4 px-2 py-1 bg-aqua/20 text-aqua text-xs rounded-full">In Progress</div>}
                <div className="w-12 h-12 rounded-xl bg-aqua/20 flex items-center justify-center mb-4"><item.icon className="h-6 w-6 text-aqua" /></div>
                <h3 className="text-lg font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Interested in Contributing?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Neptune is an open research project. We welcome contributions from oceanographers, data scientists, and ML engineers.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-aqua text-primary-foreground hover:bg-aqua/90 gap-2">View on GitHub <ArrowRight className="h-4 w-4" /></Button>
              <Button variant="outline" className="border-aqua/30">Contact Research Team</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Research;
