import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
interface HeroProps {
  onExplore: () => void;
}
const Hero = ({
  onExplore
}: HeroProps) => {
  return <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between">
      {/* Text Content */}
      <motion.div className="md:w-1/2 mt-10 md:mt-0" initial={{
      opacity: 0,
      x: -50
    }} animate={{
      opacity: 1,
      x: 0
    }} transition={{
      duration: 0.8
    }}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="block">Hi, I'm</span>
          <span className="block text-purple-500">Shaik Nasreen</span>
        </h1>
        <h2 className="text-xl md:text-2xl mb-6 text-muted-foreground">
          Web Designer | Aspiring Software Engineer
        </h2>
        <p className="mb-8 max-w-lg text-green-200">
          A passionate Computer Science & Engineering student with expertise in web development,
          creating user-friendly and visually appealing digital experiences.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button onClick={onExplore} className="bg-purple-600 hover:bg-purple-700 transition-colors">
            Explore My Work <ArrowDown className="ml-2" size={18} />
          </Button>
          <Button variant="outline" onClick={() => document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth"
        })}>
            Get In Touch
          </Button>
        </div>
      </motion.div>
      
      {/* Profile Image */}
      <motion.div className="md:w-1/2 flex justify-center" initial={{
      opacity: 0,
      scale: 0.8
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      duration: 0.8
    }}>
        <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl">
          <img src="/lovable-uploads/dcd46ca0-a992-460c-b8bd-3d9c90fa0ce4.png" alt="Shaik Nasreen" className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </div>;
};
export default Hero;