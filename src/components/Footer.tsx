import { Scale, Heart, Shield, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-8 w-8 text-primary" />
              <span className="font-heading font-bold text-xl">LegalBot</span>
            </div>
            <p className="text-secondary-foreground/80 mb-4 max-w-md">
              Your trusted AI-powered legal assistant. Get instant legal guidance and support for various legal matters.
            </p>
            <div className="flex items-center space-x-1 text-sm">
              <span>Powered by</span>
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <span className="font-semibold">Ahsan TECH</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories" className="hover:text-primary transition-colors">
                  Legal Categories
                </Link>
              </li>
              <li>
                <Link to="/chat" className="hover:text-primary transition-colors">
                  Start Chat
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <button className="hover:text-primary transition-colors flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Terms of Service</span>
                </button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">
                  Legal Disclaimer
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8">
          <div className="bg-legal-warning/10 border border-legal-warning/30 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-legal-warning mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-semibold text-legal-warning mb-1">Important Legal Disclaimer</p>
                <p className="text-secondary-foreground/80">
                  This AI assistant provides general legal information only and does not constitute legal advice. 
                  For specific legal matters, please consult with a qualified attorney. We are not responsible 
                  for any actions taken based on the information provided.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center text-sm text-secondary-foreground/60">
            <p>&copy; 2024 LegalBot by Ahsan TECH. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};