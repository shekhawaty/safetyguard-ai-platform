import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import cognifyLogo from "@/assets/cognify-logo.png";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <img 
                src={cognifyLogo} 
                alt="Cognify AI Consulting" 
                className="h-8 w-auto"
              />
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#product" className="text-muted-foreground hover:text-foreground transition-smooth">
                Product
              </a>
              <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-smooth">
                Solutions
              </a>
              <a href="#industries" className="text-muted-foreground hover:text-foreground transition-smooth">
                Industries
              </a>
              <a href="#resources" className="text-muted-foreground hover:text-foreground transition-smooth">
                Resources
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth">
                About
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button variant="cta" size="sm">
              Book Demo
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;