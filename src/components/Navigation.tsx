import { Button } from "@/components/ui/button";
import { PenTool, BookOpen, Home, Settings } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ShrinkCosts
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a 
                href="/" 
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
              >
                <Home size={18} />
                <span>Home</span>
              </a>
              <a 
                href="/blog" 
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
              >
                <BookOpen size={18} />
                <span>Blog</span>
              </a>
              <a 
                href="/resources" 
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
              >
                <PenTool size={18} />
                <span>Resources</span>
              </a>
              <a 
                href="/about" 
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
              >
                <Settings size={18} />
                <span>About</span>
              </a>
            </div>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a href="/contact">Contact</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;