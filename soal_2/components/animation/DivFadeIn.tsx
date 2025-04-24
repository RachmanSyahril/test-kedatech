import { motion } from "framer-motion";
import React from "react";

type DivFadeInProps = React.HtmlHTMLAttributes<HTMLHtmlElement> & {
  variant?: "default" | "outline";
};

const DivFadeIn: React.FC<DivFadeInProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};

export default DivFadeIn;
