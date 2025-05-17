
import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">
              Shaik<span className="text-purple-500">Nasreen</span>
            </h3>
            <p className="text-muted-foreground mt-2">Web Designer | Aspiring Software Engineer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="mailto:shaiknasreen.685@gmail.com"
              aria-label="Email Shaik Nasreen"
              className="p-2 rounded-full bg-muted hover:bg-purple-500/10 transition-colors"
            >
              <Mail className="h-5 w-5 text-purple-500" />
            </a>
            <a 
              href="tel:+917396034855"
              aria-label="Call Shaik Nasreen"
              className="p-2 rounded-full bg-muted hover:bg-purple-500/10 transition-colors"
            >
              <Phone className="h-5 w-5 text-purple-500" />
            </a>
            <a 
              href="https://www.linkedin.com/in/shaik-nasreen-214a242ab/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Shaik Nasreen's LinkedIn profile"
              className="p-2 rounded-full bg-muted hover:bg-purple-500/10 transition-colors"
            >
              <Linkedin className="h-5 w-5 text-purple-500" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-muted mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Shaik Nasreen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
