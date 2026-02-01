import { motion } from "framer-motion";
import { AlertTriangle, ChevronRight, ShieldCheck, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RiskBannerProps {
  riskLevel: 'high' | 'medium' | 'low' | 'safe';
  probability: number;
  lastUpdate: string;
  onViewDetails?: () => void;
}

const riskConfig = {
  high: {
    label: 'HIGH RISK',
    icon: ShieldAlert,
    gradient: 'from-coral/20 via-coral/10 to-transparent',
    border: 'border-coral/50',
    text: 'text-coral',
  },
  medium: {
    label: 'MODERATE RISK',
    icon: AlertTriangle,
    gradient: 'from-amber/20 via-amber/10 to-transparent',
    border: 'border-amber/50',
    text: 'text-amber',
  },
  low: {
    label: 'LOW RISK',
    icon: ShieldCheck,
    gradient: 'from-turquoise/20 via-turquoise/10 to-transparent',
    border: 'border-turquoise/50',
    text: 'text-turquoise',
  },
  safe: {
    label: 'SAFE',
    icon: ShieldCheck,
    gradient: 'from-safe/20 via-safe/10 to-transparent',
    border: 'border-safe/50',
    text: 'text-safe',
  },
};

const RiskBanner = ({ riskLevel, probability, lastUpdate, onViewDetails }: RiskBannerProps) => {
  const config = riskConfig[riskLevel];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "relative overflow-hidden rounded-2xl border p-6",
        `bg-gradient-to-r ${config.gradient}`,
        config.border
      )}
    >
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-6">
          <motion.div
            animate={riskLevel === 'high' ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={cn(
              "w-16 h-16 rounded-2xl flex items-center justify-center",
              riskLevel === 'high' ? 'bg-coral/20' : riskLevel === 'medium' ? 'bg-amber/20' : 'bg-safe/20'
            )}
          >
            <Icon className={cn("h-8 w-8", config.text)} />
          </motion.div>

          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className={cn("text-2xl font-display font-bold", config.text)}>{config.label}</span>
              {riskLevel === 'high' && (
                <span className="px-2 py-0.5 bg-coral/30 text-coral text-xs font-medium rounded-full animate-pulse">ACTIVE ALERT</span>
              )}
            </div>
            <p className="text-muted-foreground">
              Current disaster probability: <span className={cn("font-mono font-bold text-xl", config.text)}>{probability}%</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">Last prediction: {lastUpdate}</p>
          </div>
        </div>

        <Button
          onClick={onViewDetails}
          className={cn(
            "gap-2",
            riskLevel === 'high' ? 'bg-coral hover:bg-coral/90 text-white' : 'bg-aqua hover:bg-aqua/90 text-primary-foreground'
          )}
        >
          View Details
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-6 relative">
        <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${probability}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={cn(
              "h-full rounded-full",
              riskLevel === 'high' ? 'bg-coral' : riskLevel === 'medium' ? 'bg-amber' : riskLevel === 'low' ? 'bg-turquoise' : 'bg-safe'
            )}
          />
        </div>
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span>0%</span>
          <span>Safe</span>
          <span>Moderate</span>
          <span>High</span>
          <span>100%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default RiskBanner;
