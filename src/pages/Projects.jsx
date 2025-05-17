"use client"

import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, Filter } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./Projects.css"

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const [filter, setFilter] = React.useState("all")
  const projectsRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=300&width=500",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for social media analytics with real-time data visualization.",
      image: "/placeholder.svg?height=300&width=500",
      category: "frontend",
      technologies: ["React", "Redux", "D3.js", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      image: "/placeholder.svg?height=300&width=500",
      category: "fullstack",
      technologies: ["React", "Firebase", "Material UI", "Redux"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "A weather application that provides detailed forecasts and historical weather data.",
      image: "/placeholder.svg?height=300&width=500",
      category: "frontend",
      technologies: ["React", "OpenWeather API", "Chart.js", "Styled Components"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 5,
      title: "Content Management System",
      description: "A custom CMS built for content creators with advanced editing capabilities.",
      image: "/placeholder.svg?height=300&width=500",
      category: "backend",
      technologies: ["Node.js", "Express", "MongoDB", "AWS S3"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 6,
      title: "Real Estate Listing Platform",
      description: "A platform for real estate listings with advanced search and filtering options.",
      image: "/placeholder.svg?height=300&width=500",
      category: "fullstack",
      technologies: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
      github: "https://github.com",
      live: "https://example.com",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  useEffect(() => {
    // Projects animation
    gsap.fromTo(
      projectsRef.current.querySelectorAll(".project-card"),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      },
    )
  }, [filter])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const filterVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  return (
    <motion.div className="projects-page" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">My Projects</h1>
          <p className="page-description">
            A collection of my work, showcasing my skills and experience in web development.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="filter-container">
          <div className="filter-icon">
            <Filter size={20} />
            <span>Filter:</span>
          </div>
          <div className="filter-options">
            {["all", "frontend", "backend", "fullstack"].map((category) => (
              <motion.button
                key={category}
                className={`filter-btn ${filter === category ? "active" : ""}`}
                onClick={() => setFilter(category)}
                variants={filterVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="projects-grid" ref={projectsRef}>
          {filteredProjects.map((project) => (
            <motion.div
              className="project-card"
              key={project.id}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-links">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
