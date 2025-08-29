import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search, Tag } from "lucide-react";

const categories = ["All", "FinOps", "AWS", "GCP", "Azure", "SaaS Optimization", "Cost Management"];

const blogPosts = [
  {
    id: 1,
    title: "FinOps Best Practices: A Complete Guide for 2024",
    excerpt: "Learn the essential FinOps practices that leading companies use to optimize their cloud costs and drive financial accountability.",
    category: "FinOps",
    readTime: "8 min read",
    date: "2024-03-15",
    featured: true,
    author: "Sarah Chen",
    tags: ["FinOps", "Best Practices", "Cloud Costs"]
  },
  {
    id: 2,
    title: "AWS Cost Optimization: 15 Proven Strategies",
    excerpt: "Discover actionable strategies to reduce your AWS bill by up to 40% without compromising performance.",
    category: "AWS",
    readTime: "12 min read",
    date: "2024-03-12",
    featured: false,
    author: "Mike Rodriguez",
    tags: ["AWS", "Cost Optimization", "EC2", "S3"]
  },
  {
    id: 3,
    title: "SaaS Spend Management: Hidden Costs You're Missing",
    excerpt: "Uncover the hidden SaaS costs that are secretly draining your budget and learn how to eliminate waste.",
    category: "SaaS Optimization",
    readTime: "6 min read",
    date: "2024-03-10",
    featured: false,
    author: "Emma Thompson",
    tags: ["SaaS", "Hidden Costs", "Budget Management"]
  },
  {
    id: 4,
    title: "Google Cloud Cost Management: Tools and Techniques",
    excerpt: "Master Google Cloud Platform cost management with these expert-recommended tools and techniques.",
    category: "GCP",
    readTime: "10 min read",
    date: "2024-03-08",
    featured: false,
    author: "David Kim",
    tags: ["GCP", "Cost Management", "BigQuery", "Compute Engine"]
  },
  {
    id: 5,
    title: "Azure Reserved Instances: ROI Calculator and Strategy",
    excerpt: "Calculate the true ROI of Azure Reserved Instances and develop a winning reservation strategy.",
    category: "Azure",
    readTime: "9 min read",
    date: "2024-03-05",
    featured: false,
    author: "Lisa Park",
    tags: ["Azure", "Reserved Instances", "ROI", "Strategy"]
  },
  {
    id: 6,
    title: "Building a FinOps Culture: From Zero to Hero",
    excerpt: "Transform your organization's approach to cloud financial management with these culture-building strategies.",
    category: "FinOps",
    readTime: "7 min read",
    date: "2024-03-02",
    featured: false,
    author: "James Wilson",
    tags: ["FinOps", "Culture", "Transformation", "Leadership"]
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-mesh">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              FinOps Insights & Strategies
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert insights, best practices, and actionable strategies to optimize your cloud and SaaS costs
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-soft transition-all duration-smooth cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    {post.featured && <Badge variant="default">Featured</Badge>}
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <div key={tag} className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Tag className="h-2 w-2" />
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">by {post.author}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;