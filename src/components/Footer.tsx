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
import cognifyLogo from "@/assets/cognify-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={cognifyLogo} 
                alt="Cognify AI Consulting" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              AI-powered workplace safety monitoring that prevents accidents before they happen. 
              Protecting workers and reducing risks with advanced computer vision technology.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
                <a href="https://www.linkedin.com/company/cognify-consulting-inc" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
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
              <a href="#product" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Features
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Demo
              </a>
              <a href="#industries" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Solutions
              </a>
              <a href="#home" className="block text-muted-foreground hover:text-foreground transition-smooth">
                About
              </a>
            </nav>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Solutions</h4>
            <nav className="space-y-3">
              <a href="#industries" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Construction
              </a>
              <a href="#industries" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Manufacturing
              </a>
              <a href="#industries" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Logistics
              </a>
              <a href="#industries" className="block text-muted-foreground hover:text-foreground transition-smooth">
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
                <span className="text-muted-foreground">sales@cognifyai.com</span>
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
            © 2024 Cognify AI Consulting. All rights reserved.
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