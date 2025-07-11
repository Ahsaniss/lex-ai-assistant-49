import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Scale, ExternalLink, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const LegalInfo = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const legalInfoData: Record<string, {
    title: string;
    description: string;
    sections: Array<{
      title: string;
      content: string;
      keyPoints: string[];
    }>;
    relatedLaws: string[];
    commonQuestions: Array<{
      question: string;
      answer: string;
    }>;
  }> = {
    "family-law": {
      title: "Family Law",
      description: "Comprehensive information about family legal matters including divorce, custody, and domestic relations.",
      sections: [
        {
          title: "Divorce Proceedings",
          content: "Divorce is the legal dissolution of a marriage. The process varies by state but generally involves filing a petition, serving papers, and reaching agreements on property division, custody, and support.",
          keyPoints: [
            "No-fault vs. fault-based divorce options",
            "Property division (community vs. separate property)",
            "Spousal support considerations",
            "Waiting periods vary by state"
          ]
        },
        {
          title: "Child Custody",
          content: "Child custody determines where children live and who makes decisions about their upbringing. Courts prioritize the best interests of the child in all custody decisions.",
          keyPoints: [
            "Physical vs. legal custody distinctions",
            "Joint custody arrangements",
            "Factors courts consider in custody decisions",
            "Modification of custody orders"
          ]
        },
        {
          title: "Child Support",
          content: "Child support is financial assistance provided by a non-custodial parent to help cover the costs of raising a child. Most states use guidelines to calculate support amounts.",
          keyPoints: [
            "Income-based calculation methods",
            "Health insurance and medical expenses",
            "Modification when circumstances change",
            "Enforcement mechanisms for non-payment"
          ]
        }
      ],
      relatedLaws: [
        "Uniform Child Custody Jurisdiction Act (UCCJEA)",
        "Child Support Enforcement Act",
        "Domestic Violence Prevention Act",
        "Adoption and Safe Families Act"
      ],
      commonQuestions: [
        {
          question: "How long does a divorce take?",
          answer: "Divorce timelines vary significantly by state and complexity. Simple uncontested divorces may take 2-6 months, while contested divorces can take a year or more."
        },
        {
          question: "Can child custody be modified?",
          answer: "Yes, custody orders can be modified if there's a significant change in circumstances that affects the child's best interests."
        },
        {
          question: "What is the difference between legal and physical custody?",
          answer: "Legal custody refers to decision-making authority about the child's upbringing, while physical custody determines where the child lives."
        }
      ]
    },
    "property": {
      title: "Property Law",
      description: "Essential information about real estate transactions, landlord-tenant relationships, and property rights.",
      sections: [
        {
          title: "Real Estate Transactions",
          content: "Buying or selling real estate involves multiple legal steps including contracts, inspections, financing, and closing procedures.",
          keyPoints: [
            "Purchase agreement essentials",
            "Title search and insurance importance",
            "Contingency clauses protection",
            "Closing process and documentation"
          ]
        },
        {
          title: "Landlord-Tenant Law",
          content: "This area governs the relationship between property owners and renters, establishing rights and responsibilities for both parties.",
          keyPoints: [
            "Security deposit limitations and returns",
            "Notice requirements for termination",
            "Habitability and repair obligations",
            "Eviction procedures and tenant defenses"
          ]
        },
        {
          title: "Property Rights",
          content: "Property ownership comes with various rights and restrictions that may be limited by zoning laws, easements, and community regulations.",
          keyPoints: [
            "Bundle of rights concept",
            "Easements and right-of-way issues",
            "Zoning restrictions and variances",
            "Homeowner association rules"
          ]
        }
      ],
      relatedLaws: [
        "Fair Housing Act",
        "Truth in Lending Act (TILA)",
        "Real Estate Settlement Procedures Act (RESPA)",
        "Uniform Residential Landlord Tenant Act"
      ],
      commonQuestions: [
        {
          question: "What happens if I break a lease early?",
          answer: "Breaking a lease early may result in penalties, loss of security deposit, and potential liability for remaining rent, though some states have mitigation requirements for landlords."
        },
        {
          question: "Do I need a lawyer to buy a house?",
          answer: "While not always legally required, having a real estate attorney can protect your interests, especially in complex transactions or when issues arise."
        },
        {
          question: "How much notice must a landlord give before entering my apartment?",
          answer: "Most states require 24-48 hours notice for non-emergency entry, though specific requirements vary by jurisdiction."
        }
      ]
    },
    // Add more categories as needed...
    "criminal": {
      title: "Criminal Law",
      description: "Important information about criminal charges, rights of the accused, and the criminal justice process.",
      sections: [
        {
          title: "Constitutional Rights",
          content: "Every person accused of a crime has fundamental constitutional rights that protect them throughout the criminal justice process.",
          keyPoints: [
            "Right to remain silent (5th Amendment)",
            "Right to legal representation (6th Amendment)",
            "Protection against unreasonable search (4th Amendment)",
            "Right to a speedy and public trial"
          ]
        },
        {
          title: "Criminal Charges",
          content: "Criminal charges are categorized by severity, with different procedures and potential penalties for each type.",
          keyPoints: [
            "Felony vs. misdemeanor distinctions",
            "Arrest and booking procedures",
            "Bail and pretrial release options",
            "Plea bargaining process"
          ]
        }
      ],
      relatedLaws: [
        "U.S. Constitution (Bill of Rights)",
        "Federal Rules of Criminal Procedure",
        "State Criminal Codes",
        "Miranda Rights Requirements"
      ],
      commonQuestions: [
        {
          question: "When should I contact a criminal defense attorney?",
          answer: "Contact an attorney immediately upon arrest or if you believe you're under investigation. Early legal representation can significantly impact your case outcome."
        },
        {
          question: "What should I do if police want to question me?",
          answer: "You have the right to remain silent and request an attorney. It's generally advisable to exercise these rights and avoid answering questions without legal counsel present."
        }
      ]
    }
  };

  const categoryData = category ? legalInfoData[category] : null;

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-6">The legal category you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/categories")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Categories
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/categories")}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Categories
          </Button>
          
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Scale className="w-12 h-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground text-center mb-4">
            {categoryData.title}
          </h1>
          
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            {categoryData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Legal Sections */}
            {categoryData.sections.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-2xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4 leading-relaxed">
                    {section.content}
                  </p>
                  
                  <h4 className="font-semibold text-foreground mb-3">Key Points:</h4>
                  <ul className="space-y-2">
                    {section.keyPoints.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}

            {/* Common Questions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Common Questions</CardTitle>
                <CardDescription>
                  Frequently asked questions about {categoryData.title.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {categoryData.commonQuestions.map((qa, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-foreground mb-2">
                      {qa.question}
                    </h4>
                    <p className="text-muted-foreground">
                      {qa.answer}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Chat with AI */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Specific Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Get personalized legal guidance about {categoryData.title.toLowerCase()} from our AI assistant.
                </p>
                <Button 
                  className="w-full"
                  onClick={() => navigate(`/chat?category=${encodeURIComponent(categoryData.title)}`)}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat with Legal AI
                </Button>
              </CardContent>
            </Card>

            {/* Related Laws */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Related Laws & Acts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categoryData.relatedLaws.map((law, index) => (
                    <Badge key={index} variant="secondary" className="block text-center p-2">
                      {law}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-accent/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <ExternalLink className="w-4 h-4 inline mr-1" />
                    For full text of laws, consult official legal databases or speak with an attorney.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="border-legal-warning/30 bg-legal-warning/5">
              <CardContent className="p-4">
                <div className="flex items-start space-x-2">
                  <Scale className="w-5 h-5 text-legal-warning mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-legal-warning mb-2">Legal Disclaimer</h4>
                    <p className="text-xs text-foreground/80">
                      This information is for educational purposes only and does not constitute legal advice. 
                      Laws vary by jurisdiction and change over time. Consult with a qualified attorney for 
                      advice specific to your situation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};