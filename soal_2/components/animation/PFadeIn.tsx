import React from "react";
import { motion } from "framer-motion";

type PFadeInProps = React.HtmlHTMLAttributes<HTMLHtmlElement> & {
  variant?: "default" | "outline";
};

const PFadeIn: React.FC<PFadeInProps> = ({children}) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="text-gray-600 max-w-4xl mx-auto mb-6 text-sm sm:text-base"
    >
      {children}
    </motion.p>
  );
};

export default PFadeIn;
