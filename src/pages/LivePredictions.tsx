import { motion } from "framer-motion";
import { Waves, Wind, Mountain, MapPin, Clock, Eye, Download, Search } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { predictions, Prediction } from "@/data/mockData";
import { cn } from "@/lib/utils";

const eventIcons = { tsunami: Waves, hurricane: Wind, earthquake: Mountain };
const riskColors = { high: 'border-coral bg-coral/10', medium: 'border-amber bg-amber/10', low: 'border-turquoise bg-turquoise/10', safe: 'border-safe bg-safe/10' };
const riskTextColors = { high: 'text-coral', medium: 'text-amber', low: 'text-turquoise', safe: 'text-safe' };

const PredictionCard = ({ prediction, index }: { prediction: Prediction; index: number }) => {
  const Icon = eventIcons[prediction.eventType];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={cn("glass-card rounded-2xl p-6 border-2 transition-all duration-300 cursor-pointer", riskColors[prediction.riskLevel])}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", prediction.riskLevel === 'high' ? 'bg-coral/20' : prediction.riskLevel === 'medium' ? 'bg-amber/20' : 'bg-turquoise/20')}>
            <Icon className={cn("h-6 w-6", riskTextColors[prediction.riskLevel])} />
          </div>
          <div>
            <h3 className="font-display font-semibold capitalize">{prediction.eventType}</h3>
            <p className="text-sm text-muted-foreground">{prediction.location}</p>
          </div>
        </div>
        <span className={cn("px-3 py-1 text-xs font-bold rounded-full uppercase", riskColors[prediction.riskLevel], riskTextColors[prediction.riskLevel])}>
          {prediction.riskLevel}
        </span>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-24 h-24">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="48" cy="48" r="40" fill="none" stroke="hsl(220 40% 25%)" strokeWidth="8" />
            <motion.circle cx="48" cy="48" r="40" fill="none" stroke={prediction.probability >= 60 ? '#FF6B6B' : prediction.probability >= 40 ? '#FFB74D' : '#4ECDC4'} strokeWidth="8" strokeLinecap="round" initial={{ strokeDasharray: "251.2", strokeDashoffset: 251.2 }} animate={{ strokeDashoffset: 251.2 - (251.2 * prediction.probability / 100) }} transition={{ duration: 1, delay: index * 0.05 }} />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={cn("text-2xl font-mono font-bold", riskTextColors[prediction.riskLevel])}>{prediction.probability}%</span>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2"><MapPin className="h-4 w-4" /><span>{prediction.coordinates.lat}°N, {prediction.coordinates.lng}°E</span></div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground"><Clock className="h-4 w-4" /><span>{prediction.timeWindow}</span></div>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">Contributing Factors</p>
        {prediction.contributingFactors.map((factor) => (
          <div key={factor.label} className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{factor.label}</span>
            <span className={cn("font-mono font-medium", factor.status === 'critical' ? 'text-coral' : factor.status === 'elevated' ? 'text-amber' : 'text-foreground')}>{factor.value}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border/50">
        <div className="flex items-center gap-2"><span className="text-xs text-muted-foreground">Confidence:</span><span className="text-sm font-mono font-bold text-aqua">{prediction.confidence}%</span></div>
        <div className="flex gap-2">
          <Button size="sm" variant="ghost" className="h-8 px-3"><Eye className="h-4 w-4 mr-1" />Details</Button>
          <Button size="sm" className="h-8 px-3 bg-aqua text-primary-foreground hover:bg-aqua/90">Monitor</Button>
        </div>
      </div>
    </motion.div>
  );
};

const LivePredictions = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-display font-bold">Live Predictions</h1>
            <p className="text-muted-foreground">Real-time disaster risk forecasts</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search locations..." className="pl-10 w-64 bg-muted/50 border-border" />
            </div>
            <Select defaultValue="all"><SelectTrigger className="w-40 bg-muted/50 border-border"><SelectValue placeholder="Risk Level" /></SelectTrigger><SelectContent className="bg-ocean-navy border-border"><SelectItem value="all">All Risks</SelectItem><SelectItem value="high">High Risk</SelectItem><SelectItem value="medium">Medium Risk</SelectItem><SelectItem value="low">Low Risk</SelectItem></SelectContent></Select>
            <Button variant="outline" className="border-aqua/30 text-foreground"><Download className="h-4 w-4 mr-2" />Export CSV</Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{ label: 'Active Predictions', value: predictions.length, color: 'text-aqua' }, { label: 'High Risk', value: predictions.filter(p => p.riskLevel === 'high').length, color: 'text-coral' }, { label: 'Medium Risk', value: predictions.filter(p => p.riskLevel === 'medium').length, color: 'text-amber' }, { label: 'Low Risk', value: predictions.filter(p => p.riskLevel === 'low' || p.riskLevel === 'safe').length, color: 'text-safe' }].map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="glass-card rounded-xl p-4 text-center">
              <p className={cn("text-3xl font-mono font-bold", stat.color)}>{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {predictions.map((prediction, index) => (<PredictionCard key={prediction.id} prediction={prediction} index={index} />))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LivePredictions;
