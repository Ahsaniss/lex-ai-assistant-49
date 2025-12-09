import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChatInterface } from "@/components/ChatInterface";
import { GraduationCap, Briefcase, Code, FlaskConical, Stethoscope, Building2, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const Chat = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(categoryFromUrl || undefined);

  const careerCategories = [
    { id: "business", name: "Business & Management", icon: Briefcase, color: "text-blue-500" },
    { id: "technology", name: "Technology & IT", icon: Code, color: "text-green-500" },
    { id: "sciences", name: "Natural Sciences", icon: FlaskConical, color: "text-purple-500" },
    { id: "healthcare", name: "Healthcare", icon: Stethoscope, color: "text-red-500" },
    { id: "engineering", name: "Engineering", icon: Building2, color: "text-orange-500" },
    { id: "arts", name: "Arts & Humanities", icon: Palette, color: "text-pink-500" },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <GraduationCap className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
            GCUF Career Counselor
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ask about careers, GCUF programs, and get personalized guidance for your future
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Career Categories */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>Career Fields</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={!selectedCategory ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory(undefined)}
                >
                  <GraduationCap className="w-4 h-4 mr-2" />
                  General Career Help
                </Button>
                
                {careerCategories.map((category) => (
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
                  <p className="font-medium mb-1">Share Your Interests</p>
                  <p className="text-muted-foreground">
                    Tell us what subjects you enjoy to get better career recommendations
                  </p>
                </div>
                
                <div className="p-3 bg-accent/50 rounded-lg">
                  <p className="font-medium mb-1">Ask About Programs</p>
                  <p className="text-muted-foreground">
                    Get details about GCUF faculties and degree programs
                  </p>
                </div>
                
                <div className="p-3 bg-accent/50 rounded-lg">
                  <p className="font-medium mb-1">Explore Options</p>
                  <p className="text-muted-foreground">
                    Ask about job prospects, skills needed, and career paths
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
        <Card className="mt-8 border-secondary/30 bg-secondary/5">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <GraduationCap className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-secondary mb-2">
                  Important Note
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  This AI assistant provides general career guidance and information about GCUF programs. 
                  It does not replace official university counseling services. For admission requirements, 
                  fee structures, and official program details, please visit gcuf.edu.pk or contact the 
                  GCUF admissions office directly.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};