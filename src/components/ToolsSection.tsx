import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Cloud, Server, TrendingDown, BarChart3, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ToolsSection = () => {
  const [monthlySpend, setMonthlySpend] = useState("");
  const [potentialSavings, setPotentialSavings] = useState("");
  const { toast } = useToast();

  const tools = [
    {
      icon: Cloud,
      title: "AWS Cost Optimizer",
      description: "Analyze your EC2 instances, S3 storage, and other AWS services for cost optimization opportunities.",
      category: "Cloud"
    },
    {
      icon: Server,
      title: "SaaS Subscription Audit",
      description: "Track and analyze all your software subscriptions to identify redundant or underutilized tools.",
      category: "SaaS"
    },
    {
      icon: TrendingDown,
      title: "Cost Trend Analyzer",
      description: "Monitor spending patterns and predict future costs with advanced analytics and alerts.",
      category: "Analytics"
    }
  ];

  const calculateSavings = () => {
    if (!monthlySpend) return;
    
    const spend = parseFloat(monthlySpend);
    const savings = spend * 0.35; // 35% average savings
    const annualSavings = savings * 12;
    setPotentialSavings(`Monthly: $${savings.toFixed(2)} | Annual: $${annualSavings.toFixed(2)}`);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Savings estimate copied to clipboard",
    });
  };

  return (
    <section id="calculators" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cost <span className="bg-gradient-accent bg-clip-text text-transparent">Calculators</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estimate your potential savings and optimize your cloud infrastructure and SaaS spending.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Featured Tool */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <Calculator className="w-5 h-5 text-primary-foreground" />
                </div>
                <span>Cloud Cost Calculator</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="spendInput">Current Monthly Spend ($)</Label>
                <Input
                  id="spendInput"
                  type="number"
                  placeholder="Enter your monthly cloud spend..."
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(e.target.value)}
                  className="mt-2"
                />
              </div>
              
              <Button 
                onClick={calculateSavings} 
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                disabled={!monthlySpend}
              >
                Calculate Potential Savings
              </Button>
              
              {potentialSavings && (
                <div className="space-y-2">
                  <Label>Potential Savings (35% avg)</Label>
                  <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <p className="text-lg font-semibold text-accent">{potentialSavings}</p>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => copyToClipboard(potentialSavings)}
                      className="mt-2"
                    >
                      Copy Results
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Tool Grid */}
          <div className="space-y-6">
            {tools.map((tool, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elevation transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-accent rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <tool.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {tool.title}
                        </h3>
                        <span className="text-xs px-2 py-1 bg-secondary rounded-full text-secondary-foreground">
                          {tool.category}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card className="bg-gradient-mesh border-dashed border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <BarChart3 className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">More Calculators Coming</h3>
                <p className="text-muted-foreground mb-4">
                  ROI calculators, licensing optimizers, and more cost analysis tools.
                </p>
                <Button variant="outline" size="sm">
                  Request Calculator
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;