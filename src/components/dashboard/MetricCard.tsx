import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: number | string;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  trendValue: string;
  status: 'normal' | 'elevated' | 'watch' | 'critical';
  history: { time: string; value: number }[];
  icon?: React.ReactNode;
  index?: number;
}

const statusColors = {
  normal: 'bg-safe/20 text-safe border-safe/30',
  elevated: 'bg-amber/20 text-amber border-amber/30',
  watch: 'bg-turquoise/20 text-turquoise border-turquoise/30',
  critical: 'bg-coral/20 text-coral border-coral/30',
};

const statusLabels = {
  normal: 'Normal',
  elevated: 'Elevated',
  watch: 'Watch',
  critical: 'Critical',
};

const chartColors = {
  normal: '#66BB6A',
  elevated: '#FFB74D',
  watch: '#4ECDC4',
  critical: '#FF6B6B',
};

const MetricCard = ({ label, value, unit, trend, trendValue, status, history, icon, index = 0 }: MetricCardProps) => {
  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 hover:border-aqua/30 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {icon && <div className="w-10 h-10 rounded-xl bg-aqua/10 flex items-center justify-center text-aqua">{icon}</div>}
          <span className="text-sm text-muted-foreground font-medium">{label}</span>
        </div>
        <span className={cn("px-2.5 py-1 text-xs font-medium rounded-full border", statusColors[status])}>
          {statusLabels[status]}
        </span>
      </div>

      <div className="flex items-end gap-2 mb-2">
        <span className="text-4xl font-mono font-bold text-foreground">{value}</span>
        <span className="text-lg text-muted-foreground mb-1">{unit}</span>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <TrendIcon className={cn("h-4 w-4", trend === 'up' ? 'text-coral' : trend === 'down' ? 'text-safe' : 'text-muted-foreground')} />
        <span className="text-sm text-muted-foreground">{trendValue}</span>
      </div>

      <div className="h-16 -mx-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={history}>
            <Line type="monotone" dataKey="value" stroke={chartColors[status]} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default MetricCard;
