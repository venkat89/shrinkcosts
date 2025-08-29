import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calculator, Cloud, Server, TrendingDown, BarChart3, ArrowRight, Download, Save } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ToolsSection = () => {
  const [monthlySpend, setMonthlySpend] = useState("");
  const [cloudProvider, setCloudProvider] = useState("aws");
  const [companySize, setCompanySize] = useState("medium");
  const [calculationResults, setCalculationResults] = useState<any>(null);
  const { toast } = useToast();

  const tools = [
    {
      icon: Cloud,
      title: "AWS Cost Optimizer",
      description: "Analyze your EC2 instances, S3 storage, and other AWS services for cost optimization opportunities.",
      category: "Cloud",
      features: ["Reserved Instance Analysis", "S3 Lifecycle Optimization", "Rightsizing Recommendations"]
    },
    {
      icon: Server,
      title: "SaaS Subscription Audit",
      description: "Track and analyze all your software subscriptions to identify redundant or underutilized tools.",
      category: "SaaS",
      features: ["Usage Analytics", "Duplicate Detection", "Contract Optimization"]
    },
    {
      icon: TrendingDown,
      title: "Cost Trend Analyzer",
      description: "Monitor spending patterns and predict future costs with advanced analytics and alerts.",
      category: "Analytics",
      features: ["Predictive Analytics", "Anomaly Detection", "Budget Forecasting"]
    }
  ];

  const cloudProviders = {
    aws: { name: "AWS", avgSavings: 0.35, features: ["EC2 Rightsizing", "S3 Optimization", "RDS Reserved Instances"] },
    azure: { name: "Azure", avgSavings: 0.32, features: ["VM Optimization", "Storage Tiering", "Reserved Instances"] },
    gcp: { name: "Google Cloud", avgSavings: 0.30, features: ["Compute Engine Optimization", "Cloud Storage", "Committed Use Discounts"] },
    multi: { name: "Multi-Cloud", avgSavings: 0.40, features: ["Cross-Platform Optimization", "Vendor Negotiation", "Workload Distribution"] }
  };

  const companySizes = {
    small: { name: "Small (< 50 employees)", multiplier: 0.8 },
    medium: { name: "Medium (50-500 employees)", multiplier: 1.0 },
    large: { name: "Large (500+ employees)", multiplier: 1.2 }
  };

  const calculateSavings = () => {
    if (!monthlySpend) return;
    
    const spend = parseFloat(monthlySpend);
    const provider = cloudProviders[cloudProvider as keyof typeof cloudProviders];
    const size = companySizes[companySize as keyof typeof companySizes];
    
    const baseSavings = spend * provider.avgSavings * size.multiplier;
    const annualSavings = baseSavings * 12;
    
    const breakdown = {
      immediate: baseSavings * 0.4, // 40% immediate savings
      quarterly: baseSavings * 0.3, // 30% in 3 months
      longTerm: baseSavings * 0.3, // 30% in 6+ months
      total: baseSavings,
      annual: annualSavings,
      roi: (annualSavings / (spend * 12)) * 100
    };

    setCalculationResults({
      provider: provider.name,
      companySize: size.name,
      breakdown,
      recommendations: provider.features
    });

    toast({
      title: "Calculation Complete!",
      description: `Potential annual savings: $${annualSavings.toFixed(0)}`,
    });
  };

  const saveCalculation = () => {
    // In a real app, this would save to user account
    toast({
      title: "Calculation Saved",
      description: "Your cost analysis has been saved to your account",
    });
  };

  const downloadReport = () => {
    // In a real app, this would generate a PDF report
    toast({
      title: "Report Generated",
      description: "Your detailed cost optimization report is ready for download",
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
            Estimate your potential savings and optimize your cloud infrastructure and SaaS spending with our advanced calculators.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Enhanced Cost Calculator */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <Calculator className="w-5 h-5 text-primary-foreground" />
                </div>
                <span>Advanced Cost Calculator</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="spendInput">Current Monthly Cloud Spend ($)</Label>
                  <Input
                    id="spendInput"
                    type="number"
                    placeholder="Enter your monthly cloud spend..."
                    value={monthlySpend}
                    onChange={(e) => setMonthlySpend(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Primary Cloud Provider</Label>
                  <Select value={cloudProvider} onValueChange={setCloudProvider}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aws">AWS</SelectItem>
                      <SelectItem value="azure">Azure</SelectItem>
                      <SelectItem value="gcp">Google Cloud</SelectItem>
                      <SelectItem value="multi">Multi-Cloud</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Company Size</Label>
                  <Select value={companySize} onValueChange={setCompanySize}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                                              <SelectItem value="small">Small (&lt; 50 employees)</SelectItem>
                        <SelectItem value="medium">Medium (50-500 employees)</SelectItem>
                        <SelectItem value="large">Large (500+ employees)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button 
                onClick={calculateSavings} 
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                disabled={!monthlySpend}
              >
                Calculate Potential Savings
              </Button>
            </CardContent>
          </Card>

          {/* Results Display */}
          <div className="space-y-6">
            {calculationResults && (
              <>
                <Card className="shadow-soft border-accent/20">
                  <CardHeader>
                    <CardTitle className="text-accent">Savings Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-accent/10 rounded-lg">
                        <div className="text-2xl font-bold text-accent">${calculationResults.breakdown.annual.toFixed(0)}</div>
                        <div className="text-sm text-muted-foreground">Annual Savings</div>
                      </div>
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{calculationResults.breakdown.roi.toFixed(1)}%</div>
                        <div className="text-sm text-muted-foreground">ROI</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Immediate (30 days)</span>
                        <span className="font-semibold">${calculationResults.breakdown.immediate.toFixed(0)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Quarterly (3 months)</span>
                        <span className="font-semibold">${calculationResults.breakdown.quarterly.toFixed(0)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Long-term (6+ months)</span>
                        <span className="font-semibold">${calculationResults.breakdown.longTerm.toFixed(0)}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button onClick={saveCalculation} variant="outline" size="sm" className="flex-1">
                        <Save className="w-4 h-4 mr-2" />
                        Save
                      </Button>
                      <Button onClick={downloadReport} variant="outline" size="sm" className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle>Optimization Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {calculationResults.recommendations.map((rec: string, index: number) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-sm">{rec}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Professional Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <tool.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{tool.title}</CardTitle>
                      <Badge variant="secondary" className="text-xs">{tool.category}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{tool.description}</p>
                  <div className="space-y-2">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full group-hover:text-primary">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;