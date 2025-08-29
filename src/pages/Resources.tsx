import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, FileText, Calculator, CheckSquare, BookOpen, ExternalLink } from "lucide-react";

const resources = [
  {
    id: 1,
    title: "FinOps Maturity Assessment Framework",
    description: "Evaluate your organization's FinOps maturity level and identify areas for improvement with this comprehensive assessment tool.",
    type: "Assessment",
    format: "PDF",
    pages: "12 pages",
    category: "FinOps",
    downloadUrl: "#",
    featured: true,
    icon: CheckSquare
  },
  {
    id: 2,
    title: "AWS Cost Optimization Checklist",
    description: "A detailed 50-point checklist covering all major AWS services and cost optimization opportunities.",
    type: "Checklist",
    format: "PDF",
    pages: "8 pages",
    category: "AWS",
    downloadUrl: "#",
    featured: true,
    icon: CheckSquare
  },
  {
    id: 3,
    title: "Cloud ROI Calculator Template",
    description: "Excel template to calculate the return on investment for your cloud migration and optimization initiatives.",
    type: "Calculator",
    format: "XLSX",
    pages: "5 sheets",
    category: "Tools",
    downloadUrl: "#",
    featured: false,
    icon: Calculator
  },
  {
    id: 4,
    title: "SaaS Spend Analysis Guide",
    description: "Complete guide to conducting a thorough SaaS spend analysis and identifying optimization opportunities.",
    type: "Guide",
    format: "PDF",
    pages: "24 pages",
    category: "SaaS",
    downloadUrl: "#",
    featured: false,
    icon: BookOpen
  },
  {
    id: 5,
    title: "Multi-Cloud Cost Comparison Template",
    description: "Compare costs across AWS, Azure, and GCP with this comprehensive spreadsheet template.",
    type: "Template",
    format: "XLSX",
    pages: "7 sheets",
    category: "Multi-Cloud",
    downloadUrl: "#",
    featured: false,
    icon: Calculator
  },
  {
    id: 6,
    title: "FinOps Team Structure & Roles",
    description: "Detailed guide on building an effective FinOps team, including role definitions and responsibilities.",
    type: "Guide",
    format: "PDF",
    pages: "16 pages",
    category: "FinOps",
    downloadUrl: "#",
    featured: false,
    icon: BookOpen
  }
];

const categories = ["All", "FinOps", "AWS", "GCP", "Azure", "SaaS", "Multi-Cloud", "Tools"];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-mesh">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              FinOps Resources & Tools
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Free guides, templates, and calculators to accelerate your cloud cost optimization journey
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <Card key={resource.id} className="group hover:shadow-soft transition-all duration-smooth">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary">{resource.category}</Badge>
                      {resource.featured && <Badge variant="default">Featured</Badge>}
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{resource.type}</div>
                        <div className="text-xs text-muted-foreground">{resource.format} • {resource.pages}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {resource.description}
                    </p>
                    
                    <Button className="w-full" asChild>
                      <a href={resource.downloadUrl} download>
                        <Download className="h-4 w-4 mr-2" />
                        Download {resource.type}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get New Resources First</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter and be the first to receive new FinOps resources, tools, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;