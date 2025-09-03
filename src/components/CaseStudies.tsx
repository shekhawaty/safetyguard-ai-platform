import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Shield, 
  Users, 
  Clock,
  ArrowRight
} from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Construction Safety Revolution",
      company: "BuildSafe Corp",
      industry: "Construction",
      result: "95% reduction in fall incidents",
      duration: "6 months",
      workers: "500+",
      comingSoon: true
    },
    {
      title: "Manufacturing Excellence",
      company: "TechPro Industries",
      industry: "Manufacturing", 
      result: "40% fewer machinery accidents",
      duration: "4 months",
      workers: "200+",
      comingSoon: true
    },
    {
      title: "Warehouse Optimization",
      company: "LogiSafe Solutions",
      industry: "Logistics",
      result: "60% reduction in forklift incidents",
      duration: "3 months", 
      workers: "150+",
      comingSoon: true
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how leading companies have transformed their workplace safety 
            with our AI-powered monitoring solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 relative overflow-hidden">
              {study.comingSoon && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                    Coming Soon
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-6 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {study.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      {study.industry}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {study.company}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {study.result}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Primary achievement
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          {study.duration}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Implementation
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          {study.workers}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Workers Protected
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full justify-between group/button"
                  disabled={study.comingSoon}
                >
                  <span>{study.comingSoon ? "Full Story Coming Soon" : "Read Full Story"}</span>
                  <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;