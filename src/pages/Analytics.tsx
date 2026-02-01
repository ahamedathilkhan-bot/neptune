import { motion } from "framer-motion";
import { Calendar, Download, TrendingUp } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AccuracyChart, EventDistributionChart, ChartCard } from "@/components/dashboard/Charts";
import RiskHeatmap from "@/components/dashboard/RiskHeatmap";
import { monthlyAccuracy, eventDistribution, hotspots } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const falseAnalysisData = [
  { month: 'Jan', falsePositives: 12, falseNegatives: 4 },
  { month: 'Feb', falsePositives: 10, falseNegatives: 3 },
  { month: 'Mar', falsePositives: 8, falseNegatives: 2 },
  { month: 'Apr', falsePositives: 9, falseNegatives: 3 },
  { month: 'May', falsePositives: 7, falseNegatives: 2 },
  { month: 'Jun', falsePositives: 8, falseNegatives: 2 },
];

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-display font-bold">Historical Analytics</h1>
            <p className="text-muted-foreground">Prediction accuracy trends and insights</p>
          </div>
          <div className="flex items-center gap-3">
            <Select defaultValue="6months"><SelectTrigger className="w-40 bg-muted/50 border-border"><Calendar className="h-4 w-4 mr-2" /><SelectValue placeholder="Time Range" /></SelectTrigger><SelectContent className="bg-ocean-navy border-border"><SelectItem value="6months">Last 6 Months</SelectItem><SelectItem value="1year">Last Year</SelectItem><SelectItem value="all">All Time</SelectItem></SelectContent></Select>
            <Button variant="outline" className="border-aqua/30 text-foreground"><Download className="h-4 w-4 mr-2" />Export Report</Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{ label: 'Total Predictions', value: '1,247', change: '+12%', positive: true }, { label: 'Correct Predictions', value: '1,174', change: '+15%', positive: true }, { label: 'False Alarms', value: '58', change: '-8%', positive: true }, { label: 'Missed Events', value: '15', change: '-23%', positive: true }].map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="glass-card rounded-xl p-5">
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-mono font-bold">{stat.value}</p>
                <span className={cn("text-sm font-medium flex items-center gap-1", stat.positive ? "text-safe" : "text-coral")}>
                  <TrendingUp className={cn("h-4 w-4", !stat.positive && "rotate-180")} />{stat.change}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <AccuracyChart data={monthlyAccuracy} />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <EventDistributionChart data={eventDistribution} />
          <ChartCard title="Error Analysis" subtitle="False positives vs false negatives over time">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={falseAnalysisData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(186 100% 50% / 0.1)" />
                  <XAxis dataKey="month" stroke="hsl(0 0% 100% / 0.5)" tick={{ fontSize: 12 }} />
                  <YAxis stroke="hsl(0 0% 100% / 0.5)" tick={{ fontSize: 12 }} />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(222 50% 18%)', border: '1px solid hsl(186 100% 50% / 0.3)', borderRadius: '8px' }} />
                  <Legend />
                  <Bar dataKey="falsePositives" name="False Positives" fill="#FFB74D" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="falseNegatives" name="False Negatives" fill="#FF6B6B" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 p-3 bg-safe/10 border border-safe/30 rounded-lg">
              <p className="text-sm text-safe">↓ 33% reduction in false negatives over 6 months</p>
            </div>
          </ChartCard>
        </div>

        <RiskHeatmap hotspots={hotspots} />
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
