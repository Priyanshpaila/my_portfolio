"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Code,
  FileText,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Instagram,
} from "lucide-react"

const menuItems = [
  { href: "#home", label: "Home", icon: Home, description: "Welcome & Introduction" },
  { href: "#about", label: "About", icon: User, description: "Get to know me" },
  { href: "#projects", label: "Projects", icon: Briefcase, description: "My recent work" },
  { href: "#skills", label: "Skills", icon: Code, description: "Tech stack & expertise" },
  { href: "#resume", label: "Resume", icon: FileText, description: "Experience & education" },
  { href: "#contact", label: "Contact", icon: Mail, description: "Let's connect" },
]

const socialLinks = [
  { href: "https://github.com/Priyanshpaila", label: "GitHub", icon: Github, color: "hover:text-gray-900 dark:hover:text-gray-100" },
  { href: "https://www.linkedin.com/in/priyansh-paila-aa70bb221", label: "LinkedIn", icon: Linkedin, color: "hover:text-blue-600" },
  { href: "https://instagram.com/__priyansh_paila__", label: "Instagram", icon: Instagram, color: "hover:text-blue-400" },
]

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [navbarHeight, setNavbarHeight] = useState(64) // Default height of 64px (h-16)

  // Get navbar height on mount and resize
  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector("header")
      if (navbar) {
        const height = navbar.getBoundingClientRect().height
        setNavbarHeight(height)
      }
    }

    // Initial measurement
    updateNavbarHeight()

    // Update on resize
    window.addEventListener("resize", updateNavbarHeight)
    return () => window.removeEventListener("resize", updateNavbarHeight)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleMenuItemClick = (href: string) => {
    const sectionName = href.replace("#", "")
    setActiveSection(sectionName)
    closeMenu()

    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => item.href.replace("#", ""))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  }

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  }

  const itemVariants = {
    closed: {
      x: 50,
      opacity: 0,
    },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    }),
  }

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="md:hidden rounded-full relative overflow-hidden group"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="relative w-5 h-5">
          <motion.div
            animate={isOpen ? "open" : "closed"}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              variants={{
                closed: { rotate: 0, scale: 1 },
                open: { rotate: 180, scale: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              <Menu className="h-5 w-5" />
            </motion.div>
            <motion.div
              variants={{
                closed: { rotate: -180, scale: 0 },
                open: { rotate: 0, scale: 1 },
              }}
              transition={{ duration: 0.3 }}
              className="absolute"
            >
              <X className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </div>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Enhanced Backdrop - positioned below navbar */}
            <motion.div
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
              style={{ top: `${navbarHeight}px` }}
              onClick={closeMenu}
            />

            {/* Enhanced Menu Panel - positioned below navbar */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed right-0 bottom-0 w-80 bg-background/95 backdrop-blur-xl border-l border-border/50 shadow-2xl z-50 md:hidden overflow-hidden"
              style={{
                top: `${navbarHeight}px`,
                height: `calc(100vh - ${navbarHeight}px)`,
              }}
            >
              {/* Header */}
              <div className="relative p-6 border-b border-border/50">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center justify-between"
                >
                  <div>
                    <h2 className="text-xl font-bold">
                      <span className="text-primary">My</span>Portfolio
                    </h2>
                    <p className="text-sm text-muted-foreground">Navigation Menu</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Menu
                  </Badge>
                </motion.div>

                {/* Decorative gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto p-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  {menuItems.map((item, index) => {
                    const Icon = item.icon
                    const isActive = activeSection === item.href.replace("#", "")

                    return (
                      <motion.button
                        key={item.href}
                        custom={index}
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                        onClick={() => handleMenuItemClick(item.href)}
                        className={`w-full group relative overflow-hidden rounded-xl p-4 text-left transition-all duration-300 ${
                          isActive
                            ? "bg-primary/10 border border-primary/20 shadow-lg"
                            : "hover:bg-accent/50 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`p-2 rounded-lg transition-colors ${
                              isActive
                                ? "bg-primary/20 text-primary"
                                : "bg-accent/50 text-muted-foreground group-hover:text-foreground"
                            }`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div
                              className={`font-medium transition-colors ${
                                isActive ? "text-primary" : "text-foreground"
                              }`}
                            >
                              {item.label}
                            </div>
                            <div className="text-xs text-muted-foreground">{item.description}</div>
                          </div>
                          {isActive && (
                            <motion.div
                              layoutId="activeIndicator"
                              className="w-2 h-2 bg-primary rounded-full"
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                        </div>

                        {/* Hover effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={false}
                        />
                      </motion.button>
                    )
                  })}
                </motion.div>

                {/* Social Links Section */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 pt-6 border-t border-border/50"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-muted-foreground">Connect With Me</h3>
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon
                      return (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                          className={`flex flex-col items-center p-3 rounded-xl bg-accent/30 hover:bg-accent/60 transition-all duration-300 group ${social.color}`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Icon className="h-5 w-5 mb-1 transition-transform group-hover:scale-110" />
                          <span className="text-xs font-medium">{social.label}</span>
                        </motion.a>
                      )
                    })}
                  </div>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-6 space-y-3"
                >
                  <Button className="w-full group" onClick={() => handleMenuItemClick("#contact")}>
                    <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    Get In Touch
                  </Button>
                  <Button variant="outline" className="w-full group" onClick={() => handleMenuItemClick("#resume")}>
                    <FileText className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    View Resume
                  </Button>
                </motion.div>
              </div>

              {/* Footer */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="p-6 border-t border-border/50 bg-accent/20"
              >
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Priyansh Paila All rights reserved.</p>
                  <div className="mt-2 flex justify-center">
                    <Badge variant="outline" className="text-xs">
                      Available for work
                    </Badge>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
