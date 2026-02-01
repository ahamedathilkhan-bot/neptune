import { motion } from "framer-motion";
import { Cloud, Sun, CloudRain, CloudLightning } from "lucide-react";
import { cn } from "@/lib/utils";

interface ForecastDay {
  day: string;
  date: string;
  risk: number;
  weather: string;
}

interface ForecastTimelineProps {
  data: ForecastDay[];
}

const weatherIcons = {
  sunny: Sun,
  cloudy: Cloud,
  rain: CloudRain,
  storm: CloudLightning,
};

const getRiskColor = (risk: number) => {
  if (risk >= 60) return 'bg-coral';
  if (risk >= 40) return 'bg-amber';
  if (risk >= 25) return 'bg-turquoise';
  return 'bg-safe';
};

const ForecastTimeline = ({ data }: ForecastTimelineProps) => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-2xl p-6">
      <h3 className="text-lg font-display font-semibold mb-6">7-Day Risk Forecast</h3>
      
      <div className="grid grid-cols-7 gap-3">
        {data.map((day, index) => {
          const WeatherIcon = weatherIcons[day.weather as keyof typeof weatherIcons] || Cloud;
          const isToday = index === 0;

          return (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className={cn(
                "flex flex-col items-center p-4 rounded-xl border transition-all cursor-pointer",
                isToday ? "bg-aqua/10 border-aqua/30" : "bg-muted/30 border-border hover:border-aqua/20"
              )}
            >
              <span className={cn("text-xs font-medium mb-1", isToday ? "text-aqua" : "text-muted-foreground")}>
                {day.day}
              </span>
              <span className="text-sm text-foreground font-medium mb-3">{day.date}</span>
              <WeatherIcon className="h-6 w-6 text-muted-foreground mb-3" />
              
              <div className="w-full h-20 bg-muted/50 rounded-lg overflow-hidden relative">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${day.risk}%` }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  className={cn("absolute bottom-0 left-0 right-0 rounded-t-lg", getRiskColor(day.risk))}
                />
              </div>
              
              <span className={cn(
                "text-lg font-mono font-bold mt-2",
                day.risk >= 60 ? "text-coral" : day.risk >= 40 ? "text-amber" : day.risk >= 25 ? "text-turquoise" : "text-safe"
              )}>
                {day.risk}%
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ForecastTimeline;
