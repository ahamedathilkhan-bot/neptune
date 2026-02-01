import { Waves, Github, Mail, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-ocean-navy/50 border-t border-border py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Waves className="h-8 w-8 text-aqua" />
              <span className="text-2xl font-display font-bold">NEPTUNE</span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              AI-powered oceanographic disaster risk prediction platform. Using deep neural networks to predict rare catastrophic events with unprecedented accuracy.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-aqua/10 text-muted-foreground hover:text-aqua transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-aqua/10 text-muted-foreground hover:text-aqua transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-aqua/10 text-muted-foreground hover:text-aqua transition-colors">
                <FileText className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><Link to="/dashboard" className="text-muted-foreground hover:text-aqua transition-colors">Dashboard</Link></li>
              <li><Link to="/predictions" className="text-muted-foreground hover:text-aqua transition-colors">Live Predictions</Link></li>
              <li><Link to="/model" className="text-muted-foreground hover:text-aqua transition-colors">Model Performance</Link></li>
              <li><Link to="/research" className="text-muted-foreground hover:text-aqua transition-colors">Research</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-aqua transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-aqua transition-colors">API Reference</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-aqua transition-colors">Technical Paper</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-aqua transition-colors">Contact Team</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Neptune Research Platform. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-aqua transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-aqua transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
