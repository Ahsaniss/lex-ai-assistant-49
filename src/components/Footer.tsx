import { Scale, Heart, Shield, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-legal-primary via-legal-secondary to-legal-accent text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="font-heading font-bold text-2xl text-white">🇵🇰 LegalBot</span>
                <p className="text-white/80 text-sm">Pakistani Legal Assistant</p>
              </div>
            </div>
            <p className="text-white/90 mb-6 max-w-md leading-relaxed">
              Your trusted AI-powered Pakistani legal assistant. Get instant legal guidance based on 
              Pakistan Constitution, PPC, CPC, and Supreme Court precedents.
            </p>
            <div className="flex items-center space-x-2 text-sm bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <span className="text-white/90">Developed with</span>
              <Heart className="h-4 w-4 text-red-300 mx-1 animate-pulse" />
              <span className="font-semibold text-white">Ahsan TECH</span>
            </div>
          </div>

          {/* Quick Access */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Access</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/categories" className="text-white/80 hover:text-white transition-colors flex items-center space-x-2 hover:translate-x-1 duration-200">
                  <span>📚 Legal Categories</span>
                </Link>
              </li>
              <li>
                <Link to="/chat" className="text-white/80 hover:text-white transition-colors flex items-center space-x-2 hover:translate-x-1 duration-200">
                  <span>💬 Start Chat</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors flex items-center space-x-2 hover:translate-x-1 duration-200">
                  <span>ℹ️ About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors flex items-center space-x-2 hover:translate-x-1 duration-200">
                  <span>📞 Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Pakistani Legal Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Legal Resources</h3>
            <ul className="space-y-3">
              <li>
                <button className="text-white/80 hover:text-white transition-colors flex items-center space-x-2 hover:translate-x-1 duration-200">
                  <Shield className="h-4 w-4" />
                  <span>Pakistan Constitution</span>
                </button>
              </li>
              <li>
                <button className="text-white/80 hover:text-white transition-colors flex items-center space-x-2 hover:translate-x-1 duration-200">
                  <FileText className="h-4 w-4" />
                  <span>Supreme Court Cases</span>
                </button>
              </li>
              <li>
                <button className="text-white/80 hover:text-white transition-colors flex items-center space-x-2 hover:translate-x-1 duration-200">
                  <Scale className="h-4 w-4" />
                  <span>High Court Precedents</span>
                </button>
              </li>
              <li>
                <button className="text-white/80 hover:text-white transition-colors hover:translate-x-1 duration-200">
                  🇵🇰 Pakistani Law Guide
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Pakistan Legal Disclaimer */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-8">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-yellow-500/20 rounded-lg">
                <Shield className="h-6 w-6 text-yellow-300 flex-shrink-0" />
              </div>
              <div>
                <p className="font-semibold text-yellow-300 mb-2 text-lg">🇵🇰 Pakistani Legal Disclaimer</p>
                <p className="text-white/90 leading-relaxed">
                  This AI assistant provides general legal information based on Pakistani Constitution, Pakistan Penal Code (PPC), 
                  Civil Procedure Code (CPC), and court precedents. It does not constitute legal advice or create an attorney-client 
                  relationship. For specific legal matters, consult a qualified Pakistani advocate or lawyer licensed by the Pakistan Bar Council.
                </p>
                <p className="text-white/80 text-sm mt-3">
                  ⚖️ Always verify information with current Pakistani laws and consult legal professionals for case-specific guidance.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-white/90">&copy; 2024 LegalBot by Ahsan TECH</span>
              <span className="text-white/60">•</span>
              <span className="text-white/80">🇵🇰 Made for Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};