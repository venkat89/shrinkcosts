import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BlogSection from "@/components/BlogSection";
import ToolsSection from "@/components/ToolsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <BlogSection />
      <ToolsSection />
    </div>
  );
};

export default Index;
