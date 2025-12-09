import { GraduationCap, Heart, BookOpen, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="relative bg-[#1a365d] dark:bg-[#0f1f38] text-white overflow-hidden border-t border-[#d69e2e]/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-[#d69e2e] to-[#ed8936] rounded-lg shadow-lg border-2 border-white/20">
                <GraduationCap className="h-8 w-8 text-white drop-shadow-sm" />
              </div>
              <div>
                <span className="font-heading font-bold text-2xl text-white">GCUF Career AI</span>
                <p className="text-[#d69e2e] text-sm">Government College University Faisalabad</p>
              </div>
            </div>
            <p className="text-slate-200 mb-6 max-w-md leading-relaxed">
              Your trusted AI-powered career counselor for GCUF students. Get instant career guidance, 
              explore programs, and plan your professional future with personalized recommendations.
            </p>
            <div className="flex items-center space-x-2 text-sm bg-[#2a4365]/50 border border-[#d69e2e]/30 backdrop-blur-sm rounded-lg p-3">
              <span className="text-slate-200">Developed with</span>
              <Heart className="h-4 w-4 text-red-400 mx-1 animate-pulse" />
              <span className="font-semibold text-white">for GCUF Students</span>
            </div>
          </div>

          {/* Quick Access */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Access</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/categories" className="text-slate-300 hover:text-white hover:text-[#d69e2e] transition-colors flex items-center space-x-2 hover:translate-x-1 duration-200">
                  <span>🎓 Career Paths</span>
                </Link>
              </li>
              <li>
                <Link to="/chat" className="text-slate-300 hover:text-white hover:text-[#d69e2e] transition-colors flex items-center space-x-2 hover:translate-x-1 duration-200">
                  <span>💬 Start Chat</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white hover:text-[#d69e2e] transition-colors flex items-center space-x-2 hover:translate-x-1 duration-200">
                  <span>ℹ️ About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white hover:text-[#d69e2e] transition-colors flex items-center space-x-2 hover:translate-x-1 duration-200">
                  <span>📞 Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* GCUF Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">GCUF Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://gcuf.edu.pk" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white hover:text-[#d69e2e] transition-colors flex items-center space-x-2 hover:translate-x-1 duration-200">
                  <BookOpen className="h-4 w-4" />
                  <span>GCUF Official Website</span>
                </a>
              </li>
              <li>
                <a href="https://gcuf.edu.pk/admissions" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white hover:text-[#d69e2e] transition-colors flex items-center space-x-2 hover:translate-x-1 duration-200">
                  <GraduationCap className="h-4 w-4" />
                  <span>Admissions</span>
                </a>
              </li>
              <li>
                <a href="https://gcuf.edu.pk/faculties" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white hover:text-[#d69e2e] transition-colors flex items-center space-x-2 hover:translate-x-1 duration-200">
                  <Briefcase className="h-4 w-4" />
                  <span>Academic Faculties</span>
                </a>
              </li>
              <li>
                <button className="text-slate-300 hover:text-white hover:text-[#d69e2e] transition-colors hover:translate-x-1 duration-200">
                  🏛️ Campus Life
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* GCUF Career Disclaimer */}
        <div className="border-t border-[#d69e2e]/30 mt-12 pt-8">
          <div className="bg-[#2a4365]/80 dark:bg-[#1a2e4a]/80 backdrop-blur-sm border border-[#d69e2e]/30 rounded-xl p-6 mb-8">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-[#d69e2e]/20 border border-[#d69e2e]/30 rounded-lg">
                <GraduationCap className="h-6 w-6 text-[#d69e2e] flex-shrink-0" />
              </div>
              <div>
                <p className="font-semibold text-[#d69e2e] mb-2 text-lg">Career Guidance Disclaimer</p>
                <p className="text-slate-200 leading-relaxed">
                  This AI assistant provides general career guidance and information about GCUF programs. 
                  It does not replace professional career counseling services. For official admission requirements, 
                  fee structures, and program details, please visit the GCUF official website or contact the admissions office.
                </p>
                <p className="text-slate-300 text-sm mt-3">
                  🎓 Always verify information with official GCUF sources for academic decisions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-[#2a4365]/50 border border-[#d69e2e]/30 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-slate-200">&copy; 2025 GCUF Career AI</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-300">🏛️ Government College University Faisalabad</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};