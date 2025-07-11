import { useState } from "react";
import { Link } from "react-router-dom";
import { Scale, MessageSquare, Shield, Users, Star, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const features = [
    {
      icon: MessageSquare,
      title: "Instant Legal Help",
      description: "Get immediate responses to your legal questions 24/7"
    },
    {
      icon: Shield,
      title: "Secure & Confidential",
      description: "Your conversations are private and protected"
    },
    {
      icon: Users,
      title: "Expert Knowledge",
      description: "AI trained on extensive legal databases and case law"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "LegalBot helped me understand contract terms before signing. Saved me time and money!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Property Owner",
      content: "Quick answers about tenant rights. Much faster than waiting for a lawyer consultation.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Recent Graduate",
      content: "Perfect for understanding employment law basics. Very user-friendly interface.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Is LegalBot a replacement for a lawyer?",
      answer: "No, LegalBot provides general legal information and guidance. For complex legal matters or representation, please consult with a qualified attorney."
    },
    {
      question: "How accurate is the legal information?",
      answer: "Our AI is trained on comprehensive legal databases, but laws vary by jurisdiction. Always verify information with local legal authorities."
    },
    {
      question: "Is my information kept confidential?",
      answer: "Yes, we take privacy seriously. Your conversations are encrypted and not shared with third parties."
    },
    {
      question: "What areas of law does LegalBot cover?",
      answer: "We cover family law, property law, business contracts, criminal law, immigration, and more. Check our categories page for the full list."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/10 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Scale className="w-16 h-16 text-primary" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Your Smart Legal Assistant
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Get free AI-based legal help in seconds. Professional legal guidance at your fingertips.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/chat">
                <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                  Start Chatting
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <Link to="/categories">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  Browse Categories
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Free to Use</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Privacy Protected</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Why Choose LegalBot?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional legal assistance powered by advanced AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {feature.title}
                  </CardTitle>
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
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real feedback from people who've used LegalBot
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl italic text-foreground mb-6">
                    "{testimonials[activeTestimonial].content}"
                  </blockquote>
                  
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonials[activeTestimonial].name}
                    </p>
                    <p className="text-muted-foreground">
                      {testimonials[activeTestimonial].role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Get Legal Help?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start your conversation with our AI legal assistant today
          </p>
          <Link to="/chat">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold">
              Start Chatting Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};