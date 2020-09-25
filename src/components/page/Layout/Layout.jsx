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
      className="Layout"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={layoutVariants}
    >
      <div className="Container">
        <motion.div
          key="content"
          className="Content"
          variants={contentVariants}
        >
          {props.children}
        </motion.div>
      </div>
      <Footer key="footer" />
    </motion.div>
  );
}

export default Layout;
