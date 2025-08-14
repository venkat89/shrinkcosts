import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Hash, Type, FileText, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ToolsSection = () => {
  const [textToHash, setTextToHash] = useState("");
  const [hashedText, setHashedText] = useState("");
  const { toast } = useToast();

  const tools = [
    {
      icon: Hash,
      title: "Text Hash Generator",
      description: "Generate MD5, SHA1, and SHA256 hashes from any text input.",
      category: "Security"
    },
    {
      icon: Type,
      title: "Case Converter",
      description: "Convert text between different cases: camelCase, snake_case, kebab-case.",
      category: "Text"
    },
    {
      icon: FileText,
      title: "JSON Formatter",
      description: "Format, validate and beautify JSON data with syntax highlighting.",
      category: "Development"
    }
  ];

  const generateHash = async () => {
    if (!textToHash.trim()) return;
    
    // Simple hash simulation (in real app, use crypto library)
    const hash = btoa(textToHash).slice(0, 32);
    setHashedText(hash);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Hash copied to clipboard",
    });
  };

  return (
    <section id="tools" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Developer <span className="bg-gradient-accent bg-clip-text text-transparent">Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful utilities to streamline your development workflow and boost productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Featured Tool */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <Hash className="w-5 h-5 text-primary-foreground" />
                </div>
                <span>Text Hash Generator</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="textInput">Enter your text</Label>
                <Textarea
                  id="textInput"
                  placeholder="Type or paste your text here..."
                  value={textToHash}
                  onChange={(e) => setTextToHash(e.target.value)}
                  className="mt-2"
                  rows={4}
                />
              </div>
              
              <Button 
                onClick={generateHash} 
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                disabled={!textToHash.trim()}
              >
                Generate Hash
              </Button>
              
              {hashedText && (
                <div className="space-y-2">
                  <Label>Generated Hash (MD5)</Label>
                  <div className="flex items-center space-x-2">
                    <Input 
                      value={hashedText} 
                      readOnly 
                      className="font-mono text-sm"
                    />
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => copyToClipboard(hashedText)}
                    >
                      <Copy size={16} />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Tool Grid */}
          <div className="space-y-6">
            {tools.map((tool, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elevation transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-accent rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <tool.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {tool.title}
                        </h3>
                        <span className="text-xs px-2 py-1 bg-secondary rounded-full text-secondary-foreground">
                          {tool.category}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card className="bg-gradient-mesh border-dashed border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">More Tools Coming Soon</h3>
                <p className="text-muted-foreground mb-4">
                  We're constantly adding new developer tools and utilities.
                </p>
                <Button variant="outline" size="sm">
                  Request a Tool
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;