import { motion } from "framer-motion";
import { LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { cn } from "@/lib/utils";

const COLORS = {
  aqua: '#00F5FF',
  aquaSecondary: '#0096C7',
  coral: '#FF6B6B',
  amber: '#FFB74D',
  turquoise: '#4ECDC4',
  safe: '#66BB6A',
};

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const ChartCard = ({ title, subtitle, children, className }: ChartCardProps) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={cn("glass-card rounded-2xl p-6", className)}>
    <div className="mb-6">
      <h3 className="text-lg font-display font-semibold">{title}</h3>
      {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
    </div>
    {children}
  </motion.div>
);

interface TrainingChartProps {
  data: { epoch: number; trainingLoss: number; validationLoss: number }[];
}

export const TrainingLossChart = ({ data }: TrainingChartProps) => (
  <ChartCard title="Training History" subtitle="Loss over epochs">
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(186 100% 50% / 0.1)" />
          <XAxis dataKey="epoch" stroke="hsl(0 0% 100% / 0.5)" tick={{ fontSize: 12 }} tickLine={false} />
          <YAxis stroke="hsl(0 0% 100% / 0.5)" tick={{ fontSize: 12 }} tickLine={false} />
          <Tooltip contentStyle={{ backgroundColor: 'hsl(222 50% 18%)', border: '1px solid hsl(186 100% 50% / 0.3)', borderRadius: '8px' }} />
          <Legend />
          <Line type="monotone" dataKey="trainingLoss" name="Training Loss" stroke={COLORS.aqua} strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="validationLoss" name="Validation Loss" stroke={COLORS.amber} strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </ChartCard>
);

interface AccuracyChartProps {
  data: { month: string; accuracy: number; predictions: number; correct: number }[];
}

export const AccuracyChart = ({ data }: AccuracyChartProps) => (
  <ChartCard title="Monthly Accuracy" subtitle="Prediction accuracy over time">
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="accuracyGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={COLORS.aqua} stopOpacity={0.3} />
              <stop offset="95%" stopColor={COLORS.aqua} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(186 100% 50% / 0.1)" />
          <XAxis dataKey="month" stroke="hsl(0 0% 100% / 0.5)" tick={{ fontSize: 12 }} />
          <YAxis domain={[88, 100]} stroke="hsl(0 0% 100% / 0.5)" tick={{ fontSize: 12 }} />
          <Tooltip contentStyle={{ backgroundColor: 'hsl(222 50% 18%)', border: '1px solid hsl(186 100% 50% / 0.3)', borderRadius: '8px' }} />
          <Area type="monotone" dataKey="accuracy" stroke={COLORS.aqua} fill="url(#accuracyGradient)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </ChartCard>
);

interface DistributionChartProps {
  data: { name: string; value: number; count: number }[];
}

export const EventDistributionChart = ({ data }: DistributionChartProps) => {
  const colors = [COLORS.aqua, COLORS.turquoise, COLORS.amber];
  
  return (
    <ChartCard title="Event Distribution" subtitle="By disaster type">
      <div className="h-64 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
              {data.map((_, index) => (<Cell key={`cell-${index}`} fill={colors[index % colors.length]} />))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: 'hsl(222 50% 18%)', border: '1px solid hsl(186 100% 50% / 0.3)', borderRadius: '8px' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center gap-6 mt-4">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[index % colors.length] }} />
            <span className="text-sm text-muted-foreground">{item.name}</span>
            <span className="text-sm font-mono font-bold">{item.value}%</span>
          </div>
        ))}
      </div>
    </ChartCard>
  );
};

interface ConfusionMatrixProps {
  data: { truePositive: number; falsePositive: number; trueNegative: number; falseNegative: number };
}

export const ConfusionMatrix = ({ data }: ConfusionMatrixProps) => {
  const total = data.truePositive + data.falsePositive + data.trueNegative + data.falseNegative;
  
  const cells = [
    { label: 'True Positive', value: data.truePositive, color: 'bg-safe' },
    { label: 'False Positive', value: data.falsePositive, color: 'bg-amber' },
    { label: 'False Negative', value: data.falseNegative, color: 'bg-coral' },
    { label: 'True Negative', value: data.trueNegative, color: 'bg-aqua-secondary' },
  ];

  return (
    <ChartCard title="Confusion Matrix" subtitle="Prediction accuracy breakdown">
      <div className="grid grid-cols-2 gap-3">
        {cells.map((cell) => (
          <motion.div key={cell.label} whileHover={{ scale: 1.02 }} className={cn("p-6 rounded-xl text-center", cell.color, "bg-opacity-20 border border-white/10")}>
            <p className="text-3xl font-mono font-bold">{cell.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{cell.label}</p>
            <p className="text-xs text-muted-foreground">{((cell.value / total) * 100).toFixed(1)}%</p>
          </motion.div>
        ))}
      </div>
    </ChartCard>
  );
};

interface MetricBarProps {
  label: string;
  value: number;
  color: string;
}

export const MetricBar = ({ label, value, color }: MetricBarProps) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-lg font-mono font-bold">{value}%</span>
    </div>
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <motion.div initial={{ width: 0 }} animate={{ width: `${value}%` }} transition={{ duration: 1, ease: "easeOut" }} className="h-full rounded-full" style={{ backgroundColor: color }} />
    </div>
  </div>
);

export const ModelMetricsCard = ({ metrics }: { metrics: { accuracy: number; precision: number; recall: number; f1Score: number; auc: number } }) => (
  <ChartCard title="Key Metrics" subtitle="Model performance indicators">
    <div className="space-y-6">
      <MetricBar label="Accuracy" value={metrics.accuracy} color={COLORS.aqua} />
      <MetricBar label="Precision" value={metrics.precision} color={COLORS.turquoise} />
      <MetricBar label="Recall" value={metrics.recall} color={COLORS.amber} />
      <MetricBar label="F1-Score" value={metrics.f1Score} color={COLORS.safe} />
    </div>
    <div className="mt-6 p-4 bg-muted/30 rounded-xl text-center">
      <p className="text-sm text-muted-foreground">AUC-ROC Score</p>
      <p className="text-3xl font-mono font-bold text-aqua">{metrics.auc}</p>
    </div>
  </ChartCard>
);
