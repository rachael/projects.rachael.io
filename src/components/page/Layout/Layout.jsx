import { motion } from 'framer-motion';
import React from 'react';

import './Layout.scss';

import { Footer } from '..';

function Layout({
  title,
   ...props
}) {
  // content appear animation
  const layoutVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.4,
      }
    },
    hidden: {
      opacity: 0,
    }
  };
  const contentVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.4,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      key="layout"
      className="layout"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={layoutVariants}
    >
      <motion.div
        key="content"
        className="content"
        variants={contentVariants}
      >
        {props.children}
      </motion.div>
      <Footer key="footer" />
    </motion.div>
  );
}

export default Layout;
