import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Target, Users, Zap, TrendingUp, Mail, Linkedin, Twitter, Award, Clock, DollarSign, Building } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & FinOps Expert",
      bio: "Former AWS Solutions Architect with 12+ years in cloud cost optimization. Led cost reduction initiatives at Netflix and Stripe, saving over $50M annually.",
      avatar: "/avatars/sarah.jpg",
      credentials: ["AWS Solutions Architect", "FinOps Foundation", "Ex-Netflix", "Ex-Stripe"],
      linkedin: "https://linkedin.com/in/sarahchen",
      twitter: "https://twitter.com/sarahchen"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Cloud Architect",
      bio: "Cloud infrastructure specialist with expertise in multi-cloud environments. Previously led engineering teams at Shopify and Airbnb.",
      avatar: "/avatars/marcus.jpg",
      credentials: ["Google Cloud Architect", "Azure Solutions Expert", "Ex-Shopify", "Ex-Airbnb"],
      linkedin: "https://linkedin.com/in/marcusrodriguez",
      twitter: "https://twitter.com/marcusrodriguez"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Data Science",
      bio: "PhD in Computer Science from Stanford. Specializes in predictive analytics for cost optimization and anomaly detection in cloud spending.",
      avatar: "/avatars/emily.jpg",
      credentials: ["PhD Stanford", "ML/AI Expert", "Ex-Google", "Ex-Meta"],
      linkedin: "https://linkedin.com/in/emilywatson",
      twitter: "https://twitter.com/emilywatson"
    }
  ];

  const achievements = [
    { metric: "$50M+", label: "Total Savings Generated", icon: DollarSign },
    { metric: "500+", label: "Companies Optimized", icon: Building },
    { metric: "35%", label: "Average Cost Reduction", icon: TrendingUp },
    { metric: "24/7", label: "Cost Monitoring", icon: Clock }
  ];

  const certifications = [
    "AWS Solutions Architect Professional",
    "Google Cloud Professional Cloud Architect", 
    "Azure Solutions Architect Expert",
    "FinOps Foundation Certified Practitioner",
    "Kubernetes Administrator (CKA)",
    "Terraform Associate"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-mesh">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About ShrinkCosts
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Empowering organizations to optimize their cloud and SaaS spending through expert guidance, proven tools, and a thriving FinOps community
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{achievement.metric}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To democratize cloud cost optimization knowledge and make FinOps best practices accessible to every organization, 
                regardless of size or technical expertise. We believe that cost optimization shouldn't be a luxury reserved for large enterprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Education First</h3>
                  <p className="text-sm text-muted-foreground">
                    Provide practical, actionable education that drives real cost savings
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Community Driven</h3>
                  <p className="text-sm text-muted-foreground">
                    Build a thriving community of FinOps practitioners sharing knowledge
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Practical Tools</h3>
                  <p className="text-sm text-muted-foreground">
                    Develop tools and resources that solve real-world cost optimization challenges
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Measurable Impact</h3>
                  <p className="text-sm text-muted-foreground">
                    Focus on strategies that deliver quantifiable cost savings and ROI
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                ShrinkCosts was born from a simple observation: while cloud adoption has exploded, most organizations 
                struggle with spiraling costs and lack the expertise to optimize their infrastructure effectively.
              </p>
              
              <p className="text-muted-foreground mb-6">
                Founded in 2022 by former cloud architects from Netflix, Stripe, and Shopify, we've helped over 500 companies 
                reduce their cloud costs by an average of 35%, saving more than $50 million in total.
              </p>

              <p className="text-muted-foreground mb-6">
                Our team combines deep technical expertise with practical business acumen, having worked with companies 
                ranging from startups to Fortune 500 enterprises. We understand that every organization's cloud journey is unique, 
                which is why we provide personalized strategies and tools tailored to your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Industry experts with proven track records in cloud cost optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.credentials.map((cred, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {cred}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-4 pt-4">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
              <p className="text-lg text-muted-foreground">
                Certified professionals with deep expertise across all major cloud platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-4">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">{cert}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Costs?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of companies already saving millions with our proven strategies and tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary">
                Start Free Analysis
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;