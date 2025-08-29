import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageSquare, Users, Send, CheckCircle, Phone, MapPin, Clock, Calendar, DollarSign, TrendingUp, Building } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    companySize: "",
    primaryCloud: "",
    monthlySpend: "",
    message: "",
    consultationType: "",
    newsletter: false,
    marketing: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const consultationTypes = [
    { value: "cost-audit", label: "Cost Audit & Analysis", description: "Comprehensive review of your cloud spending" },
    { value: "optimization", label: "Optimization Strategy", description: "Custom cost reduction roadmap" },
    { value: "finops-setup", label: "FinOps Team Setup", description: "Building your FinOps practice" },
    { value: "multi-cloud", label: "Multi-Cloud Strategy", description: "Optimizing across multiple providers" },
    { value: "saas-audit", label: "SaaS Audit", description: "Review and optimize software subscriptions" }
  ];

  const companySizes = [
    "1-10 employees",
    "11-50 employees", 
    "51-200 employees",
    "201-1000 employees",
    "1000+ employees"
  ];

  const cloudProviders = [
    "AWS",
    "Azure", 
    "Google Cloud",
    "Multi-Cloud",
    "Other"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Thank you for your message!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      companySize: "",
      primaryCloud: "",
      monthlySpend: "",
      message: "",
      consultationType: "",
      newsletter: false,
      marketing: false
    });
  };

  const stats = [
    { label: "Response Time", value: "< 24 hours", icon: Clock },
    { label: "Success Rate", value: "95%", icon: TrendingUp },
    { label: "Companies Helped", value: "500+", icon: Building },
    { label: "Average Savings", value: "35%", icon: DollarSign }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-mesh">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Let's Optimize Your Costs
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get personalized guidance, schedule a consultation, or join our community of FinOps professionals
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-accent mr-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Options */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">How Can We Help?</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <MessageSquare className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">Free Consultation</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Schedule a 30-minute consultation to discuss your cost optimization challenges and get personalized recommendations.
                    </p>
                    <Badge variant="secondary" className="mb-3">Free</Badge>
                    <Button variant="outline" size="sm" className="w-full">
                      <Calendar className="h-3 w-3 mr-2" />
                      Schedule Call
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">Community & Partnership</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Join our FinOps community, contribute content, or explore partnership opportunities.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="mailto:community@shrinkcosts.com">
                        <Mail className="h-3 w-3 mr-2" />
                        community@shrinkcosts.com
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">Success Stories</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Share how ShrinkCosts helped you save costs or improve your FinOps practices.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="mailto:stories@shrinkcosts.com">
                        <Mail className="h-3 w-3 mr-2" />
                        stories@shrinkcosts.com
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Contact Info */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">hello@shrinkcosts.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">San Francisco, CA</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Get Personalized Cost Optimization Guidance</CardTitle>
                  <p className="text-muted-foreground">
                    Tell us about your challenges and we'll provide tailored recommendations and next steps.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company Name *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="role">Job Title *</Label>
                        <Input
                          id="role"
                          value={formData.role}
                          onChange={(e) => setFormData({...formData, role: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Company Size *</Label>
                        <Select value={formData.companySize} onValueChange={(value) => setFormData({...formData, companySize: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select company size" />
                          </SelectTrigger>
                          <SelectContent>
                            {companySizes.map(size => (
                              <SelectItem key={size} value={size}>{size}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Primary Cloud Provider *</Label>
                        <Select value={formData.primaryCloud} onValueChange={(value) => setFormData({...formData, primaryCloud: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select cloud provider" />
                          </SelectTrigger>
                          <SelectContent>
                            {cloudProviders.map(provider => (
                              <SelectItem key={provider} value={provider}>{provider}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="monthlySpend">Monthly Cloud Spend (USD)</Label>
                      <Input
                        id="monthlySpend"
                        placeholder="e.g., $10,000"
                        value={formData.monthlySpend}
                        onChange={(e) => setFormData({...formData, monthlySpend: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label>Consultation Type</Label>
                      <Select value={formData.consultationType} onValueChange={(value) => setFormData({...formData, consultationType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="What type of consultation do you need?" />
                        </SelectTrigger>
                        <SelectContent>
                          {consultationTypes.map(type => (
                            <SelectItem key={type.value} value={type.value}>
                              <div>
                                <div className="font-medium">{type.label}</div>
                                <div className="text-xs text-muted-foreground">{type.description}</div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Tell us about your challenges *</Label>
                      <Textarea
                        id="message"
                        placeholder="Describe your current cost optimization challenges, goals, and any specific areas you'd like to focus on..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="newsletter"
                          checked={formData.newsletter}
                          onCheckedChange={(checked) => setFormData({...formData, newsletter: checked as boolean})}
                        />
                        <Label htmlFor="newsletter" className="text-sm">
                          Subscribe to our newsletter for FinOps insights and updates
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="marketing"
                          checked={formData.marketing}
                          onCheckedChange={(checked) => setFormData({...formData, marketing: checked as boolean})}
                        />
                        <Label htmlFor="marketing" className="text-sm">
                          I agree to receive marketing communications from ShrinkCosts
                        </Label>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message & Schedule Consultation
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Common questions about our services and consultation process</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How much does a consultation cost?</h3>
                <p className="text-sm text-muted-foreground">
                  Our initial 30-minute consultation is completely free. We'll assess your needs and provide personalized recommendations at no cost.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What information do I need to prepare?</h3>
                <p className="text-sm text-muted-foreground">
                  Basic information about your current cloud setup, monthly spend, and specific challenges you're facing. No detailed technical analysis required.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How quickly will I see results?</h3>
                <p className="text-sm text-muted-foreground">
                  Most clients see immediate savings within 30 days of implementing our recommendations, with ongoing optimization providing additional benefits.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do you work with small companies?</h3>
                <p className="text-sm text-muted-foreground">
                  Absolutely! We work with companies of all sizes, from startups to Fortune 500 enterprises. Our strategies scale to your needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;