import { GraduationCap, Brain, BookOpen, Users, Zap, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Guidance",
      description: "Advanced AI trained on career data, GCUF programs, and job market trends"
    },
    {
      icon: Zap,
      title: "Instant Responses",
      description: "Get immediate career advice and program information 24/7"
    },
    {
      icon: BookOpen,
      title: "GCUF Focused",
      description: "Tailored guidance for Government College University Faisalabad students"
    },
    {
      icon: Users,
      title: "Accessible to All",
      description: "Free career counseling available to all GCUF students and aspirants"
    }
  ];

  const techStack = [
    "React.js", "TypeScript", "Gemini AI", "Tailwind CSS", 
    "GCUF Program Database", "Urdu Language Support", "Career Analytics"
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <GraduationCap className="w-16 h-16 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            About GCUF Career AI
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to help GCUF students discover their ideal career paths 
            through AI-powered personalized guidance.
          </p>
        </div>

        <Card className="mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-heading mb-4">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Career counseling should be accessible to every student. GCUF Career AI bridges 
              the gap between students and career guidance, providing instant, personalized 
              advice about programs, job prospects, and professional development tailored to 
              GCUF's academic offerings and the Pakistani job market.
            </p>
          </CardContent>
        </Card>

        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
            What We Offer
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-heading flex items-center space-x-2">
              <Brain className="w-6 h-6 text-primary" />
              <span>Technology We Use</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">{tech}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#1a365d] to-[#2a4365] text-white rounded-xl p-8 max-w-4xl mx-auto border border-[#d69e2e]/30">
            <h2 className="text-2xl font-heading font-bold mb-4 flex items-center justify-center space-x-2">
              <Heart className="w-6 h-6 text-red-400" />
              <span>Ready to Explore Your Career?</span>
            </h2>
            <p className="text-white/90 mb-6">Start your personalized career counseling journey today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/chat" className="bg-gradient-to-r from-[#d69e2e] to-[#ed8936] hover:from-[#b7791f] hover:to-[#dd6b20] text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300">
                Start Career Chat Now
              </a>
              <a href="/categories" className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Explore Career Paths
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};