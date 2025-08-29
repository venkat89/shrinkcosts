import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, CheckCircle, Users, TrendingDown, Award } from "lucide-react";

const Hero = () => {
  const stats = [
    { label: "Companies Optimized", value: "500+", icon: Users },
    { label: "Average Savings", value: "35%", icon: TrendingDown },
    { label: "Total Savings", value: "$50M+", icon: Award }
  ];

  const benefits = [
    "Real-time cost monitoring & alerts",
    "Automated optimization recommendations", 
    "Multi-cloud cost management",
    "SaaS subscription optimization"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Trust Badge */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Trusted by 500+ Companies</span>
            </div>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Reduce Cloud Costs by
            <span className="bg-gradient-hero bg-clip-text text-transparent"> 35% Average</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert FinOps strategies, automated tools, and proven frameworks to optimize your cloud infrastructure and SaaS spending. Join companies saving millions annually.
          </p>

          {/* Benefits List */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg"
            >
              Start Free Cost Analysis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg border-primary/20 hover:border-primary/40 hover:bg-primary/5"
            >
              View Case Studies
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-accent mr-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">Trusted by leading companies</p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
              <div className="text-lg font-semibold text-muted-foreground">Stripe</div>
              <div className="text-lg font-semibold text-muted-foreground">Shopify</div>
              <div className="text-lg font-semibold text-muted-foreground">Netflix</div>
              <div className="text-lg font-semibold text-muted-foreground">Airbnb</div>
              <div className="text-lg font-semibold text-muted-foreground">Slack</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-accent rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;