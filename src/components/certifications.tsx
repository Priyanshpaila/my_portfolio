"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022",
      description: "Validated expertise in designing distributed systems on AWS.",
      image: "/placeholder.svg",
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2021",
      description: "Demonstrated ability to build scalable applications using Google Cloud.",
      image: "/placeholder.svg",
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      date: "2020",
      description: "Proven skills in developing solutions using Azure services.",
      image: "/placeholder.svg",
    },
  ]

  return (
    <div className="space-y-10">
      <motion.div
        className="space-y-2 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Badge variant="outline" className="px-3 py-1 text-sm rounded-full">Achievements</Badge>
        <h2 className="text-3xl md:text-4xl font-bold">Certifications &amp; Awards</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Professional certifications and recognition I&apos;ve received throughout my career.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden h-full flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4">
                <Image src={cert.image} alt={cert.title} width={80} height={80} className="object-contain" />
                <div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <CardDescription>{cert.issuer} • {cert.date}</CardDescription>
                </div>
              </CardHeader>
              <CardContent><p className="text-muted-foreground">{cert.description}</p></CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
