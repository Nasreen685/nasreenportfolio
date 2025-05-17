
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Bank Management System",
      description: "A comprehensive web-based solution for banking operations with user authentication, account management, and transaction tracking features.",
      image: "/placeholder.svg",
      status: "Completed",
      link: "#"
    },
    {
      id: 2,
      title: "MY POLICY MATE",
      description: "An insurance management website that helps users track, compare, and manage different insurance policies all in one place.",
      image: "/placeholder.svg",
      status: "In Progress",
      link: "#"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="container mx-auto px-4">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
        <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A showcase of my projects and accomplishments in web development. Each project represents my dedication to creating functional and visually appealing websites.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map(project => (
          <motion.div key={project.id} variants={item}>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-muted h-full">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === "Completed" ? "bg-green-500/20 text-green-500" : "bg-amber-500/20 text-amber-500"
                  }`}>
                    {project.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full group"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <span>View Project</span>
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
