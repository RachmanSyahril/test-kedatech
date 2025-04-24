import { motion } from "framer-motion";
import React from "react";

type DivScaleInProps = React.HtmlHTMLAttributes<HTMLHtmlElement> & {
  variant?: "default" | "outline";
};

const DivScaleIn: React.FC<DivScaleInProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ scale: 0.95, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.95, y: 20 }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};

export default DivScaleIn;
