import { ModeToggle } from "../components/mode-toggle"
import { MobileMenu } from "../components/mobile-menu"
import Hero from "../components/hero"
import About from "../components/about"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Resume from "../components/resume"
import Certifications from "../components/certifications"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <span className="text-primary">My</span>Portfolio
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#resume" className="text-sm font-medium hover:text-primary transition-colors">
              Resume
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <MobileMenu />
          </div>
        </div>
      </header>
      <main className="container pt-16">
        <section id="home" className="py-20">
          <Hero />
        </section>
        <section id="about" className="py-20">
          <About />
        </section>
        <section id="projects" className="py-20">
          <Projects />
        </section>
        <section id="skills" className="py-20">
          <Skills />
        </section>
        <section id="resume" className="py-20">
          <Resume />
        </section>
        <section id="certifications" className="py-20 hidden">
          <Certifications />
        </section>
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
