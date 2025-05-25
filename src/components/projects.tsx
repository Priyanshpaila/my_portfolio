"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink,  } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


const projects = [
  {
    title: "Expense Manager",
    description:
      "A full-featured app made to manhge your expenses easily",
    image:  "https://priyanshpaila.github.io/my_portfolio/ExpM.png"
,
    tags: ["Flutter", "Dart",],
    demoLink: "https://priyanshpaila.github.io/ExpenseManagerApp/",
    
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "https://priyanshpaila.github.io/my_portfolio/Tm.png",
    tags: ["Express.js", "MongoDb", "Flutter", "JavaScript"],
    demoLink: "/coming-soon",
   
  },
  // {
  //   title: "AI Content Generator",
  //   description: "An AI-powered application that generates content based on user prompts using OpenAI's GPT model.",
  //   image: "/placeholder.svg?height=400&width=600",
  //   tags: ["React", "Python", "Flask", "OpenAI API"],
  //   demoLink: "/coming-soon",
  //   githubLink: "#",
  // },
]



export default function Projects() {
  return (
    <div className="space-y-10">
      <motion.div
        className="space-y-2 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Badge variant="outline" className="px-3 py-1 text-sm rounded-full">
          Projects
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold">My Recent Work</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Here are some of my recent projects. Each project is unique and solves a specific problem.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden h-full flex flex-col group">
              <div className="relative overflow-hidden">
                <Image src={project.image} alt={project.title} width={600} height={400} className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="font-normal">
                    {tag}
                  </Badge>
                ))}
              </CardContent>
              <CardFooter className="mt-auto">
                <div className="flex gap-2 w-full">
                  <Button asChild variant="default" className="flex-1">
                    <Link href={project.demoLink}>
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                  {/* <Button asChild variant="outline" size="icon">
                    <Link href={project.githubLink}>
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button> */}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* <div className="text-center">
        <Button variant="outline" size="lg">
          View All Projects
        </Button>
      </div> */}
    </div>
  )
}
