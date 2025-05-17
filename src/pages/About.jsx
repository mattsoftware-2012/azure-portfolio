"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Download, ArrowRight } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./About.css"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const bioRef = useRef(null)
  const timelineRef = useRef(null)
  const skillsRef = useRef(null)

  useEffect(() => {
    // Bio animation
    gsap.fromTo(
      bioRef.current.querySelectorAll(".animate-in"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      },
    )

    // Timeline animation
    gsap.fromTo(
      timelineRef.current.querySelectorAll(".timeline-item"),
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
        },
        ease: "power3.out",
      },
    )

    // Skills animation
    gsap.fromTo(
      skillsRef.current.querySelectorAll(".skill-category"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: skillsRef.current,
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
    <motion.div className="about-page" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">About Me</h1>
          <p className="page-description">Learn more about my background, experience, and skills.</p>
        </div>
      </div>

      <section className="bio-section" ref={bioRef}>
        <div className="container">
          <div className="bio-content">
            <div className="bio-image animate-in">
              <img src="/placeholder.svg?height=400&width=400" alt="Profile" />
              <div className="image-overlay"></div>
            </div>
            <div className="bio-text">
              <h2 className="section-title animate-in">My Journey</h2>
              <p className="animate-in">
                I'm a passionate full-stack developer with over 5 years of experience building web applications. My
                journey in tech started when I was in college, where I discovered my love for creating digital
                experiences.
              </p>
              <p className="animate-in">
                I specialize in building modern, responsive, and user-friendly applications using the latest
                technologies. My approach to development is focused on creating clean, maintainable code that delivers
                exceptional user experiences.
              </p>
              <p className="animate-in">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through blog posts and community events.
              </p>
              <div className="bio-cta animate-in">
                <motion.a
                  href="/resume.pdf"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume <Download size={16} className="icon" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section" ref={timelineRef}>
        <div className="container">
          <h2 className="section-title">Experience & Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2021 - Present</div>
                <h3>Senior Full Stack Developer</h3>
                <p className="timeline-company">Tech Innovations Inc.</p>
                <p>
                  Leading development of enterprise web applications, mentoring junior developers, and implementing best
                  practices for scalable architecture.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2018 - 2021</div>
                <h3>Frontend Developer</h3>
                <p className="timeline-company">Digital Solutions Ltd.</p>
                <p>
                  Developed responsive user interfaces, implemented state management solutions, and collaborated with UX
                  designers to create intuitive user experiences.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2016 - 2018</div>
                <h3>Web Developer</h3>
                <p className="timeline-company">Creative Agency</p>
                <p>
                  Built client websites, implemented CMS solutions, and developed custom plugins to extend functionality
                  for specific client needs.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2012 - 2016</div>
                <h3>Bachelor of Computer Science</h3>
                <p className="timeline-company">University of Technology</p>
                <p>
                  Graduated with honors, specializing in web technologies and software engineering. Participated in
                  multiple hackathons and coding competitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section" ref={skillsRef}>
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skills-list">
                {["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Redux", "Next.js", "Tailwind CSS"].map(
                  (skill, index) => (
                    <motion.div
                      className="skill-tag"
                      key={index}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(121, 40, 202, 0.2)" }}
                    >
                      {skill}
                    </motion.div>
                  ),
                )}
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skills-list">
                {["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL", "REST API", "Firebase", "AWS"].map(
                  (skill, index) => (
                    <motion.div
                      className="skill-tag"
                      key={index}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(121, 40, 202, 0.2)" }}
                    >
                      {skill}
                    </motion.div>
                  ),
                )}
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <div className="skills-list">
                {["Git", "Docker", "CI/CD", "Jest", "Webpack", "Figma", "Agile", "Responsive Design"].map(
                  (skill, index) => (
                    <motion.div
                      className="skill-tag"
                      key={index}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(121, 40, 202, 0.2)" }}
                    >
                      {skill}
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Interested in working together?</h2>
            <p>
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get In Touch <ArrowRight size={16} className="icon" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default About
