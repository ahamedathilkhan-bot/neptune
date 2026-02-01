import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AlertLog } from "@/data/mockData";

interface AlertsTableProps {
  alerts: AlertLog[];
}

const riskBadgeColors = {
  high: 'bg-coral/20 text-coral border-coral/30',
  medium: 'bg-amber/20 text-amber border-amber/30',
  low: 'bg-turquoise/20 text-turquoise border-turquoise/30',
};

const statusBadgeColors = {
  verified: 'bg-safe/20 text-safe',
  false_alarm: 'bg-muted text-muted-foreground',
  pending: 'bg-aqua/20 text-aqua',
};

const AlertsTable = ({ alerts }: AlertsTableProps) => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-display font-semibold">Recent Alerts</h3>
        <p className="text-sm text-muted-foreground">Last 10 predictions</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-left px-6 py-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Timestamp</th>
              <th className="text-left px-6 py-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Location</th>
              <th className="text-left px-6 py-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Risk Level</th>
              <th className="text-left px-6 py-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Event Type</th>
              <th className="text-left px-6 py-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Probability</th>
              <th className="text-left px-6 py-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert, index) => (
              <motion.tr
                key={alert.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-border/50 hover:bg-muted/30 transition-colors"
              >
                <td className="px-6 py-4 text-sm font-mono text-muted-foreground">{alert.timestamp}</td>
                <td className="px-6 py-4 text-sm font-medium">{alert.location}</td>
                <td className="px-6 py-4">
                  <span className={cn("px-2.5 py-1 text-xs font-medium rounded-full border", riskBadgeColors[alert.riskLevel])}>
                    {alert.riskLevel.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">{alert.eventType}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full rounded-full",
                          alert.probability >= 60 ? 'bg-coral' : alert.probability >= 40 ? 'bg-amber' : alert.probability >= 25 ? 'bg-turquoise' : 'bg-safe'
                        )}
                        style={{ width: `${alert.probability}%` }}
                      />
                    </div>
                    <span className="text-sm font-mono">{alert.probability}%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={cn("px-2.5 py-1 text-xs font-medium rounded-full", statusBadgeColors[alert.status])}>
                    {alert.status === 'false_alarm' ? 'False Alarm' : alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default AlertsTable;
