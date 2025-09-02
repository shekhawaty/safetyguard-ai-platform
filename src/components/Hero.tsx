import { Button } from "@/components/ui/button";
import { Shield, PlayCircle, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-safety.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI-powered workplace safety monitoring"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4" />
                <span>AI-Powered Safety Monitoring</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Prevent Workplace 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Accidents</span> 
                <br />Before They Happen
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Advanced computer vision and AI technology that monitors your workplace 24/7, 
                instantly detecting safety violations and preventing accidents before they occur.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Free Trial
                <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.7%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">45%</div>
                <div className="text-sm text-muted-foreground">Fewer Incidents</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$2.4M</div>
                <div className="text-sm text-muted-foreground">Avg. Savings</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-2xl shadow-card p-8 backdrop-blur-sm border border-border">
              <img 
                src={heroImage} 
                alt="Workplace safety monitoring dashboard"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Safety Score</span>
                  <span className="text-lg font-bold text-accent">98.5%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-accent h-2 rounded-full w-[98.5%]"></div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Real-time monitoring active across 12 zones
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;