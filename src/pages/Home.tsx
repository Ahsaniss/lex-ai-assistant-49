import { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, MessageSquare, BookOpen, Users, Star, ArrowRight, CheckCircle, Briefcase, Target, Compass, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import gcufCampus from "@/assets/gcuf-campus.jpg";
import careerCounseling from "@/assets/career-counseling.jpg";
import careerSuccess from "@/assets/career-success.jpg";

export const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const features = [
    {
      icon: Compass,
      title: "Career Exploration",
      description: "Discover career paths aligned with your interests, skills, and GCUF programs"
    },
    {
      icon: GraduationCap,
      title: "Program Guidance",
      description: "Get detailed information about GCUF faculties, departments, and degree programs"
    },
    {
      icon: Target,
      title: "Personalized Advice",
      description: "Receive tailored career recommendations based on your academic background"
    },
    {
      icon: TrendingUp,
      title: "Job Market Insights",
      description: "Learn about industry trends, job prospects, and skills in demand"
    }
  ];

  const testimonials = [
    {
      name: "Ayesha Malik",
      role: "BS Computer Science Student, GCUF",
      content: "This AI helped me choose between Software Engineering and Data Science. Now I have a clear career roadmap!",
      rating: 5
    },
    {
      name: "Hassan Ahmed",
      role: "MBA Student, GCUF",
      content: "I was confused about specializations. The career counselor AI gave me insights I couldn't find anywhere else.",
      rating: 5
    },
    {
      name: "Fatima Zahra",
      role: "BS Biotechnology Student, GCUF",
      content: "Finally understood the career options after biotechnology. Very helpful for planning my future!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Is this specifically for GCUF students?",
      answer: "Yes! Our AI is tailored for Government College University Faisalabad students, with information about GCUF programs, faculties, and career paths specific to our institution."
    },
    {
      question: "Can I ask about any career field?",
      answer: "Absolutely! You can explore careers in IT, Business, Sciences, Arts, Engineering, Healthcare, and more. We provide guidance relevant to GCUF programs and Pakistani job market."
    },
    {
      question: "Does this replace the university counseling office?",
      answer: "No, this is a supplementary tool. For official admissions, scholarships, and academic matters, please contact GCUF's official counseling services."
    },
    {
      question: "Is the service available in Urdu?",
      answer: "Yes! You can communicate in both English and Urdu. Our AI understands and responds in your preferred language."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with GCUF Campus Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${gcufCampus})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/80 via-[#2a4365]/70 to-[#1a365d]/80" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-[#d69e2e] to-[#ed8936] rounded-full backdrop-blur-sm border border-[#d69e2e] shadow-lg">
                <GraduationCap className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 drop-shadow-xl leading-tight">
              GCUF Career Counselor AI
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-lg px-2">
              Your AI-powered career guide for Government College University Faisalabad. Explore careers, find your path, and plan your future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12">
              <Link to="/chat">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-gradient-to-r from-[#d69e2e] to-[#ed8936] hover:from-[#b7791f] hover:to-[#dd6b20] text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                >
                  Start Career Chat
                  <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                </Button>
              </Link>
              
              <Link to="/categories">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg backdrop-blur-sm border-white/50 text-slate-900 bg-white/90 hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300"
                >
                  Explore Career Paths
                </Button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-xs sm:text-sm text-white/80 px-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/20">
                <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-400" />
                <span className="whitespace-nowrap">GCUF Programs</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/20">
                <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-400" />
                <span className="whitespace-nowrap">Urdu & English</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/20">
                <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-400" />
                <span className="whitespace-nowrap">24/7 Available</span>
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
              Why Choose GCUF Career AI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI-powered career guidance designed specifically for GCUF students
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

      {/* GCUF Programs Section */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Built for GCUF Students
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our AI understands GCUF's academic structure, programs, and career pathways. 
                Get guidance tailored to your faculty, department, and career aspirations within 
                the Pakistani job market context.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Arts & Social Sciences Careers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Economics & Management Opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Science & Technology Pathways</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Life Sciences & Healthcare</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={careerCounseling} 
                alt="Career Counseling Session" 
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
              What GCUF Students Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real feedback from students who've used our career counselor
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

      {/* Career Categories Preview */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Explore Career Fields
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get specialized guidance across different career domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Briefcase className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Business & Management</h3>
                <p className="text-sm text-muted-foreground">MBA, Banking, Marketing, HR, Entrepreneurship</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <GraduationCap className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Technology & IT</h3>
                <p className="text-sm text-muted-foreground">Software Development, Data Science, Cybersecurity</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <BookOpen className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Sciences & Research</h3>
                <p className="text-sm text-muted-foreground">Biology, Chemistry, Physics, Environmental Science</p>
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
                View All Career Paths
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

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${careerSuccess})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/85 via-[#2a4365]/75 to-[#1a365d]/85" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white drop-shadow-lg">
            Ready to Plan Your Career?
          </h2>
          <p className="text-xl mb-8 text-white/95 drop-shadow-md">
            Start your personalized career counseling session today
          </p>
          <Link to="/chat">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-[#d69e2e] to-[#ed8936] hover:from-[#b7791f] hover:to-[#dd6b20] text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0"
            >
              Start Career Chat Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};