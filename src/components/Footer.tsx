import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Twitter, Github, ArrowRight, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Cost Calculator", href: "/#calculators" },
      { name: "FinOps Resources", href: "/resources" },
      { name: "Case Studies", href: "/blog" },
      { name: "Consultation", href: "/contact" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Team", href: "/about#team" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" }
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Guides", href: "/resources" },
      { name: "Templates", href: "/resources" },
      { name: "Community", href: "/community" }
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Documentation", href: "/docs" },
      { name: "Status", href: "/status" },
      { name: "Contact Support", href: "/contact" }
    ]
  };

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/shrinkcosts", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/shrinkcosts", icon: Twitter },
    { name: "GitHub", href: "https://github.com/shrinkcosts", icon: Github }
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              ShrinkCosts
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Expert FinOps strategies and tools to help companies reduce cloud costs by 35% average. 
              Trusted by 500+ organizations worldwide.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter your email" 
                  className="flex-1"
                  type="email"
                />
                <Button size="sm" className="bg-gradient-primary">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Get FinOps insights and cost optimization tips
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="p-2"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Info Bar */}
      <div className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">San Francisco, CA</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">hello@shrinkcosts.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                © {currentYear} ShrinkCosts. All rights reserved.
              </span>
              <div className="flex items-center space-x-4">
                <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="text-xs">
                Made with ❤️ for FinOps
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
