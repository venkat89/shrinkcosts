import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, FileText, Calculator, CheckSquare, BookOpen, Search, Filter, Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const resources = [
  {
    id: 1,
    title: "FinOps Maturity Assessment Framework",
    description: "Comprehensive assessment tool to evaluate your organization's FinOps maturity level across 6 key dimensions. Includes scoring methodology and improvement roadmap.",
    type: "Assessment",
    format: "PDF",
    pages: "24 pages",
    category: "FinOps",
    downloadUrl: "#",
    featured: true,
    icon: CheckSquare,
    downloads: 1247,
    rating: 4.8,
    tags: ["Maturity Model", "Assessment", "Roadmap", "Best Practices"]
  },
  {
    id: 2,
    title: "AWS Cost Optimization Checklist 2024",
    description: "Updated 75-point checklist covering EC2, S3, RDS, Lambda, and other AWS services. Includes specific cost optimization techniques and implementation steps.",
    type: "Checklist",
    format: "PDF",
    pages: "18 pages",
    category: "AWS",
    downloadUrl: "#",
    featured: true,
    icon: CheckSquare,
    downloads: 2156,
    rating: 4.9,
    tags: ["EC2", "S3", "RDS", "Lambda", "Reserved Instances"]
  },
  {
    id: 3,
    title: "Cloud ROI Calculator & Business Case Template",
    description: "Advanced Excel template with multiple scenarios, sensitivity analysis, and executive summary templates for cloud migration and optimization projects.",
    type: "Calculator",
    format: "XLSX",
    pages: "8 sheets",
    category: "Tools",
    downloadUrl: "#",
    featured: true,
    icon: Calculator,
    downloads: 892,
    rating: 4.7,
    tags: ["ROI", "Business Case", "Financial Modeling", "Executive Summary"]
  },
  {
    id: 4,
    title: "Complete SaaS Spend Analysis & Optimization Guide",
    description: "Step-by-step guide for conducting comprehensive SaaS audits, including usage analytics, contract optimization, and vendor negotiation strategies.",
    type: "Guide",
    format: "PDF",
    pages: "32 pages",
    category: "SaaS",
    downloadUrl: "#",
    featured: false,
    icon: BookOpen,
    downloads: 1567,
    rating: 4.6,
    tags: ["SaaS Audit", "Contract Optimization", "Vendor Management", "Usage Analytics"]
  },
  {
    id: 5,
    title: "Multi-Cloud Cost Comparison & Migration Planner",
    description: "Advanced spreadsheet template for comparing costs across AWS, Azure, and GCP. Includes migration planning tools and TCO calculations.",
    type: "Template",
    format: "XLSX",
    pages: "12 sheets",
    category: "Multi-Cloud",
    downloadUrl: "#",
    featured: false,
    icon: Calculator,
    downloads: 743,
    rating: 4.5,
    tags: ["Cost Comparison", "Migration Planning", "TCO", "Multi-Cloud"]
  },
  {
    id: 6,
    title: "FinOps Team Structure & Governance Framework",
    description: "Comprehensive guide on building effective FinOps teams, including role definitions, RACI matrices, and governance frameworks for organizations of all sizes.",
    type: "Guide",
    format: "PDF",
    pages: "28 pages",
    category: "FinOps",
    downloadUrl: "#",
    featured: false,
    icon: BookOpen,
    downloads: 1123,
    rating: 4.8,
    tags: ["Team Structure", "Governance", "RACI", "Best Practices"]
  }
];

const categories = ["All", "FinOps", "AWS", "GCP", "Azure", "SaaS", "Multi-Cloud", "Tools"];

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const { toast } = useToast();

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
    const matchesType = selectedType === "All" || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const handleDownload = (resource: any) => {
    // In a real app, this would trigger actual download
    toast({
      title: "Download Started",
      description: `${resource.title} is being downloaded...`,
    });
  };

  const popularResources = resources.sort((a, b) => b.downloads - a.downloads).slice(0, 3);
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
              Free guides, templates, and calculators to accelerate your cloud cost optimization journey. Join 10,000+ professionals using our resources.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search resources, guides, templates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Types</SelectItem>
                    <SelectItem value="Guide">Guides</SelectItem>
                    <SelectItem value="Template">Templates</SelectItem>
                    <SelectItem value="Calculator">Calculators</SelectItem>
                    <SelectItem value="Checklist">Checklists</SelectItem>
                    <SelectItem value="Assessment">Assessments</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Most Popular Resources</h2>
            <p className="text-lg text-muted-foreground">Resources downloaded by thousands of FinOps professionals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularResources.map((resource, index) => (
              <Card key={resource.id} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {resource.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 fill-green-500 text-green-500" />
                      <span>{resource.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{resource.downloads.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>{resource.pages}</span>
                      </div>
                    </div>
                    <Badge variant="outline">{resource.format}</Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {resource.tags.slice(0, 3).map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => handleDownload(resource)}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">All Resources</h2>
            <p className="text-lg text-muted-foreground">
              {filteredResources.length} resources found
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <Card key={resource.id} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {resource.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 fill-green-500 text-green-500" />
                      <span>{resource.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{resource.downloads.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>{resource.pages}</span>
                      </div>
                    </div>
                    <Badge variant="outline">{resource.format}</Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {resource.tags.slice(0, 3).map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => handleDownload(resource)}
                    variant="outline"
                    className="w-full"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need Custom Resources?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find what you're looking for? We can create custom guides, templates, and calculators for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary">
                Request Custom Resource
              </Button>
              <Button size="lg" variant="outline">
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;