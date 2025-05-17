
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Responsive Web Design",
      description: "Custom, mobile-first websites that look great on all devices. I focus on clean, modern designs with optimal user experience.",
      icon: "🎨"
    },
    {
      id: 2,
      title: "UI/UX Development",
      description: "User-centric interface development with a focus on intuitive navigation and aesthetically pleasing design elements.",
      icon: "✨"
    },
    {
      id: 3,
      title: "Frontend Development",
      description: "Building interactive and dynamic user interfaces using modern HTML, CSS, and JavaScript frameworks.",
      icon: "💻"
    },
    {
      id: 4,
      title: "Web Application Development",
      description: "Full-stack web application development with database integration and secure user authentication systems.",
      icon: "🚀"
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
        <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I offer professional web design services tailored to meet your unique needs and help establish your online presence.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {services.map(service => (
          <motion.div key={service.id} variants={item}>
            <Card 
              className="border border-muted hover:border-purple-500/30 transition-colors duration-300 h-full backdrop-blur-sm bg-zinc-900/40"
            >
              <CardHeader className="pb-2">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
              <CardFooter className="pt-2">
                <Button 
                  variant="ghost" 
                  className="p-0 hover:text-purple-500 hover:bg-transparent"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get in Touch
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
