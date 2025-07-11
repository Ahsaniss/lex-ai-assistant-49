import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChatInterface } from "@/components/ChatInterface";
import { Scale, Home, Heart, Briefcase, Shield, Globe, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const Chat = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(categoryFromUrl || undefined);

  const legalCategories = [
    { id: "family", name: "Family Law", icon: Home, color: "text-red-500" },
    { id: "property", name: "Property Law", icon: Building, color: "text-blue-500" },
    { id: "criminal", name: "Criminal Law", icon: Shield, color: "text-orange-500" },
    { id: "business", name: "Business Law", icon: Briefcase, color: "text-green-500" },
    { id: "immigration", name: "Immigration", icon: Globe, color: "text-purple-500" },
    { id: "personal", name: "Personal Injury", icon: Heart, color: "text-pink-500" },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Scale className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
            Legal Chat Assistant
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ask questions about any legal matter and get instant, AI-powered guidance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Legal Categories */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Scale className="w-5 h-5" />
                  <span>Legal Categories</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={!selectedCategory ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory(undefined)}
                >
                  <Scale className="w-4 h-4 mr-2" />
                  General Legal Help
                </Button>
                
                {legalCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.name ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    <category.icon className={cn("w-4 h-4 mr-2", category.color)} />
                    {category.name}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Quick Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="p-3 bg-accent/50 rounded-lg">
                  <p className="font-medium mb-1">Be Specific</p>
                  <p className="text-muted-foreground">
                    Provide clear details about your situation for better help
                  </p>
                </div>
                
                <div className="p-3 bg-accent/50 rounded-lg">
                  <p className="font-medium mb-1">Ask Follow-ups</p>
                  <p className="text-muted-foreground">
                    Don't hesitate to ask for clarification or more details
                  </p>
                </div>
                
                <div className="p-3 bg-accent/50 rounded-lg">
                  <p className="font-medium mb-1">Know the Limits</p>
                  <p className="text-muted-foreground">
                    This is general information - consult a lawyer for specific cases
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Chat Area */}
          <div className="lg:col-span-3">
            <div className="h-full">
              <ChatInterface selectedCategory={selectedCategory} />
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <Card className="mt-8 border-legal-warning/30 bg-legal-warning/5">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-legal-warning mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-legal-warning mb-2">
                  Important Legal Disclaimer
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  This AI assistant provides general legal information and educational content only. 
                  It does not constitute legal advice, create an attorney-client relationship, or 
                  substitute for consultation with a qualified attorney. Laws vary by jurisdiction 
                  and individual circumstances. For specific legal matters, always consult with a 
                  licensed attorney in your area. We are not responsible for any actions taken 
                  based on the information provided by this AI assistant.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};