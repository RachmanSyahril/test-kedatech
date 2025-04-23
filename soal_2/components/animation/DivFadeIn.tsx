import { motion } from "framer-motion";
import React from "react";

type DivFadeInProps = React.HtmlHTMLAttributes<HTMLHtmlElement> & {
  variant?: "default" | "outline";
};

const DivFadeIn: React.FC<DivFadeInProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="mt-[-20vh] mb-[-15vh]"
    >
      {children}
    </motion.div>
  );
};

export default DivFadeIn;
