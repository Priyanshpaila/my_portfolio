"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function About() {
  return (
    <div className="space-y-10">
      <motion.div
        className="space-y-2 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Badge variant="outline" className="px-3 py-1 text-sm rounded-full">About Me</Badge>
        <h2 className="text-3xl md:text-4xl font-bold">Get to know me</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="relative aspect-square rounded-xl overflow-hidden"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image src="https://priyanshpaila.github.io/my_portfolio/about.jpeg" alt="About Me" width={600} height={600} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
          {/* <div className="absolute bottom-4 left-4 right-4 p-4 bg-background/20 backdrop-blur-md rounded-lg border border-border/50">
            <p className="font-medium">5+ years of experience in web development</p>
          </div> */}
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Who am I?</h3>
            <p className="text-muted-foreground">
              I&apos;m a passionate Full Stack Developer with expertise in building modern web applications. With a strong
              foundation in both frontend and backend technologies, I create seamless, user-friendly experiences that
              solve real-world problems.
            </p>
            <p className="text-muted-foreground">
              My journey in tech began 5 years ago, and since then, I&apos;ve worked with various technologies and frameworks
              to deliver high-quality solutions. I&apos;m constantly learning and adapting to new technologies to stay at the
              forefront of web development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div><h4 className="font-semibold">Name:</h4><p className="text-muted-foreground">Priyansh Paila</p></div>
            <div><h4 className="font-semibold">Email:</h4><p className="text-muted-foreground">priyanshpaila@gmail.com</p></div>
            <div><h4 className="font-semibold">Location:</h4><p className="text-muted-foreground">Chhattisgarh, India</p></div>
            <div><h4 className="font-semibold">Availability:</h4><p className="text-muted-foreground">Open to opportunities</p></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
