import { useState } from "react";
import { Link } from "react-router-dom";
import { Scale, MessageSquare, Shield, Users, Star, ArrowRight, CheckCircle, Upload, Gavel, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import highCourtImage from "@/assets/high-court-pakistan.jpg";
import pakistanJustice from "@/assets/pakistan-justice.jpg";
import pakistanLaw from "@/assets/pakistan-law.jpg";

export const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const features = [
    {
      icon: Upload,
      title: "Document Analysis",
      description: "Upload legal documents for AI-powered analysis according to Pakistani law"
    },
    {
      icon: Scale,
      title: "Constitutional Guidance",
      description: "Legal advice based on Pakistani Constitution and established court precedents"
    },
    {
      icon: Shield,
      title: "Urdu & English Support",
      description: "Communicate in both languages for better understanding and accessibility"
    },
    {
      icon: Gavel,
      title: "Court Precedents",
      description: "Guidance based on Supreme Court and High Court decisions in Pakistan"
    }
  ];

  const testimonials = [
    {
      name: "Ahmad Ali",
      role: "Business Owner, Lahore",
      content: "Helped me understand property rights under Pakistani law. Much clearer than legal jargon!",
      rating: 5
    },
    {
      name: "Fatima Khan",
      role: "Teacher, Karachi",
      content: "اردو میں جواب بھی ملتے ہیں۔ Family law guidance was very helpful and accurate.",
      rating: 5
    },
    {
      name: "Muhammad Hassan",
      role: "Advocate, Islamabad",
      content: "Great tool for quick constitutional references. Helps explain complex legal concepts to clients.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Is this specific to Pakistani law?",
      answer: "Yes, our AI is specifically trained on Pakistani Constitution, Pakistan Penal Code, Civil Procedure Code, and major Pakistani court precedents."
    },
    {
      question: "Can I upload documents in Urdu?",
      answer: "Yes, you can upload documents in both Urdu and English. Our AI can analyze documents in both languages."
    },
    {
      question: "Does this replace a Pakistani lawyer?",
      answer: "No, this provides general legal information based on Pakistani law. For specific cases, always consult a qualified Pakistani advocate or lawyer."
    },
    {
      question: "Which courts' precedents does it include?",
      answer: "Our AI includes precedents from the Supreme Court of Pakistan, High Courts, and references to major legal statutes like PPC, CPC, and family laws."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with High Court Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${highCourtImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-800/50 to-slate-900/60" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full backdrop-blur-sm border border-amber-300 shadow-lg">
                <Scale className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 drop-shadow-xl leading-tight">
              Advocaid Legal Assistant
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-lg px-2">
              Get free AI-based legal help according to Pakistani Constitution and law. Upload documents for case analysis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/chat">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 !bg-gradient-to-r !from-amber-400 !to-orange-500 hover:!from-amber-500 hover:!to-orange-600"
                >
                  Start Legal Chat
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <Link to="/categories">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-4 text-lg backdrop-blur-sm border-white/30 text-white hover:bg-white/10 hover:text-white transition-all duration-300 dark:border-white/30 dark:text-white dark:hover:bg-white/10 border-slate-800/30 text-slate-800 hover:bg-slate-800/10 hover:text-slate-900"
                >
                  Browse Law Categories
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-white/80">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/20">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Pakistani Constitution</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/20">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Urdu & English</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/20">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Document Analysis</span>
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
              Why Choose Our Pakistani Legal Assistant?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional AI-powered legal guidance based on Pakistani Constitution and law
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Pakistani Legal System Section */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Built for Pakistani Legal System
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our AI assistant is specifically trained on Pakistani legal framework, including 
                the Constitution of Pakistan, Pakistan Penal Code, Civil Procedure Code, and 
                major legal precedents from Pakistani courts.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Constitutional Law Analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Islamic Law Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Provincial & Federal Law Coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Court Precedent References</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={pakistanJustice} 
                alt="Pakistani Justice System" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              What Our Pakistani Users Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real feedback from people across Pakistan who've used our legal assistant
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

      {/* Legal Categories Preview */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Pakistani Legal Practice Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get specialized assistance across different areas of Pakistani law
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <BookOpen className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Family Law</h3>
                <p className="text-sm text-muted-foreground">Marriage, divorce, custody under Islamic and Pakistani law</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Scale className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Property Law</h3>
                <p className="text-sm text-muted-foreground">Land rights, property disputes, registration laws</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Criminal Law</h3>
                <p className="text-sm text-muted-foreground">Pakistan Penal Code, criminal procedure, bail</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link to="/categories">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                View All Categories
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
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

      {/* CTA Section with Pakistani Law Image */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${pakistanLaw})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-800/60 to-slate-900/70" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white drop-shadow-lg">
            Ready to Get Pakistani Legal Help?
          </h2>
          <p className="text-xl mb-8 text-white/95 drop-shadow-md">
            Start your conversation with our Pakistani AI legal assistant today
          </p>
          <Link to="/chat">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0"
            >
              Start Legal Chat Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};