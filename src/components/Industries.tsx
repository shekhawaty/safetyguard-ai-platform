import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  HardHat, 
  Wrench, 
  Truck, 
  Factory,
  ArrowRight
} from "lucide-react";
import constructionImage from "@/assets/construction-monitoring.jpg";
import manufacturingImage from "@/assets/manufacturing-ai.jpg";

const Industries = () => {
  const industries = [
    {
      icon: HardHat,
      title: "Construction",
      description: "Monitor PPE compliance, fall protection, and equipment safety across construction sites.",
      image: constructionImage,
      benefits: ["95% reduction in fall incidents", "Real-time hard hat detection", "Equipment proximity alerts"],
      color: "text-primary"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Ensure worker safety around machinery, monitor assembly lines, and prevent accidents.",
      image: manufacturingImage,
      benefits: ["40% fewer machinery incidents", "Automated safety inspections", "Production line monitoring"],
      color: "text-accent"
    },
    {
      icon: Truck,
      title: "Logistics & Warehousing",
      description: "Track forklift operations, loading dock safety, and warehouse worker protection.",
      image: constructionImage,
      benefits: ["60% reduction in forklift accidents", "Loading zone safety", "Ergonomic monitoring"],
      color: "text-primary"
    },
    {
      icon: Wrench,
      title: "Industrial Facilities",
      description: "Monitor chemical handling, confined spaces, and high-risk industrial operations.",
      image: manufacturingImage,
      benefits: ["Enhanced chemical safety", "Confined space monitoring", "Emergency response automation"],
      color: "text-accent"
    }
  ];

  return (
    <section id="industries" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Tailored Solutions for Every Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI safety platform adapts to the unique challenges and requirements 
            of different industries, providing specialized monitoring and protection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={industry.image} 
                  alt={`${industry.title} safety monitoring`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <industry.icon className={`w-8 h-8 ${industry.color}`} />
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {industry.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {industry.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="ghost" className="group w-full justify-between p-0 h-auto">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;