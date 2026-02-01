import { motion } from "framer-motion";
import { Waves, Brain, Target, Clock, Check, ChevronRight, Radar, Cpu, Server, Container, Sigma, Network, ArrowRight, FileText, BarChart3, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const heroStats = [
  { value: "94%", label: "Accuracy", icon: Check },
  { value: "89%", label: "Recall", icon: Target },
  { value: "12ms", label: "Response Time", icon: Clock },
];

const steps = [
  { icon: Radar, title: "Data Collection", description: "Oceanographic sensors collect real-time temperature, pressure, and seismic data from global monitoring stations." },
  { icon: Brain, title: "Neural Network Analysis", description: "3-layer deep neural network with custom weighted loss function processes patterns and detects anomalies." },
  { icon: BarChart3, title: "Risk Prediction", description: "Interactive dashboard displays disaster probability, geographic hotspots, and actionable forecasts." },
];

const techStack = [
  { name: "TensorFlow", icon: Brain, color: "text-amber" },
  { name: "Flask API", icon: Server, color: "text-safe" },
  { name: "React Dashboard", icon: Cpu, color: "text-aqua" },
  { name: "Docker Deploy", icon: Container, color: "text-aqua" },
  { name: "Custom Loss", icon: Sigma, color: "text-coral" },
  { name: "Neural Nets", icon: Network, color: "text-turquoise" },
];

const features = [
  { icon: Zap, title: "Real-time Processing", description: "Process thousands of data points per second with optimized inference." },
  { icon: Shield, title: "Class Imbalance Solution", description: "SMOTE and weighted loss function handle rare disaster events effectively." },
  { icon: Target, title: "4x Model Optimization", description: "Reduced from 500MB to 120MB with minimal accuracy loss through quantization." },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-ocean overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center ocean-waves pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div animate={{ x: [0, 50, 0], y: [0, 30, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-aqua/10 rounded-full blur-3xl" />
          <motion.div animate={{ x: [0, -30, 0], y: [0, -50, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-aqua/10 border border-aqua/30 rounded-full mb-8">
              <div className="w-2 h-2 bg-aqua rounded-full animate-pulse" />
              <span className="text-sm text-aqua font-medium">Research Platform v3.2</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              AI-Powered <span className="text-gradient-aqua glow-text">Oceanographic</span> Risk Analysis
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              3-Layer Deep Neural Network predicting tsunami, hurricane, and earthquake events with <span className="text-foreground font-semibold">94% accuracy</span>
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link to="/dashboard">
                <Button size="lg" className="bg-aqua text-primary-foreground hover:bg-aqua/90 font-semibold text-lg px-8 h-14 gap-2">
                  View Live Dashboard <ChevronRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/research">
                <Button size="lg" variant="outline" className="border-aqua/30 text-foreground hover:bg-aqua/10 font-semibold text-lg px-8 h-14">Learn More</Button>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {heroStats.map((stat, index) => (
                <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + index * 0.1 }} whileHover={{ scale: 1.05, y: -5 }} className="glass-card rounded-2xl p-6 text-center animate-pulse-glow">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-aqua/20 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-aqua" />
                  </div>
                  <p className="text-3xl font-mono font-bold text-aqua">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 px-6 relative">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">How <span className="text-gradient-aqua">Neptune</span> Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">From data collection to actionable predictions in milliseconds</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-aqua/50 via-aqua to-aqua/50" />
            {steps.map((step, index) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }} className="relative">
                <div className="glass-card rounded-2xl p-8 h-full hover:border-aqua/30 transition-all duration-300">
                  <div className="absolute -top-4 left-8 w-8 h-8 bg-aqua text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">{index + 1}</div>
                  <div className="w-16 h-16 rounded-2xl bg-aqua/10 flex items-center justify-center mb-6 mt-4">
                    <step.icon className="h-8 w-8 text-aqua" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-32 px-6 bg-ocean-navy/50">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Technology <span className="text-gradient-aqua">Stack</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Built with cutting-edge machine learning and web technologies</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <motion.div key={tech.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.05, y: -5 }} className="glass-card rounded-2xl p-6 text-center hover:border-aqua/30 transition-all duration-300">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-muted/50 flex items-center justify-center ${tech.color}`}>
                  <tech.icon className="h-6 w-6" />
                </div>
                <p className="font-medium text-sm">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Impact Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-aqua font-medium text-sm uppercase tracking-wider">Research Impact</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">Solving <span className="text-gradient-aqua">Class Imbalance</span> in Rare Event Prediction</h2>
              <p className="text-lg text-muted-foreground mb-8">Disaster events represent less than 5% of oceanographic data. Our custom approach using SMOTE oversampling and weighted loss functions ensures the model prioritizes accurate disaster detection while maintaining low false positive rates.</p>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div key={feature.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-aqua/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-aqua" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link to="/research">
                <Button className="bg-aqua text-primary-foreground hover:bg-aqua/90 gap-2">
                  <FileText className="h-4 w-4" /> Read Technical Paper <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-display font-semibold mb-6">Model Optimization Journey</h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between text-sm mb-2"><span className="text-muted-foreground">Original Model</span><span className="font-mono font-bold">500 MB</span></div>
                    <div className="h-4 bg-muted rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-full bg-coral/50 rounded-full" /></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2"><span className="text-muted-foreground">After Pruning</span><span className="font-mono font-bold">320 MB</span></div>
                    <div className="h-4 bg-muted rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} whileInView={{ width: '64%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-amber/50 rounded-full" /></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2"><span className="text-muted-foreground">INT8 Quantized</span><span className="font-mono font-bold text-aqua">120 MB</span></div>
                    <div className="h-4 bg-muted rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} whileInView={{ width: '24%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }} className="h-full bg-aqua rounded-full" /></div>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-safe/10 border border-safe/30 rounded-xl">
                  <div className="flex items-center justify-between"><span className="text-safe font-medium">4x Size Reduction</span><span className="text-sm text-muted-foreground">Accuracy: 94.5% → 94.2%</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-aqua/5 to-transparent" />
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Waves className="h-16 w-16 text-aqua mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to Explore the <span className="text-gradient-aqua">Dashboard</span>?</h2>
            <p className="text-xl text-muted-foreground mb-8">Experience real-time oceanographic predictions and model analytics.</p>
            <Link to="/dashboard">
              <Button size="lg" className="bg-aqua text-primary-foreground hover:bg-aqua/90 font-semibold text-lg px-8 h-14 gap-2">Launch Dashboard <ArrowRight className="h-5 w-5" /></Button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
