import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-white">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Transform Your Workplace Safety?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Join hundreds of companies who have already reduced workplace accidents 
              by 45% with our AI-powered safety monitoring platform.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-accent-glow" />
                <span className="text-white/90">Free 30-day trial with full access</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-accent-glow" />
                <span className="text-white/90">Setup and training included</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-accent-glow" />
                <span className="text-white/90">Cancel anytime, no commitments</span>
              </div>
            </div>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-white">
                    Book Your Free Demo
                  </h3>
                  <p className="text-white/80">
                    See how AI can revolutionize your workplace safety in just 15 minutes
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/90">
                      Company Name
                    </label>
                    <Input 
                      placeholder="Enter your company name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/90">
                      Work Email
                    </label>
                    <Input 
                      type="email"
                      placeholder="you@company.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/90">
                      Phone Number
                    </label>
                    <Input 
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                </div>

                <Button className="w-full bg-white text-primary hover:bg-white/90 font-semibold group">
                  Schedule Free Demo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-white/70 text-center">
                  By submitting, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTA;