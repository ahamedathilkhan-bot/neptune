import { motion } from "framer-motion";
import { Thermometer, Waves as WavesIcon, Activity, Gauge } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import MetricCard from "@/components/dashboard/MetricCard";
import RiskBanner from "@/components/dashboard/RiskBanner";
import ForecastTimeline from "@/components/dashboard/ForecastTimeline";
import AlertsTable from "@/components/dashboard/AlertsTable";
import RiskHeatmap from "@/components/dashboard/RiskHeatmap";
import { ModelMetricsCard, ConfusionMatrix } from "@/components/dashboard/Charts";
import { realTimeMetrics, alertLogs, weeklyForecast, modelMetrics, hotspots } from "@/data/mockData";

const metricIcons = [
  <Thermometer className="h-5 w-5" />,
  <WavesIcon className="h-5 w-5" />,
  <Activity className="h-5 w-5" />,
  <Gauge className="h-5 w-5" />,
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-display font-bold">Overview</h1>
          <p className="text-muted-foreground">Real-time oceanographic monitoring and predictions</p>
        </motion.div>

        <RiskBanner riskLevel="medium" probability={34} lastUpdate="2 minutes ago" />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {realTimeMetrics.map((metric, index) => (
            <MetricCard key={metric.label} {...metric} icon={metricIcons[index]} index={index} />
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <RiskHeatmap hotspots={hotspots} />
          </div>
          <div className="space-y-6">
            <ModelMetricsCard metrics={modelMetrics} />
          </div>
        </div>

        <ForecastTimeline data={weeklyForecast} />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-1">
            <ConfusionMatrix data={modelMetrics.confusionMatrix} />
          </div>
          <div className="xl:col-span-2">
            <AlertsTable alerts={alertLogs} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
