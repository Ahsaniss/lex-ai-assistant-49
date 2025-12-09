import { useNavigate } from "react-router-dom";
import { CategoryCard } from "@/components/CategoryCard";
import { 
  Briefcase, 
  Code, 
  FlaskConical, 
  Stethoscope, 
  Building2, 
  Palette,
  GraduationCap,
  TrendingUp,
  Globe,
  Users,
  BookOpen,
  Compass
} from "lucide-react";

export const Categories = () => {
  const navigate = useNavigate();

  const careerCategories = [
    {
      id: "business",
      title: "Business & Management",
      description: "MBA, Marketing, HR, Finance, Entrepreneurship, and Business Administration",
      icon: Briefcase,
      keywords: ["MBA", "marketing", "finance", "management", "business", "accounting"]
    },
    {
      id: "technology",
      title: "Technology & IT", 
      description: "Software Development, Data Science, Cybersecurity, AI/ML, Web Development",
      icon: Code,
      keywords: ["software", "programming", "data science", "IT", "cybersecurity", "web development"]
    },
    {
      id: "sciences",
      title: "Natural Sciences",
      description: "Physics, Chemistry, Biology, Environmental Science, Research",
      icon: FlaskConical,
      keywords: ["physics", "chemistry", "biology", "research", "lab", "environmental"]
    },
    {
      id: "healthcare",
      title: "Healthcare & Life Sciences",
      description: "Pharmacy, Biotechnology, Microbiology, Public Health, Nutrition",
      icon: Stethoscope,
      keywords: ["pharmacy", "biotechnology", "microbiology", "health", "nutrition", "medicine"]
    },
    {
      id: "engineering",
      title: "Engineering",
      description: "Electrical, Mechanical, Civil, Chemical Engineering and related fields",
      icon: Building2,
      keywords: ["electrical", "mechanical", "civil", "chemical", "engineering", "technical"]
    },
    {
      id: "arts",
      title: "Arts & Humanities",
      description: "Literature, History, Philosophy, Languages, Islamic Studies, Media",
      icon: Palette,
      keywords: ["arts", "literature", "history", "languages", "media", "humanities"]
    },
    {
      id: "education",
      title: "Education & Teaching",
      description: "Teaching careers, Educational administration, Training & Development",
      icon: GraduationCap,
      keywords: ["teaching", "education", "lecturer", "professor", "training", "curriculum"]
    },
    {
      id: "economics",
      title: "Economics & Finance",
      description: "Banking, Investment, Economic analysis, Financial planning, Statistics",
      icon: TrendingUp,
      keywords: ["economics", "banking", "investment", "statistics", "financial", "analysis"]
    },
    {
      id: "international",
      title: "International Relations",
      description: "Diplomacy, Foreign affairs, International organizations, Policy",
      icon: Globe,
      keywords: ["diplomacy", "international", "foreign affairs", "UN", "policy", "relations"]
    },
    {
      id: "social-sciences",
      title: "Social Sciences",
      description: "Psychology, Sociology, Political Science, Social Work",
      icon: Users,
      keywords: ["psychology", "sociology", "political science", "social work", "counseling"]
    },
    {
      id: "islamic-studies",
      title: "Islamic Studies & Arabic",
      description: "Islamic Education, Arabic Language, Quranic Studies, Islamic Banking",
      icon: BookOpen,
      keywords: ["islamic", "arabic", "quran", "shariah", "islamic banking", "religious"]
    },
    {
      id: "general",
      title: "General Career Guidance",
      description: "General career questions, skill development, and professional growth",
      icon: Compass,
      keywords: ["general", "career advice", "guidance", "skills", "professional growth"]
    }
  ];

  const handleCategoryClick = (category: typeof careerCategories[0]) => {
    // Navigate to chat with the category pre-selected
    navigate(`/chat?category=${encodeURIComponent(category.title)}`);
  };

  const handleInfoClick = (category: typeof careerCategories[0]) => {
    // Navigate to info page for this category
    navigate(`/legal-info/${category.id}`);
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <GraduationCap className="w-12 h-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Career Paths
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose a career field to get specialized guidance from our AI counselor, tailored 
            to GCUF programs and the Pakistani job market.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {careerCategories.map((category) => (
            <div key={category.id} className="group flex flex-col">
              <CategoryCard
                title={category.title}
                description={category.description}
                icon={category.icon}
                onClick={() => handleCategoryClick(category)}
                className="flex-1"
              />
              
              {/* Info Link */}
              <button
                onClick={() => handleInfoClick(category)}
                className="mt-4 p-2 text-sm text-primary hover:text-primary/80 hover:bg-primary/5 rounded-md transition-all duration-200 text-center border border-transparent hover:border-primary/20"
              >
                Learn more about {category.title} →
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Not Sure About Your Career?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our AI counselor can help you explore your interests and find the right career path. 
              Start a general conversation and describe your skills and aspirations.
            </p>
            <button
              onClick={() => navigate("/chat")}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Start General Career Chat
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-secondary/10 border border-secondary/20 rounded-lg">
          <div className="flex items-start space-x-3">
            <GraduationCap className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-secondary mb-2">Career Guidance Note</h3>
              <p className="text-sm text-foreground/80">
                The information provided by our AI counselor is for guidance purposes only. 
                For official admission requirements, fee structures, and program availability, 
                please contact GCUF admissions office or visit gcuf.edu.pk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};