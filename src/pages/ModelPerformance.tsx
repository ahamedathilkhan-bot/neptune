import { motion } from "framer-motion";
import { Brain, Layers, Zap, Database, TrendingUp, TrendingDown, Minus, Info } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { TrainingLossChart, ModelMetricsCard, ConfusionMatrix, ChartCard } from "@/components/dashboard/Charts";
import { trainingHistory, modelMetrics } from "@/data/mockData";
import { cn } from "@/lib/utils";

const ModelPerformance = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-display font-bold">Model Performance</h1>
            <p className="text-muted-foreground">Neural network analytics and training history</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Model Version:</span>
            <span className="px-3 py-1 bg-aqua/20 text-aqua rounded-full text-sm font-medium">v3.2 (Current)</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{ label: 'Model Size', value: '120 MB', icon: Database, trend: 'down', trendValue: '4x reduced' }, { label: 'Inference Time', value: '12ms', icon: Zap, trend: 'down', trendValue: '3x faster' }, { label: 'Parameters', value: '2.4M', icon: Layers, trend: 'stable', trendValue: 'Optimized' }, { label: 'Training Epochs', value: '100', icon: Brain, trend: 'stable', trendValue: 'Early stopped' }].map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="glass-card rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <stat.icon className="h-5 w-5 text-aqua" />
                {stat.trend === 'down' ? <TrendingDown className="h-4 w-4 text-safe" /> : stat.trend === 'up' ? <TrendingUp className="h-4 w-4 text-coral" /> : <Minus className="h-4 w-4 text-muted-foreground" />}
              </div>
              <p className="text-2xl font-mono font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-xs text-aqua mt-1">{stat.trendValue}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2"><TrainingLossChart data={trainingHistory.filter((_, i) => i % 5 === 0)} /></div>
          <div><ModelMetricsCard metrics={modelMetrics} /></div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-display font-semibold mb-6">Neural Network Architecture</h3>
          <div className="flex items-center justify-between overflow-x-auto py-8 px-4">
            <div className="flex flex-col items-center min-w-[120px]">
              <div className="w-20 h-32 bg-aqua/20 rounded-xl border-2 border-aqua flex flex-col items-center justify-center">
                <span className="text-2xl font-mono font-bold text-aqua">15</span>
                <span className="text-xs text-muted-foreground">nodes</span>
              </div>
              <p className="mt-3 text-sm font-medium">Input Layer</p>
              <p className="text-xs text-muted-foreground">Oceanographic features</p>
            </div>

            <div className="flex-1 flex items-center justify-center px-4">
              <div className="w-full h-0.5 bg-gradient-to-r from-aqua via-aqua/50 to-aqua relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-aqua border-t-4 border-t-transparent border-b-4 border-b-transparent" />
              </div>
            </div>

            <div className="flex flex-col items-center min-w-[120px]">
              <div className="w-24 h-40 bg-turquoise/20 rounded-xl border-2 border-turquoise flex flex-col items-center justify-center">
                <span className="text-2xl font-mono font-bold text-turquoise">64</span>
                <span className="text-xs text-muted-foreground">nodes</span>
                <span className="text-xs text-turquoise mt-2">ReLU</span>
              </div>
              <p className="mt-3 text-sm font-medium">Hidden 1</p>
              <p className="text-xs text-muted-foreground">+ Dropout 0.3</p>
            </div>

            <div className="flex-1 flex items-center justify-center px-4">
              <div className="w-full h-0.5 bg-gradient-to-r from-turquoise via-turquoise/50 to-turquoise relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-turquoise border-t-4 border-t-transparent border-b-4 border-b-transparent" />
              </div>
            </div>

            <div className="flex flex-col items-center min-w-[120px]">
              <div className="w-20 h-32 bg-amber/20 rounded-xl border-2 border-amber flex flex-col items-center justify-center">
                <span className="text-2xl font-mono font-bold text-amber">32</span>
                <span className="text-xs text-muted-foreground">nodes</span>
                <span className="text-xs text-amber mt-2">ReLU</span>
              </div>
              <p className="mt-3 text-sm font-medium">Hidden 2</p>
              <p className="text-xs text-muted-foreground">+ Dropout 0.2</p>
            </div>

            <div className="flex-1 flex items-center justify-center px-4">
              <div className="w-full h-0.5 bg-gradient-to-r from-amber via-amber/50 to-amber relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-amber border-t-4 border-t-transparent border-b-4 border-b-transparent" />
              </div>
            </div>

            <div className="flex flex-col items-center min-w-[120px]">
              <div className="w-16 h-20 bg-safe/20 rounded-xl border-2 border-safe flex flex-col items-center justify-center">
                <span className="text-2xl font-mono font-bold text-safe">1</span>
                <span className="text-xs text-muted-foreground">node</span>
              </div>
              <p className="mt-3 text-sm font-medium">Output</p>
              <p className="text-xs text-muted-foreground">Sigmoid</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <ChartCard title="Custom Loss Function" subtitle="Weighted Binary Cross-Entropy">
            <div className="space-y-6">
              <div className="p-4 bg-muted/30 rounded-xl font-mono text-sm overflow-x-auto">
                <p className="text-aqua">L = -[w₁ · y · log(ŷ) + w₀ · (1-y) · log(1-ŷ)]</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-coral/10 border border-coral/30 rounded-xl">
                  <p className="text-sm text-muted-foreground mb-1">False Negative Weight (w₁)</p>
                  <p className="text-2xl font-mono font-bold text-coral">3.0x</p>
                  <p className="text-xs text-muted-foreground mt-1">Missing disasters penalized heavily</p>
                </div>
                <div className="p-4 bg-aqua/10 border border-aqua/30 rounded-xl">
                  <p className="text-sm text-muted-foreground mb-1">False Positive Weight (w₀)</p>
                  <p className="text-2xl font-mono font-bold text-aqua">1.0x</p>
                  <p className="text-xs text-muted-foreground mt-1">Standard weight for false alarms</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl">
                <Info className="h-5 w-5 text-aqua flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">False negatives (missing actual disasters) are weighted 3x higher than false positives to prioritize safety.</p>
              </div>
            </div>
          </ChartCard>
          <ConfusionMatrix data={modelMetrics.confusionMatrix} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ModelPerformance;
