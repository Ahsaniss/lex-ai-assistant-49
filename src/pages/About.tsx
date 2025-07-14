import { Scale, Brain, Shield, Users, Zap, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced AI trained on comprehensive legal databases and case law"
    },
    {
      icon: Zap,
      title: "Instant Responses",
      description: "Get immediate answers to your legal questions 24/7"
    },
    {
      icon: Shield,
      title: "Privacy Protected",
      description: "Your conversations are encrypted and completely confidential"
    },
    {
      icon: Users,
      title: "Accessible to All",
      description: "Free legal guidance available to everyone, regardless of income"
    }
  ];

  const techStack = [
    "React.js", "TypeScript", "Gemini AI", "Tailwind CSS", 
    "Pakistani Legal Database", "Urdu Language Processing", "Constitutional Law AI"
  ];

  const teamMembers = [
    {
      name: "Ahsan TECH",
      role: "Founder & Lead Developer",
      description: "Passionate about making legal help accessible through technology"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Scale className="w-16 h-16 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            About 🇵🇰 Advocaid
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to democratize Pakistani legal assistance by making professional 
            legal guidance accessible to everyone through the power of artificial intelligence.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-heading mb-4">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Legal help shouldn't be a luxury. We believe everyone deserves access to quality 
              Pakistani legal information and guidance. 🇵🇰 Advocaid bridges the gap between complex Pakistani legal 
              systems and everyday people who need help understanding their rights and options under Pakistani law. 
              Our AI assistant provides instant, reliable legal information based on Pakistani Constitution, PPC, CPC, 
              and court precedents to help you make informed decisions about your legal matters.
            </p>
          </CardContent>
        </Card>

        {/* What We Do */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
            What 🇵🇰 Advocaid Does
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
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-heading flex items-center space-x-2">
                <Brain className="w-6 h-6 text-primary" />
                <span>Technology We Use</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                🇵🇰 Advocaid is built using cutting-edge technologies to ensure reliable, 
                fast, and secure Pakistani legal assistance. Our AI is powered by Google's Gemini, 
                trained on extensive Pakistani legal databases including Constitution, PPC, CPC, 
                and constantly updated to provide accurate information specific to Pakistani law.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-heading flex items-center space-x-2">
                <Shield className="w-6 h-6 text-primary" />
                <span>Our Commitment</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Privacy First</h4>
                  <p className="text-muted-foreground text-sm">
                    Your legal conversations are private and secure. We never store or share personal information.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Accuracy & Updates</h4>
                  <p className="text-muted-foreground text-sm">
                    We continuously update our AI with the latest legal information and precedents.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Ethical Guidelines</h4>
                  <p className="text-muted-foreground text-sm">
                    We follow strict ethical guidelines and clearly distinguish between AI assistance and professional legal advice.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
            Meet the Team
          </h2>
          
          <div className="max-w-2xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{member.name}</CardTitle>
                  <CardDescription className="text-lg text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Legal Disclaimer */}
        <Card className="border-legal-warning/30 bg-legal-warning/5">
          <CardHeader>
            <CardTitle className="text-2xl font-heading flex items-center space-x-2 text-legal-warning">
              <Scale className="w-6 h-6" />
              <span>Important Legal Disclaimer</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm text-foreground/80">
              <p>
                <strong>🇵🇰 Advocaid is an AI-powered Pakistani legal information service</strong> that provides 
                general legal information and educational content. We do not provide legal advice, 
                and use of our service does not create an attorney-client relationship.
              </p>
              
              <p>
                <strong>Not a Substitute for Professional Legal Advice:</strong> The information 
                provided by Advocaid should not be used as a substitute for professional legal 
                advice from a qualified attorney. Laws vary by jurisdiction and are subject to change.
              </p>
              
              <p>
                <strong>No Guarantees:</strong> While we strive to provide accurate and up-to-date 
                information, we make no guarantees about the completeness, accuracy, or applicability 
                of the information to your specific situation.
              </p>
              
              <p>
                <strong>Seek Professional Help:</strong> For specific legal matters, complex situations, 
                or if you need representation, please consult with a licensed attorney in your jurisdiction.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-900 dark:to-slate-950 text-white rounded-xl p-8 max-w-4xl mx-auto border border-slate-700">
            <h2 className="text-2xl font-heading font-bold mb-4 flex items-center justify-center space-x-2">
              <Heart className="w-6 h-6 text-red-400" />
              <span>Ready to Get Pakistani Legal Help?</span>
            </h2>
            <p className="text-white/90 mb-6">
              Join thousands of Pakistanis who trust 🇵🇰 Advocaid for their legal questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/chat"
                className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Legal Chat Now
              </a>
              <a
                href="/categories"
                className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Browse Law Categories
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};