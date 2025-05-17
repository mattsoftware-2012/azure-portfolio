"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./Home.css"

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)
  const featuredRef = useRef(null)

  useEffect(() => {
    // Hero animation
    gsap.fromTo(
      textRef.current.querySelectorAll("div"),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      },
    )

    // Image animation
    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.out",
      },
    )

    // Featured projects animation
    gsap.fromTo(
      featuredRef.current.querySelectorAll(".featured-project"),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: featuredRef.current,
          start: "top 80%",
        },
        ease: "power3.out",
      },
    )
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div className="home" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <section className="hero" ref={heroRef}>
        <div className="container hero-container">
          <div className="hero-content" ref={textRef}>
         
            <div className="hero-title">
              <h1>
                Crafting Digital <span className="gradient-text">Experiences</span> Through Code
              </h1>
            </div>
            <div className="hero-description">
              <p>
                I build innovative web applications with modern technologies, focusing on performance, accessibility,
                and user experience.
              </p>
            </div>
            <div className="hero-cta">
              <Link to="/projects" className="btn btn-primary">
                View My Work <ArrowRight size={16} className="icon" />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
            </div>
            <div className="hero-social">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#7928ca" }}
                transition={{ duration: 0.2 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#7928ca" }}
                transition={{ duration: 0.2 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#7928ca" }}
                transition={{ duration: 0.2 }}
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </div>
          <div className="hero-image" ref={imageRef}>
            <div className="image-wrapper">
              <img src="icon.avif" alt="Developer" className="image" />
              <div className="image-overlay"></div>
              <div className="image-shape"></div>
            </div>
          </div>
        </div>
        <div className="hero-background">
          <div className="bg-circle circle-1"></div>
          <div className="bg-circle circle-2"></div>
          <div className="bg-grid"></div>
        </div>
      </section>

      <section className="featured-projects" ref={featuredRef}>
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="featured-grid">
            {[1, 2, 3].map((item) => (
              <div className="featured-project" key={item}>
                <div className="project-image">
                  <img src={`/placeholder.svg?height=300&width=500`} alt={`Project ${item}`} />
                  <div className="project-overlay">
                    <Link to="/projects" className="view-project">
                      View Project
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <h3>Project Title {item}</h3>
                  <p>A brief description of the project and the technologies used to build it.</p>
                  <div className="project-tags">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all">
            <Link to="/projects" className="btn btn-outline">
              View All Projects <ArrowRight size={16} className="icon" />
            </Link>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            {[
              { name: "Frontend Development", level: 90 },
              { name: "Backend Development", level: 85 },
              { name: "UI/UX Design", level: 80 },
              { name: "Mobile Development", level: 75 },
              { name: "DevOps", level: 70 },
              { name: "Database Management", level: 85 },
            ].map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Work Together</h2>
            <p>I'm currently available for freelance work and full-time positions.</p>
            <Link to="/contact" className="btn btn-primary">
              Get In Touch <ArrowRight size={16} className="icon" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
