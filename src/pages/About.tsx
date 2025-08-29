import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Users, Zap, TrendingUp, Mail, Linkedin, Twitter } from "lucide-react";

const About = () => {
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
              Empowering organizations to optimize their cloud and SaaS spending through education, tools, and community
            </p>
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
                regardless of size or technical expertise.
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
                struggle with cost optimization. We've seen companies overspend by millions due to lack of visibility, 
                poor governance, and inadequate FinOps practices.
              </p>
              
              <p className="text-muted-foreground mb-6">
                Founded by cloud cost optimization veterans who have helped Fortune 500 companies save hundreds of 
                millions in cloud costs, ShrinkCosts bridges the gap between complex FinOps theory and practical, 
                actionable strategies that work in the real world.
              </p>

              <p className="text-muted-foreground mb-6">
                Our content-first approach ensures that every piece of advice, every template, and every tool we provide 
                has been battle-tested in production environments. We believe that effective cost optimization isn't 
                just about cutting costs—it's about enabling sustainable growth through intelligent cloud financial management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                <p className="text-muted-foreground">
                  We believe in open, honest communication about cost optimization challenges and solutions.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Practicality</h3>
                <p className="text-muted-foreground">
                  Every recommendation must be actionable and implementable in real-world environments.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for the highest quality in everything we create, from content to tools to community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-white/90 mb-8">
              Whether you're just starting your FinOps journey or you're a seasoned practitioner, 
              we'd love to hear from you and learn how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href="/contact">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Us
                </a>
              </Button>
              <div className="flex gap-3 justify-center">
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20" asChild>
                  <a href="#" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20" asChild>
                  <a href="#" aria-label="Twitter">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;