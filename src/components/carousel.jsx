import React, { useCallback, useMemo, useState } from "react";
import { Box, Button, styled } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const SummaryMotionDivVariants = {
  enter: {
    opacity: 1,
    transition: { duration: 0.3 },
    x: 0,
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
    x: "-100%",
  },
};

const motionDivVariants = {
  enter: {
    opacity: 1,
    transition: { duration: 0.3 },
    y: 0,
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
    y: "-100%",
  },
};

const MotionDivStyles = {
  height: "100%",
  left: 0,
  overflow: "hidden",
  position: "absolute",
  top: 0,
  width: "100%",
};

export const Carousel = ({ children, setCurrentStep }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = useCallback(
    (index) => {
      setCurrentIndex(index);
      setCurrentStep(index);
    },
    [setCurrentStep]
  );

  const { dotsMarkup } = useMemo(() => {
    const dotsMarkup = children.map((_, index) => (
      <StyledDot
        key={index}
        className={`dot ${currentIndex === index ? "active" : ""}`}
        onClick={() => handleDotClick(index)}
      />
    ));
    return { dotsMarkup };
  }, [children, currentIndex, handleDotClick]);

  return (
    <>
      <StyledBox>{dotsMarkup}</StyledBox>
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          animate="enter"
          exit="exit"
          initial="exit"
          variants={
            currentIndex === children.length - 1
              ? SummaryMotionDivVariants
              : motionDivVariants
          }
          style={MotionDivStyles}
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

const StyledDot = styled(Button)({
  backgroundColor: '#ccc',
  borderRadius: '50%',
  cursor: 'pointer',
  margin: '4px 0',
  minWidth: '16px',
  '&.active': {
    backgroundColor: '#000',
  },
});

const StyledBox = styled(Box)({
  zIndex: '100',
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  left: '2%',
  position: 'fixed',
  top: '50%',
  transform: 'translate(-50%, -50%)',
});
