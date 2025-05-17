
import { useState } from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactDetails = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "shaiknasreen.685@gmail.com",
      link: "mailto:shaiknasreen.685@gmail.com",
      ariaLabel: "Email Shaik Nasreen",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+91 7396034855",
      link: "tel:+917396034855",
      ariaLabel: "Call Shaik Nasreen",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/shaik-nasreen-214a242ab/",
      ariaLabel: "Visit Shaik Nasreen's LinkedIn profile",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="container mx-auto px-4 relative z-10">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to contact me using the form below or directly through my contact details.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          className="lg:col-span-2"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Card className="backdrop-blur-sm bg-zinc-900/40 border-muted/30">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      aria-required="true"
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      required
                      aria-required="true"
                      className="bg-background/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    required
                    aria-required="true"
                    className="bg-background/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    className="flex h-auto w-full rounded-md border border-input bg-background/50 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    required
                    aria-required="true"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-purple-600 hover:bg-purple-700"
                  disabled={isSubmitting}
                  aria-label="Submit contact form"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          {contactDetails.map((contact, index) => (
            <motion.a 
              key={index}
              href={contact.link}
              target={contact.title === "LinkedIn" ? "_blank" : undefined}
              rel={contact.title === "LinkedIn" ? "noopener noreferrer" : undefined}
              className="flex items-start p-4 rounded-lg border border-muted hover:border-purple-500/30 transition-colors duration-300 group backdrop-blur-sm bg-zinc-900/40"
              aria-label={contact.ariaLabel}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            >
              <div className="mr-4 text-purple-500">{contact.icon}</div>
              <div>
                <h4 className="font-medium">{contact.title}</h4>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {contact.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
