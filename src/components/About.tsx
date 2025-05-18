
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    {
      name: "Python",
      level: 90
    },
    {
      name: "Java",
      level: 85
    },
    {
      name: "HTML & CSS",
      level: 95
    },
    {
      name: "Web Development",
      level: 88
    },
    {
      name: "Problem Solving",
      level: 92
    }
  ];

  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 60
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.15 * index
      }
    })
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Biography */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
          <p className="text-muted-foreground mb-4">
            I am Shaik Nasreen, a third-year Computer Science & Engineering student at Bhoj Reddy Engineering College for Women in Hyderabad, maintaining a CGPA of 8.18.
          </p>
          <p className="text-muted-foreground mb-4">
            As a passionate developer, I'm dedicated to creating functional and visually appealing websites. I consider myself a continuous learner who is always eager to expand my knowledge and skills in the ever-evolving field of technology.
          </p>
          <p className="text-muted-foreground">
            Beyond technical skills, I pride myself on my critical thinking, teamwork, communication, and leadership abilities. As a fresher in the industry, I'm excited to bring my creativity and problem-solving approach to new projects.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
          <div className="space-y-6 bg-zinc-900/40 p-6 rounded-lg backdrop-blur-sm">
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="space-y-2"
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-purple-500">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Education & Soft Skills */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Education */}
        <motion.div 
          custom={0}
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Card className="backdrop-blur-sm bg-zinc-900/40 border-muted/30">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              <div className="border-l-2 border-purple-500 pl-5 space-y-5">
                <div>
                  <h4 className="text-xl font-medium">B.Tech in Computer Science & Engineering</h4>
                  <p className="text-purple-500">2022 - Present</p>
                  <p className="text-muted-foreground">Bhoj Reddy Engineering College for Women, Hyderabad</p>
                  <p className="font-medium">CGPA: 8.18</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Soft Skills */}
        <motion.div 
          custom={1}
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Card className="backdrop-blur-sm bg-zinc-900/40 border-muted/30">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
              <ul className="grid grid-cols-2 gap-3">
                <li className="flex items-center space-x-2">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Critical Thinking</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Problem Solving</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Teamwork</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Communication</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Leadership</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Time Management</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
