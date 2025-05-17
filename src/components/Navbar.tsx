
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface NavbarProps {
  scrolled: boolean;
  onNavigate: (id: string) => void;
}

const Navbar = ({ scrolled, onNavigate }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-2 bg-background/80 backdrop-blur-md shadow-md" 
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("home");
          }}
          className="text-xl font-bold text-primary hover:text-purple-400 transition-colors"
        >
          Nasreen<span className="text-purple-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(item.id);
              }}
              className="text-foreground hover:text-purple-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg py-4"
        >
          <div className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.id);
                }}
                className="text-foreground hover:text-purple-400 transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
