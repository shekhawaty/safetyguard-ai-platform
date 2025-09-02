import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Twitter, 
  Linkedin, 
  Youtube, 
  Mail,
  MapPin,
  Phone
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-foreground">ProtexAI</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              AI-powered workplace safety monitoring that prevents accidents before they happen. 
              Protecting workers and reducing risks with advanced computer vision technology.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Product</h4>
            <nav className="space-y-3">
              <a href="#features" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Features
              </a>
              <a href="#integrations" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Integrations
              </a>
              <a href="#pricing" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Pricing
              </a>
              <a href="#api" className="block text-muted-foreground hover:text-foreground transition-smooth">
                API Documentation
              </a>
            </nav>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Solutions</h4>
            <nav className="space-y-3">
              <a href="#construction" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Construction
              </a>
              <a href="#manufacturing" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Manufacturing
              </a>
              <a href="#logistics" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Logistics
              </a>
              <a href="#industrial" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Industrial
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">sales@protexai.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 ProtexAI. All rights reserved.
          </div>
          <nav className="flex space-x-6 text-sm">
            <a href="#privacy" className="text-muted-foreground hover:text-foreground transition-smooth">
              Privacy Policy
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-foreground transition-smooth">
              Terms of Service
            </a>
            <a href="#cookies" className="text-muted-foreground hover:text-foreground transition-smooth">
              Cookie Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;