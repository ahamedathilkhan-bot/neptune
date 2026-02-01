import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface Hotspot {
  id: number;
  name: string;
  lat: number;
  lng: number;
  risk: number;
  events: number;
}

interface RiskHeatmapProps {
  hotspots: Hotspot[];
}

const getRiskColor = (risk: number) => {
  if (risk >= 70) return 'bg-coral';
  if (risk >= 50) return 'bg-amber';
  if (risk >= 30) return 'bg-turquoise';
  return 'bg-safe';
};

const RiskHeatmap = ({ hotspots }: RiskHeatmapProps) => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-2xl p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-display font-semibold">Global Risk Heatmap</h3>
          <p className="text-sm text-muted-foreground">Real-time risk zones</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-safe" /><span className="text-muted-foreground">Low</span></div>
          <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-turquoise" /><span className="text-muted-foreground">Moderate</span></div>
          <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-amber" /><span className="text-muted-foreground">Elevated</span></div>
          <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-coral" /><span className="text-muted-foreground">High</span></div>
        </div>
      </div>

      {/* Simplified World Map */}
      <div className="relative aspect-[2/1] bg-ocean-navy/50 rounded-xl overflow-hidden border border-border">
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 360 180">
            {[30, 60, 90, 120, 150].map((y) => (
              <line key={`lat-${y}`} x1="0" y1={y} x2="360" y2={y} stroke="hsl(186 100% 50% / 0.1)" strokeWidth="0.5" />
            ))}
            {[60, 120, 180, 240, 300].map((x) => (
              <line key={`lng-${x}`} x1={x} y1="0" x2={x} y2="180" stroke="hsl(186 100% 50% / 0.1)" strokeWidth="0.5" />
            ))}
          </svg>
        </div>

        {hotspots.map((hotspot, index) => {
          const x = ((hotspot.lng + 180) / 360) * 100;
          const y = ((90 - hotspot.lat) / 180) * 100;

          return (
            <motion.div
              key={hotspot.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="absolute group cursor-pointer"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div className={cn("absolute -inset-4 rounded-full animate-ripple", getRiskColor(hotspot.risk), "opacity-30")} />
              <div className={cn("relative w-4 h-4 rounded-full flex items-center justify-center", getRiskColor(hotspot.risk), "shadow-lg")}>
                <MapPin className="h-3 w-3 text-white" />
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-ocean-navy/95 backdrop-blur-sm rounded-lg border border-border opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                <p className="text-sm font-medium">{hotspot.name}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                  <span>Risk: <span className={cn(hotspot.risk >= 70 ? "text-coral" : hotspot.risk >= 50 ? "text-amber" : "text-turquoise")}>{hotspot.risk}%</span></span>
                  <span>{hotspot.events} events</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-3">
        {hotspots.slice(0, 6).map((hotspot) => (
          <div key={hotspot.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer">
            <div className={cn("w-3 h-3 rounded-full", getRiskColor(hotspot.risk))} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{hotspot.name}</p>
              <p className="text-xs text-muted-foreground">{hotspot.events} events</p>
            </div>
            <span className={cn("text-sm font-mono font-bold", hotspot.risk >= 70 ? "text-coral" : hotspot.risk >= 50 ? "text-amber" : "text-turquoise")}>
              {hotspot.risk}%
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default RiskHeatmap;
