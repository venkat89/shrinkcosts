import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Tag, Share2, Linkedin, Twitter, Link, ArrowLeft } from "lucide-react";

// Mock blog post data - in a real app, this would come from a CMS or API
const blogPost = {
  id: 1,
  title: "FinOps Best Practices: A Complete Guide for 2024",
  content: `
    <h2>Introduction</h2>
    <p>Financial Operations (FinOps) has become a critical discipline for organizations leveraging cloud technologies. As cloud adoption accelerates, the need for effective cost management and financial accountability has never been more important.</p>
    
    <h2>Understanding FinOps</h2>
    <p>FinOps is an evolving cloud financial management discipline and cultural practice that enables organizations to get maximum business value by helping engineering, finance, technology and business teams to collaborate on data-driven spending decisions.</p>
    
    <h3>Core Principles</h3>
    <ul>
      <li><strong>Teams need to collaborate:</strong> Finance, Engineering, and Business teams must work together</li>
      <li><strong>Everyone takes ownership for their cloud usage:</strong> Decentralized decisions with centralized governance</li>
      <li><strong>A centralized team drives FinOps:</strong> Dedicated team to establish practices and governance</li>
      <li><strong>Reports should be accessible and timely:</strong> Real-time visibility into cloud costs</li>
      <li><strong>Decisions are driven by business value of cloud:</strong> Cost optimization shouldn't compromise business outcomes</li>
      <li><strong>Take advantage of the variable cost model of the cloud:</strong> Leverage cloud's flexibility for cost optimization</li>
    </ul>
    
    <h2>FinOps Lifecycle</h2>
    <p>The FinOps lifecycle consists of three key phases that organizations iterate through continuously:</p>
    
    <h3>1. Inform Phase</h3>
    <p>This phase focuses on creating visibility and understanding of cloud costs. Key activities include:</p>
    <ul>
      <li>Implementing cost allocation and tagging strategies</li>
      <li>Creating cost reporting and dashboards</li>
      <li>Establishing benchmarking and KPIs</li>
      <li>Building shared cost visibility across teams</li>
    </ul>
    
    <h3>2. Optimize Phase</h3>
    <p>In this phase, organizations take action to improve cloud efficiency and reduce waste:</p>
    <ul>
      <li>Right-sizing resources based on utilization</li>
      <li>Implementing automated scaling policies</li>
      <li>Purchasing reserved instances or savings plans</li>
      <li>Identifying and eliminating unused resources</li>
    </ul>
    
    <h3>3. Operate Phase</h3>
    <p>This phase establishes ongoing governance and continuous improvement:</p>
    <ul>
      <li>Setting up budget alerts and anomaly detection</li>
      <li>Implementing cost governance policies</li>
      <li>Establishing regular cost review processes</li>
      <li>Measuring and reporting on FinOps success metrics</li>
    </ul>
    
    <h2>Building a FinOps Team</h2>
    <p>Successful FinOps implementation requires the right team structure and roles:</p>
    
    <h3>FinOps Practitioner</h3>
    <p>The central role responsible for driving FinOps practices across the organization. Key responsibilities include:</p>
    <ul>
      <li>Developing and maintaining cost allocation models</li>
      <li>Creating and distributing cost reports</li>
      <li>Facilitating cross-functional collaboration</li>
      <li>Identifying optimization opportunities</li>
    </ul>
    
    <h3>Engineering Teams</h3>
    <p>Engineers play a crucial role in implementing cost optimization measures:</p>
    <ul>
      <li>Implementing proper resource tagging</li>
      <li>Optimizing application architecture for cost efficiency</li>
      <li>Responding to cost alerts and anomalies</li>
      <li>Participating in cost review meetings</li>
    </ul>
    
    <h3>Finance Teams</h3>
    <p>Finance teams provide financial governance and strategic guidance:</p>
    <ul>
      <li>Setting cloud budgets and forecasts</li>
      <li>Developing chargeback and showback models</li>
      <li>Analyzing financial trends and patterns</li>
      <li>Ensuring compliance with financial policies</li>
    </ul>
    
    <h2>Key Metrics and KPIs</h2>
    <p>Measuring FinOps success requires tracking the right metrics:</p>
    
    <h3>Cost Efficiency Metrics</h3>
    <ul>
      <li><strong>Cost per unit:</strong> Cost relative to business metrics (e.g., cost per transaction)</li>
      <li><strong>Resource utilization:</strong> Percentage of provisioned resources actively used</li>
      <li><strong>Waste percentage:</strong> Proportion of spending on unused or underutilized resources</li>
    </ul>
    
    <h3>Financial Metrics</h3>
    <ul>
      <li><strong>Budget variance:</strong> Difference between actual and budgeted costs</li>
      <li><strong>Forecast accuracy:</strong> How well cost predictions match actual spending</li>
      <li><strong>Savings achieved:</strong> Cost reductions from optimization efforts</li>
    </ul>
    
    <h2>Common Challenges and Solutions</h2>
    
    <h3>Challenge: Lack of Cost Visibility</h3>
    <p><strong>Solution:</strong> Implement comprehensive tagging strategies and create automated cost reporting dashboards.</p>
    
    <h3>Challenge: Cultural Resistance</h3>
    <p><strong>Solution:</strong> Focus on education, demonstrate value, and align incentives across teams.</p>
    
    <h3>Challenge: Tool Proliferation</h3>
    <p><strong>Solution:</strong> Standardize on a unified set of FinOps tools and platforms.</p>
    
    <h2>Getting Started with FinOps</h2>
    <p>Organizations beginning their FinOps journey should focus on these foundational steps:</p>
    
    <ol>
      <li><strong>Assess current state:</strong> Understand existing cost management practices and gaps</li>
      <li><strong>Build the team:</strong> Identify FinOps champions across engineering, finance, and business teams</li>
      <li><strong>Implement basic visibility:</strong> Start with cost allocation and basic reporting</li>
      <li><strong>Establish governance:</strong> Create policies and processes for cost management</li>
      <li><strong>Drive optimization:</strong> Begin with quick wins like rightsizing and unused resource cleanup</li>
      <li><strong>Measure and iterate:</strong> Continuously improve based on metrics and feedback</li>
    </ol>
    
    <h2>Conclusion</h2>
    <p>FinOps is not just about cost reduction—it's about enabling organizations to make informed decisions about cloud investments that drive business value. By implementing these best practices and fostering a culture of cost consciousness, organizations can achieve both financial efficiency and technological innovation.</p>
    
    <p>The key to successful FinOps implementation is starting small, demonstrating value, and continuously iterating on practices and processes. As your organization matures in its FinOps journey, you'll find that the benefits extend far beyond cost savings to include improved resource efficiency, better business alignment, and enhanced innovation capabilities.</p>
  `,
  excerpt: "Learn the essential FinOps practices that leading companies use to optimize their cloud costs and drive financial accountability.",
  category: "FinOps",
  readTime: "12 min read",
  date: "2024-03-15",
  author: "Sarah Chen",
  tags: ["FinOps", "Best Practices", "Cloud Costs", "Cost Optimization"]
};

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" className="mb-6" asChild>
              <a href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </a>
            </Button>
            
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">{blogPost.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{blogPost.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{blogPost.excerpt}</p>
              
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{blogPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{blogPost.readTime}</span>
                  </div>
                  <span>by {blogPost.author}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Link className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {blogPost.tags.map((tag) => (
                <div key={tag} className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  <Tag className="h-2 w-2" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-soft transition-all duration-smooth cursor-pointer">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">AWS</Badge>
                  <h3 className="font-semibold mb-2">AWS Cost Optimization: 15 Proven Strategies</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Discover actionable strategies to reduce your AWS bill by up to 40% without compromising performance.
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>12 min read</span>
                    <span>Mar 12, 2024</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-soft transition-all duration-smooth cursor-pointer">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">FinOps</Badge>
                  <h3 className="font-semibold mb-2">Building a FinOps Culture: From Zero to Hero</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Transform your organization's approach to cloud financial management with these culture-building strategies.
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>7 min read</span>
                    <span>Mar 2, 2024</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;