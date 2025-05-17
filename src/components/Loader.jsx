"use client"
import { motion } from "framer-motion"
import "./Loader.css"

const Loader = () => {
  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const progressVariants = {
    initial: { width: "0%" },
    animate: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.div className="loader" variants={containerVariants} initial="initial" exit="exit">
      <motion.div className="loader-content" variants={logoVariants} initial="initial" animate="animate">
        <div className="loader-logo">
          <span className="gradient-text">Portfolio</span>
        </div>
        <div className="loader-progress-container">
          <motion.div className="loader-progress" variants={progressVariants} initial="initial" animate="animate" />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Loader
