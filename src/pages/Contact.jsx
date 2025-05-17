"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin, Phone, Linkedin, Github, Twitter } from "lucide-react"
import { gsap } from "gsap"
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState(null)

  const formRef = useRef(null)
  const infoRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    // Form animation
    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
      },
    )

    // Info animation
    gsap.fromTo(
      infoRef.current.querySelectorAll(".contact-info-item"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      },
    )

    // Map animation
    gsap.fromTo(
      mapRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
      },
    )
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simulate form submission
    setFormStatus("loading")

    setTimeout(() => {
      setFormStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus(null)
      }, 3000)
    }, 1500)
  }

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

  const inputVariants = {
    focus: {
      scale: 1.01,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <motion.div className="contact-page" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-description">Have a project in mind or want to collaborate? Feel free to reach out!</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-container">
          <div className="contact-form" ref={formRef}>
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  variants={inputVariants}
                  whileFocus="focus"
                ></motion.textarea>
              </div>
              <motion.button
                type="submit"
                className="btn btn-primary submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={formStatus === "loading"}
              >
                {formStatus === "loading" ? (
                  <span className="loading-spinner"></span>
                ) : (
                  <>
                    Send Message <Send size={16} className="icon" />
                  </>
                )}
              </motion.button>

              {formStatus === "success" && (
                <motion.div
                  className="form-success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </div>

          <div className="contact-info" ref={infoRef}>
            <h2>Contact Information</h2>
            <div className="contact-info-item">
              <Mail size={20} className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p>contact@example.com</p>
              </div>
            </div>
            <div className="contact-info-item">
              <MapPin size={20} className="contact-icon" />
              <div>
                <h3>Location</h3>
                <p>San Francisco, CA</p>
              </div>
            </div>
            <div className="contact-info-item">
              <Phone size={20} className="contact-icon" />
              <div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="social-links">
              <h3>Connect With Me</h3>
              <div className="social-icons">
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, backgroundColor: "#0077B5" }}
                  transition={{ duration: 0.2 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, backgroundColor: "#333" }}
                  transition={{ duration: 0.2 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, backgroundColor: "#1DA1F2" }}
                  transition={{ duration: 0.2 }}
                >
                  <Twitter size={20} />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        <div className="map-container" ref={mapRef}>
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948551!3d37.75781499657369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1623252234927!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
