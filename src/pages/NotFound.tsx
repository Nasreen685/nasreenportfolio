
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <motion.div 
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-bold text-purple-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button 
          onClick={() => navigate("/")}
          className="bg-purple-600 hover:bg-purple-700"
        >
          Back to Home
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
