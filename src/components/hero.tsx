"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  motion,
  useAnimation,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

// Particle class for the background effect
class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;

  constructor(canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.color = `hsla(var(--primary), ${Math.random() * 0.3 + 0.1})`;
  }

  update(canvas: HTMLCanvasElement) {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > canvas.width || this.x < 0) {
      this.speedX = -this.speedX;
    }
    if (this.y > canvas.height || this.y < 0) {
      this.speedY = -this.speedY;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Frontend Developer";
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  // Mouse position for interactive elements
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smoother animations
  const springConfig = { damping: 25, stiffness: 300 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Transform values for the floating elements
  const rotateX = useTransform(springY, [-100, 100], [10, -10]);
  const rotateY = useTransform(springX, [-100, 100], [-10, 10]);
  const translateZ = useTransform(springX, [-100, 100], [10, -10]);

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    mouseX.set(x);
    mouseY.set(y);

    mouseRef.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  // Initialize particles
  useEffect(() => {
    setIsMounted(true);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Reinitialize particles on resize
        particlesRef.current = [];
        for (let i = 0; i < 100; i++) {
          particlesRef.current.push(new Particle(canvas));
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particlesRef.current.push(new Particle(canvas));
    }

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        particle.update(canvas);
        particle.draw(ctx);
      });

      // Draw connections between particles
      connectParticles(ctx);

      animationFrameId = requestAnimationFrame(animate);
    };

    // Connect particles with lines if they're close enough
    const connectParticles = (ctx: CanvasRenderingContext2D) => {
      const maxDistance = 100;

      for (let a = 0; a < particlesRef.current.length; a++) {
        for (let b = a; b < particlesRef.current.length; b++) {
          const dx = particlesRef.current[a].x - particlesRef.current[b].x;
          const dy = particlesRef.current[a].y - particlesRef.current[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `hsla(var(--primary), ${
              0.2 * (1 - distance / maxDistance)
            })`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesRef.current[a].x, particlesRef.current[a].y);
            ctx.lineTo(particlesRef.current[b].x, particlesRef.current[b].y);
            ctx.stroke();
          }
        }
      }
    };

    animate();

    // Typing effect
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      clearInterval(typingInterval);
    };
  }, []);

  // Animation controls for staggered animations
  const controls = useAnimation();

  useEffect(() => {
    if (isMounted) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5 },
      }));
    }
  }, [controls, isMounted]);

  return (
    <div
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Particle background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            style={{
              rotateX,
              rotateY,
              translateZ,
              transformPerspective: 1000,
            }}
            className="mb-8"
          >
            <motion.div
              custom={0}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              className="inline-block relative"
            >
              <span className="text-5xl md:text-7xl font-bold tracking-tighter">
                Hi, I&apos;m{" "}
                <span className="text-primary relative">
                  Priyansh Paila
                  <motion.span
                    className="absolute -z-10 inset-0 bg-primary/10 rounded-lg blur-xl"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  />
                </span>
              </span>
            </motion.div>

            <motion.h2
              custom={1}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              className="text-3xl md:text-4xl font-medium mt-4 h-12 flex justify-center items-center"
            >
              <span className="mr-1">{text}</span>
              <span className="animate-pulse">|</span>
            </motion.h2>
          </motion.div>

          <motion.p
            custom={2}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8"
          >
            I build exceptional and accessible digital experiences for the web,
            focusing on innovative solutions with cutting-edge technologies.
          </motion.p>

          <motion.div
            custom={3}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button asChild size="lg" className="group">
              <Link href="#contact">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <div className="flex items-center gap-4">
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
              >
                <Link
                  href="https://github.com/Priyanshpaila"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
              >
                <Link
                  href="https://www.linkedin.com/in/priyansh-paila-aa70bb221"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
              >
                <Link
                  href="https://instagram.com/__priyansh_paila__"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Floating geometric shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Circle */}
            <motion.div
              className="absolute w-64 h-64 rounded-full border border-primary/20 -top-20 -left-20"
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
                scale: {
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                },
              }}
            />

            {/* Square */}
            <motion.div
              className="absolute w-40 h-40 border border-primary/20 -bottom-10 -right-10"
              animate={{
                rotate: -360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: 30,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
                scale: {
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                },
              }}
            />

            {/* Triangle */}
            <motion.div
              className="absolute w-0 h-0 border-l-[50px] border-l-transparent border-b-[86px] border-b-primary/10 border-r-[50px] border-r-transparent top-1/4 right-1/4"
              animate={{
                rotate: 360,
                y: [0, 20, 0],
              }}
              transition={{
                rotate: {
                  duration: 25,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
                y: {
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
