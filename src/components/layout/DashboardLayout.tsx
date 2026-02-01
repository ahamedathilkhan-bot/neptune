import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Radio,
  History,
  LineChart,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Waves,
  RefreshCw,
  User,
  Bell,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const sidebarLinks = [
  { name: "Overview", path: "/dashboard", icon: LayoutDashboard },
  { name: "Live Predictions", path: "/predictions", icon: Radio },
  { name: "Historical Data", path: "/analytics", icon: History },
  { name: "Model Performance", path: "/model", icon: LineChart },
  { name: "Analytics", path: "/analytics", icon: BarChart3 },
  { name: "Settings", path: "/settings", icon: Settings },
];

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gradient-ocean">
      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 h-full bg-sidebar border-r border-sidebar-border z-40 transition-all duration-300",
        sidebarCollapsed ? "w-20" : "w-64"
      )}>
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
          <Link to="/" className="flex items-center gap-2">
            <Waves className="h-8 w-8 text-aqua flex-shrink-0" />
            {!sidebarCollapsed && (
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl font-display font-bold text-foreground">
                NEPTUNE
              </motion.span>
            )}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {sidebarLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative",
                  isActive ? "bg-aqua/10 text-aqua" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {isActive && (
                  <motion.div layoutId="activeSidebar" className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-aqua rounded-r-full" />
                )}
                <Icon className={cn("h-5 w-5 flex-shrink-0", isActive && "text-aqua")} />
                {!sidebarCollapsed && (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-medium">
                    {link.name}
                  </motion.span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Collapse Toggle */}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 p-2 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
        >
          {sidebarCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </button>
      </aside>

      <div className={`transition-all duration-300 ${sidebarCollapsed ? "ml-20" : "ml-64"}`}>
        {/* Top Navigation Bar */}
        <header className="sticky top-0 z-30 h-16 bg-ocean-navy/80 backdrop-blur-lg border-b border-border px-6 flex items-center justify-between">
          {/* Left - Time and Date */}
          <div className="flex items-center gap-6">
            <div>
              <p className="text-lg font-mono font-medium">{formatTime(new Date())}</p>
              <p className="text-xs text-muted-foreground">{formatDate(new Date())}</p>
            </div>
          </div>

          {/* Center - Update Status */}
          <div className="flex items-center gap-3">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="text-aqua">
              <RefreshCw className="h-4 w-4" />
            </motion.div>
            <span className="text-sm text-muted-foreground">
              Last updated: <span className="text-foreground">Just now</span>
            </span>
            <div className="w-2 h-2 rounded-full bg-safe animate-pulse" />
          </div>

          {/* Right - User Menu */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-coral text-[10px] font-bold rounded-full flex items-center justify-center">3</span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-aqua/20 flex items-center justify-center">
                    <User className="h-4 w-4 text-aqua" />
                  </div>
                  <span className="text-sm font-medium">Dr. Marina</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-ocean-navy border-border">
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Export Data</DropdownMenuItem>
                <DropdownMenuItem className="text-coral">Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
