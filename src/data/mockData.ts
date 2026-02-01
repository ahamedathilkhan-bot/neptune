// Neptune Platform - Mock Data

export interface Prediction {
  id: string;
  eventType: 'tsunami' | 'hurricane' | 'earthquake';
  location: string;
  coordinates: { lat: number; lng: number };
  probability: number;
  timeWindow: string;
  riskLevel: 'high' | 'medium' | 'low' | 'safe';
  contributingFactors: {
    label: string;
    value: string;
    status: 'elevated' | 'normal' | 'critical';
  }[];
  confidence: number;
  timestamp: string;
  status: 'verified' | 'false_alarm' | 'pending';
}

export interface MetricData {
  label: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  trendValue: string;
  status: 'normal' | 'elevated' | 'watch' | 'critical';
  history: { time: string; value: number }[];
}

export interface AlertLog {
  id: string;
  timestamp: string;
  location: string;
  coordinates: string;
  riskLevel: 'high' | 'medium' | 'low';
  eventType: string;
  probability: number;
  status: 'verified' | 'false_alarm' | 'pending';
}

export const predictions: Prediction[] = [
  {
    id: '1',
    eventType: 'tsunami',
    location: 'Indian Ocean',
    coordinates: { lat: 6.9, lng: 79.8 },
    probability: 67,
    timeWindow: 'Next 24-48 hours',
    riskLevel: 'high',
    contributingFactors: [
      { label: 'Water Temp Anomaly', value: '+3.2°C', status: 'critical' },
      { label: 'Wave Height', value: '6.8m', status: 'elevated' },
      { label: 'Seismic Activity', value: '4.2 Richter', status: 'elevated' },
    ],
    confidence: 87,
    timestamp: '2025-02-01T10:30:00Z',
    status: 'pending',
  },
  {
    id: '2',
    eventType: 'hurricane',
    location: 'Atlantic Basin',
    coordinates: { lat: 25.7, lng: -80.1 },
    probability: 42,
    timeWindow: 'Next 3-5 days',
    riskLevel: 'medium',
    contributingFactors: [
      { label: 'Atmospheric Pressure', value: '992 hPa', status: 'elevated' },
      { label: 'Wind Speed', value: '85 km/h', status: 'elevated' },
      { label: 'Sea Surface Temp', value: '29.5°C', status: 'normal' },
    ],
    confidence: 74,
    timestamp: '2025-02-01T09:15:00Z',
    status: 'pending',
  },
  {
    id: '3',
    eventType: 'earthquake',
    location: 'Pacific Ring of Fire',
    coordinates: { lat: 35.6, lng: 139.6 },
    probability: 28,
    timeWindow: 'Next 7 days',
    riskLevel: 'low',
    contributingFactors: [
      { label: 'Seismic Activity', value: '2.8 Richter', status: 'normal' },
      { label: 'Depth', value: '15 km', status: 'normal' },
      { label: 'Tectonic Stress', value: 'Moderate', status: 'elevated' },
    ],
    confidence: 65,
    timestamp: '2025-02-01T08:00:00Z',
    status: 'pending',
  },
];

export const realTimeMetrics: MetricData[] = [
  {
    label: 'Water Temperature',
    value: 28.5,
    unit: '°C',
    trend: 'up',
    trendValue: '+0.3° from avg',
    status: 'normal',
    history: [
      { time: '00:00', value: 27.8 },
      { time: '04:00', value: 27.5 },
      { time: '08:00', value: 28.0 },
      { time: '12:00', value: 28.8 },
      { time: '16:00', value: 28.5 },
      { time: '20:00', value: 28.2 },
      { time: 'Now', value: 28.5 },
    ],
  },
  {
    label: 'Wave Height',
    value: 4.2,
    unit: 'm',
    trend: 'up',
    trendValue: '+1.1m from avg',
    status: 'elevated',
    history: [
      { time: '00:00', value: 2.8 },
      { time: '04:00', value: 3.2 },
      { time: '08:00', value: 3.8 },
      { time: '12:00', value: 4.5 },
      { time: '16:00', value: 4.2 },
      { time: '20:00', value: 3.9 },
      { time: 'Now', value: 4.2 },
    ],
  },
  {
    label: 'Seismic Activity',
    value: 2.1,
    unit: 'Richter',
    trend: 'stable',
    trendValue: 'Stable',
    status: 'normal',
    history: [
      { time: '00:00', value: 1.8 },
      { time: '04:00', value: 2.0 },
      { time: '08:00', value: 2.2 },
      { time: '12:00', value: 2.1 },
      { time: '16:00', value: 1.9 },
      { time: '20:00', value: 2.0 },
      { time: 'Now', value: 2.1 },
    ],
  },
  {
    label: 'Atmospheric Pressure',
    value: 1013,
    unit: 'hPa',
    trend: 'down',
    trendValue: '-5 hPa',
    status: 'watch',
    history: [
      { time: '00:00', value: 1018 },
      { time: '04:00', value: 1017 },
      { time: '08:00', value: 1016 },
      { time: '12:00', value: 1014 },
      { time: '16:00', value: 1013 },
      { time: '20:00', value: 1012 },
      { time: 'Now', value: 1013 },
    ],
  },
];

