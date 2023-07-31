import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface animationProps {
    type?: String;
    className: string;
    children?: React.ReactNode;
}

const boxVariantFromBottom = {
    visible: {opacity: 1,
        y: 0, transition: { duration: 1.2 } },
    hidden: { opacity: 0,
        y: 50 },
}
const boxVariantFromTop = {
    visible: {opacity: 1,
        y: 0, transition: { duration: 1.2 } },
    hidden: { opacity: 0,
        y: -50 },
}
const boxVariantFromLeft = {
    visible: {opacity: 1,
        x: 0, transition: { duration: 1.2 } },
    hidden: { opacity: 0,
        x: -50 },
}
const boxVariantFromRight = {
    visible: {opacity: 1,
        x: 0, transition: { duration: 1.2 } },
    hidden: { opacity: 0,
        x: 50 },
}

const Animation: React.FC<animationProps> = ({type, children, className}) => {
    const control = useAnimation()
    const [ref, inView] = useInView()
    let box;

    switch (type) {
      case "fromBottom":
        box = boxVariantFromBottom;
        break;
      case "fromLeft":
        box = boxVariantFromLeft;
        break;
      case "fromTop":
        box = boxVariantFromTop;
        break;
      case "fromRight":
        box = boxVariantFromRight;
        break;
      default:
        box = boxVariantFromBottom;
        break;
    }

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } 
    }, [control, inView]);
    
    return (
        <motion.div className={className} ref={ref} variants={box} initial="hidden" animate="control">
            {children}
        </motion.div>
    );
};

export default Animation;


