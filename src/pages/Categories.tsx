import { useNavigate } from "react-router-dom";
import { CategoryCard } from "@/components/CategoryCard";
import { 
  Home, 
  Building, 
  Shield, 
  Briefcase, 
  Globe, 
  Heart,
  Car,
  GraduationCap,
  Banknote,
  Users,
  FileText,
  Scale
} from "lucide-react";

export const Categories = () => {
  const navigate = useNavigate();

  const legalCategories = [
    {
      id: "family",
      title: "Family Law",
      description: "Divorce, custody, adoption, domestic relations, and family disputes",
      icon: Home,
      keywords: ["divorce", "custody", "adoption", "marriage", "domestic violence"]
    },
    {
      id: "property",
      title: "Property Law", 
      description: "Real estate, landlord-tenant, property disputes, and ownership rights",
      icon: Building,
      keywords: ["real estate", "landlord", "tenant", "property rights", "zoning"]
    },
    {
      id: "criminal",
      title: "Criminal Law",
      description: "Criminal charges, defense, rights, and criminal justice processes",
      icon: Shield,
      keywords: ["criminal charges", "defense", "bail", "sentencing", "rights"]
    },
    {
      id: "business",
      title: "Business & Contracts",
      description: "Business formation, contracts, employment, and commercial law",
      icon: Briefcase,
      keywords: ["contracts", "business formation", "employment", "commercial", "startup"]
    },
    {
      id: "immigration",
      title: "Immigration Law",
      description: "Visas, citizenship, deportation, asylum, and immigration processes",
      icon: Globe,
      keywords: ["visa", "citizenship", "green card", "asylum", "deportation"]
    },
    {
      id: "personal-injury",
      title: "Personal Injury",
      description: "Accidents, medical malpractice, slip and fall, and injury claims",
      icon: Heart,
      keywords: ["accident", "medical malpractice", "slip and fall", "injury", "compensation"]
    },
    {
      id: "traffic",
      title: "Traffic & DUI",
      description: "Traffic violations, DUI/DWI, license issues, and driving offenses",
      icon: Car,
      keywords: ["traffic ticket", "DUI", "DWI", "license", "speeding"]
    },
    {
      id: "education",
      title: "Education Law",
      description: "Student rights, special education, discrimination, and academic issues",
      icon: GraduationCap,
      keywords: ["student rights", "special education", "discrimination", "academic"]
    },
    {
      id: "bankruptcy",
      title: "Bankruptcy & Debt",
      description: "Debt relief, bankruptcy filing, creditor issues, and financial law",
      icon: Banknote,
      keywords: ["bankruptcy", "debt relief", "creditors", "financial", "foreclosure"]
    },
    {
      id: "civil-rights",
      title: "Civil Rights",
      description: "Discrimination, constitutional rights, and civil liberties",
      icon: Users,
      keywords: ["discrimination", "civil rights", "constitutional", "liberties", "equality"]
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      description: "Patents, trademarks, copyrights, and IP protection",
      icon: FileText,
      keywords: ["patent", "trademark", "copyright", "intellectual property", "IP"]
    },
    {
      id: "general",
      title: "General Legal Help",
      description: "Other legal questions and general legal guidance",
      icon: Scale,
      keywords: ["general", "legal advice", "consultation", "help", "guidance"]
    }
  ];

  const handleCategoryClick = (category: typeof legalCategories[0]) => {
    // Navigate to chat with the category pre-selected
    navigate(`/chat?category=${encodeURIComponent(category.title)}`);
  };

  const handleInfoClick = (category: typeof legalCategories[0]) => {
    // Navigate to legal info page for this category
    navigate(`/legal-info/${category.id}`);
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Scale className="w-12 h-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Legal Categories
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose a legal area to get specialized help from our AI assistant, or browse 
            educational content to learn more about specific legal topics.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {legalCategories.map((category) => (
            <div key={category.id} className="group">
              <CategoryCard
                title={category.title}
                description={category.description}
                icon={category.icon}
                onClick={() => handleCategoryClick(category)}
                className="h-full"
              />
              
              {/* Info Link */}
              <button
                onClick={() => handleInfoClick(category)}
                className="w-full mt-2 text-sm text-primary hover:text-primary/80 transition-colors"
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
              Don't See Your Legal Issue?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our AI assistant can help with a wide range of legal topics beyond these categories. 
              Start a general conversation and describe your situation.
            </p>
            <button
              onClick={() => navigate("/chat")}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Start General Legal Chat
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-legal-warning/10 border border-legal-warning/20 rounded-lg">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-legal-warning mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-legal-warning mb-2">Legal Disclaimer</h3>
              <p className="text-sm text-foreground/80">
                The information provided in these categories and by our AI assistant is for 
                educational purposes only and does not constitute legal advice. Always consult 
                with a qualified attorney for specific legal matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};