export const alertLogs: AlertLog[] = [
  { id: '1', timestamp: '2025-02-01 10:30', location: 'Indian Ocean', coordinates: '6.9°N, 79.8°E', riskLevel: 'high', eventType: 'Tsunami', probability: 67, status: 'pending' },
  { id: '2', timestamp: '2025-02-01 09:15', location: 'Atlantic Basin', coordinates: '25.7°N, 80.1°W', riskLevel: 'medium', eventType: 'Hurricane', probability: 42, status: 'pending' },
  { id: '3', timestamp: '2025-02-01 08:00', location: 'Pacific Ring', coordinates: '35.6°N, 139.6°E', riskLevel: 'low', eventType: 'Earthquake', probability: 28, status: 'pending' },
];

export const weeklyForecast = [
  { day: 'Today', date: 'Feb 1', risk: 34, weather: 'cloudy' },
  { day: 'Sun', date: 'Feb 2', risk: 42, weather: 'storm' },
  { day: 'Mon', date: 'Feb 3', risk: 38, weather: 'cloudy' },
  { day: 'Tue', date: 'Feb 4', risk: 28, weather: 'sunny' },
  { day: 'Wed', date: 'Feb 5', risk: 25, weather: 'sunny' },
  { day: 'Thu', date: 'Feb 6', risk: 31, weather: 'cloudy' },
  { day: 'Fri', date: 'Feb 7', risk: 22, weather: 'sunny' },
];

export const modelMetrics = {
  accuracy: 94.2,
  precision: 91.5,
  recall: 89.3,
  f1Score: 90.4,
  auc: 0.92,
  confusionMatrix: {
    truePositive: 892,
    falsePositive: 83,
    trueNegative: 9847,
    falseNegative: 125,
  },
};

export const trainingHistory = Array.from({ length: 100 }, (_, i) => ({
  epoch: i + 1,
  trainingLoss: 0.8 * Math.exp(-i * 0.05) + 0.05 + Math.random() * 0.02,
  validationLoss: 0.85 * Math.exp(-i * 0.045) + 0.08 + Math.random() * 0.03,
}));

export const monthlyAccuracy = [
  { month: 'Jan', accuracy: 92.1, predictions: 185, correct: 170 },
  { month: 'Feb', accuracy: 93.5, predictions: 168, correct: 157 },
  { month: 'Mar', accuracy: 94.8, predictions: 201, correct: 191 },
  { month: 'Apr', accuracy: 94.2, predictions: 195, correct: 184 },
  { month: 'May', accuracy: 95.1, predictions: 212, correct: 202 },
  { month: 'Jun', accuracy: 94.2, predictions: 198, correct: 187 },
];

export const eventDistribution = [
  { name: 'Tsunamis', value: 35, count: 437 },
  { name: 'Hurricanes', value: 42, count: 524 },
  { name: 'Earthquakes', value: 23, count: 286 },
];

export const hotspots = [
  { id: 1, name: 'Pacific Ring of Fire', lat: 35, lng: 140, risk: 85, events: 312 },
  { id: 2, name: 'Indian Ocean', lat: 0, lng: 80, risk: 72, events: 245 },
  { id: 3, name: 'Caribbean Basin', lat: 18, lng: -75, risk: 65, events: 198 },
  { id: 4, name: 'Mediterranean', lat: 36, lng: 20, risk: 48, events: 124 },
  { id: 5, name: 'Gulf of Mexico', lat: 25, lng: -90, risk: 55, events: 167 },
];
