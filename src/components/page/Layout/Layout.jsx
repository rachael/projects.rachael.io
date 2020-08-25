import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadCompleteBG } from 'redux/actions';

import './Layout.scss';

import { Footer } from '..';

function Layout({
  title,
   ...props
}) {
  // image load
  const dispatch = useDispatch();
  const bgRef = useRef();
  const isLoadCompleteBG = useSelector(state => state.loadCompleteBG);
  const setLoadCompleteCB = useCallback(() => {
    if(!isLoadCompleteBG) dispatch(loadCompleteBG());
  }, [isLoadCompleteBG, dispatch]);
  useEffect(() => {
    if(!isLoadCompleteBG && bgRef.current.complete) dispatch(loadCompleteBG());
  });
  const layoutClasses = classNames(
    'layout',
    { ['bg-loading']: !isLoadCompleteBG }
  );

  // content appear animation
  const bgVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
      }
    },
    hidden: {
      opacity: 0,
    }
  };
  const layoutVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
      }
    },
    hidden: {
      opacity: 0,
    }
  };
  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.4,
        staggerChildren: 2,
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
        delay: 0.4,
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  return (
    <motion.div
      key="layout"
      className={layoutClasses}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={layoutVariants}
    >
      <img
        className="background-loader"
        src="/images/bg_postits_blur.png"
        alt=""
        ref={bgRef}
        onLoad={setLoadCompleteCB}
      />
      <AnimatePresence>
        {isLoadCompleteBG && <motion.div
          key="bg"
          className="background-image"
          variants={bgVariants}
        />}
      </AnimatePresence>
      <motion.div
        key="container"
        className="container"
        variants={containerVariants}
      >
        <motion.div
          key="content"
          className="content"
          variants={contentVariants}
        >
          {props.children}
        </motion.div>
        <Footer key="footer">
        </Footer>
      </motion.div>
    </motion.div>
  );
}

export default Layout;
