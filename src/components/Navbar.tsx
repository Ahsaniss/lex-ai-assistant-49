import { Link, useLocation } from "react-router-dom";
import { Scale, Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/categories", label: "Categories" },
    { path: "/chat", label: "Chat" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-[#080278]/95 via-[#1a1a9e]/95 to-[#2d2daa]/95 dark:from-[#080278]/95 dark:via-[#0f0f8a]/95 dark:to-[#1b1b96]/95 border-b border-amber-400/30 dark:border-amber-500/40 shadow-xl shadow-[#080278]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative p-3 bg-white/15 backdrop-blur-sm rounded-xl border border-amber-400/30 shadow-xl shadow-amber-500/20">
                <Scale className="h-8 w-8 text-white group-hover:scale-110 transition-transform drop-shadow-md" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-2xl text-white drop-shadow-lg">
                🇵🇰 Advocaid
              </span>
              <span className="text-sm text-amber-200 -mt-1 font-medium">Pakistani Legal AI Assistant</span>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 relative overflow-hidden nav-link-hover",
                  isActive(link.path)
                    ? "text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-xl shadow-amber-500/30 border border-amber-300/50 active-link-pulse"
                    : "text-white/95 hover:text-white hover:bg-white/15 backdrop-blur-sm border border-amber-400/20 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-500/20 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-orange-500/10"
                )}
              >
                {isActive(link.path) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-25 animate-pulse"></div>
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
            
            {/* Enhanced Theme Toggle */}
            <div className="ml-6 relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="h-12 w-12 rounded-full theme-toggle text-white hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-amber-500/30 border border-amber-400/20 hover:border-amber-400/50 bg-white/10 hover:bg-white/20"
              >
                {theme === "dark" ? (
                  <Sun className="h-6 w-6 text-amber-300" />
                ) : (
                  <Moon className="h-6 w-6 text-white" />
                )}
              </Button>
            </div>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-12 w-12 rounded-full bg-white/15 border border-amber-400/30 text-white hover:bg-white/25 transition-all duration-300 shadow-lg hover:shadow-amber-500/20"
            >
              {theme === "dark" ? (
                <Sun className="h-6 w-6 text-amber-300" />
              ) : (
                <Moon className="h-6 w-6 text-white" />
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-12 w-12 rounded-full bg-white/15 border border-amber-400/30 text-white hover:bg-white/25 transition-all duration-300 shadow-lg hover:shadow-amber-500/20"
            >
              {isMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-amber-400/30 mobile-menu-enter">
            <div className="flex flex-col space-y-3 px-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 relative overflow-hidden",
                    isActive(link.path)
                      ? "text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-xl shadow-amber-500/30 border border-amber-300/50"
                      : "text-white/95 hover:text-white hover:bg-white/15 border border-amber-400/20 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-500/20 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-orange-500/10"
                  )}
                >
                  {isActive(link.path) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-25 animate-pulse"></div>
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};