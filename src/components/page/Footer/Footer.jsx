import React from 'react';
import { motion } from 'framer-motion';

import './Footer.scss';

function Footer({ ...props }) {
  // content appear animation
  const footerVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.4,
      }
    }
  };
  return (
    <motion.footer
      className="footer"
      variants={footerVariants}
    >
      {props.children}
    </motion.footer>
  );
}

export default Footer;
