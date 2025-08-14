import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      title: "Building Modern Web Applications with React and TypeScript",
      excerpt: "Learn the best practices for creating scalable, maintainable web applications using React and TypeScript.",
      category: "Development",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      featured: true
    },
    {
      id: 2,
      title: "The Future of AI-Powered Development Tools",
      excerpt: "Exploring how artificial intelligence is transforming the way we write code and build applications.",
      category: "AI",
      readTime: "6 min read",
      date: "Dec 12, 2024",
      featured: false
    },
    {
      id: 3,
      title: "Optimizing Website Performance: A Complete Guide",
      excerpt: "Comprehensive strategies to improve your website's loading speed and user experience.",
      category: "Performance",
      readTime: "12 min read",
      date: "Dec 10, 2024",
      featured: false
    }
  ];

  return (
    <section id="blog" className="py-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest from the <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on modern web development, AI, and technology trends.
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