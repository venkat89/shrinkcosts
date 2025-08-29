import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, TrendingUp, DollarSign, Users } from "lucide-react";

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      title: "How Stripe Reduced AWS Costs by 65% Using FinOps Principles",
      excerpt: "A detailed case study of Stripe's cloud cost optimization journey, including specific strategies for EC2 rightsizing, S3 lifecycle policies, and reserved instance planning that saved them $2.4M annually.",
      category: "Case Study",
      readTime: "12 min read",
      date: "Dec 15, 2024",
      featured: true,
      metrics: {
        savings: "$2.4M",
        percentage: "65%",
        timeframe: "6 months"
      },
      tags: ["AWS", "FinOps", "EC2", "S3"]
    },
    {
      id: 2,
      title: "The Complete SaaS Subscription Audit Framework",
      excerpt: "A comprehensive 5-step framework for auditing your software subscriptions, including tools for usage tracking, duplicate detection, and negotiation strategies that can reduce SaaS spend by 30-40%.",
      category: "Framework",
      readTime: "8 min read",
      date: "Dec 12, 2024",
      featured: false,
      metrics: {
        savings: "30-40%",
        percentage: "35%",
        timeframe: "3 months"
      },
      tags: ["SaaS", "Audit", "Framework", "Negotiation"]
    },
    {
      id: 3,
      title: "Azure Cost Optimization: 7 Proven Strategies for 2024",
      excerpt: "Deep dive into Azure-specific cost optimization techniques including VM sizing, storage tiering, and Azure Reserved Instances. Real-world examples with step-by-step implementation guides.",
      category: "Guide",
      readTime: "15 min read",
      date: "Dec 10, 2024",
      featured: false,
      metrics: {
        savings: "40-50%",
        percentage: "45%",
        timeframe: "4 months"
      },
      tags: ["Azure", "VM", "Storage", "Reserved Instances"]
    },
    {
      id: 4,
      title: "Building a FinOps Team: Roles, Responsibilities & Best Practices",
      excerpt: "Learn how to structure your FinOps team, define clear roles and responsibilities, and implement governance frameworks that drive accountability and cost optimization across your organization.",
      category: "Strategy",
      readTime: "10 min read",
      date: "Dec 8, 2024",
      featured: false,
      metrics: {
        savings: "25-35%",
        percentage: "30%",
        timeframe: "12 months"
      },
      tags: ["FinOps", "Team", "Governance", "Strategy"]
    },
    {
      id: 5,
      title: "Google Cloud Cost Optimization: Beyond Committed Use Discounts",
      excerpt: "Advanced GCP cost optimization strategies including custom machine types, sustained use discounts, and workload optimization techniques that can reduce costs by up to 60%.",
      category: "Advanced",
      readTime: "11 min read",
      date: "Dec 5, 2024",
      featured: false,
      metrics: {
        savings: "50-60%",
        percentage: "55%",
        timeframe: "5 months"
      },
      tags: ["GCP", "Compute Engine", "Sustained Use", "Workload"]
    },
    {
      id: 6,
      title: "Multi-Cloud Cost Management: Strategies for Complex Environments",
      excerpt: "Managing costs across multiple cloud providers requires specialized approaches. Learn vendor negotiation tactics, workload distribution strategies, and unified monitoring solutions.",
      category: "Multi-Cloud",
      readTime: "9 min read",
      date: "Dec 3, 2024",
      featured: false,
      metrics: {
        savings: "20-30%",
        percentage: "25%",
        timeframe: "8 months"
      },
      tags: ["Multi-Cloud", "Vendor Management", "Monitoring", "Negotiation"]
    }
  ];

  return (
    <section id="insights" className="py-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cost Optimization <span className="bg-gradient-primary bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert strategies, real case studies, and actionable frameworks to reduce your cloud infrastructure and digital tool costs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card 
              key={post.id} 
              className={`group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 ${
                post.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs font-medium">
                    {post.category}
                  </Badge>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <CardTitle className={`group-hover:text-primary transition-colors ${
                  post.featured ? 'text-2xl md:text-3xl' : 'text-xl'
                }`}>
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-muted-foreground mb-6 leading-relaxed ${
                  post.featured ? 'text-lg' : ''
                }`}>
                  {post.excerpt}
                </p>

                {/* Metrics Display */}
                <div className="mb-6">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="font-semibold text-green-600">{post.metrics.savings}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold text-blue-600">{post.metrics.percentage} reduction</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-purple-600" />
                      <span className="text-muted-foreground">{post.metrics.timeframe}</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary hover:text-primary/80 group"
                >
                  Read more
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All Posts
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;