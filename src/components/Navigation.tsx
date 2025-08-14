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
                href="#home" 
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
              >
                <Home size={18} />
                <span>Home</span>
              </a>
              <a 
                href="#insights" 
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
              >
                <BookOpen size={18} />
                <span>Insights</span>
              </a>
              <a 
                href="#calculators" 
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
              >
                <PenTool size={18} />
                <span>Calculators</span>
              </a>
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Settings size={16} className="mr-2" />
            Settings
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;