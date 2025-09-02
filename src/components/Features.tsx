import { Card, CardContent } from "@/components/ui/card";
import { 
  Eye, 
  Brain, 
  Shield, 
  AlertTriangle, 
  BarChart3, 
  Clock,
  CheckCircle,
  Users
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Eye,
      title: "Computer Vision Detection",
      description: "Advanced AI cameras detect PPE compliance, unsafe behaviors, and potential hazards in real-time across your facility."
    },
    {
      icon: Brain,
      title: "Smart Risk Analysis",
      description: "Machine learning algorithms analyze patterns and predict potential safety incidents before they occur."
    },
    {
      icon: AlertTriangle,
      title: "Instant Alerts",
      description: "Immediate notifications to supervisors and workers when safety violations or dangerous situations are detected."
    },
    {
      icon: BarChart3,
      title: "Comprehensive Analytics",
      description: "Detailed safety insights, trend analysis, and compliance reporting to drive continuous improvement."
    },
    {
      icon: Shield,
      title: "24/7 Monitoring",
      description: "Continuous safety surveillance across all shifts and work zones, ensuring constant protection."
    },
    {
      icon: Clock,
      title: "Real-time Response",
      description: "Sub-second detection and alert system minimizes response time to potential safety incidents."
    },
    {
      icon: CheckCircle,
      title: "Compliance Tracking",
      description: "Automated documentation and reporting for OSHA and industry-specific safety regulations."
    },
    {
      icon: Users,
      title: "Team Integration",
      description: "Seamless integration with existing safety teams and workflow management systems."
    }
  ];

  return (
    <section id="product" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Advanced AI Safety Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive safety platform combines cutting-edge computer vision, 
            machine learning, and real-time analytics to create the safest possible workplace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;