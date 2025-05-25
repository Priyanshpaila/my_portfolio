"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

export default function Resume() {
  const handleDownloadResume = () => {
    const resumeContent = `PRIYANSH PAILA
Software Developer
Phone: 7467995000 | Email: priyanshpaila@gmail.com
LinkedIn: www.linkedin.com/in/priyansh-paila-aa70bb221
Location: Bhilai, Chhattisgarh, India - 490001

ABOUT
Ambitious software developer eager to learn and contribute effectively. Proficient in HTML, CSS, JavaScript, C++. Strong in problem solving, adaptable, and committed to continuous improvement.

EDUCATION
B.Tech in Computer Science & Engineering - 85.07%
Shri Shankaracharya Technical Campus | 2020 - 2024

Higher Secondary (12th) - 82.40%
M.G.M Senior Secondary School | 2018 - 2020

Secondary (10th) - 74.20%
M.G.M Senior Secondary School | 2016 - 2018

SKILLS
Frontend: HTML, CSS, JavaScript, Bootstrap, Git, UI/UX, Figma, Flutter, ChatGpt, Dart
Backend: C++, OOPs, Problem Solving, File Handling (C++)
Database: MySQL, MongoDb

PROJECTS
Career Guidance Platform (Oct–Nov 2023)
• Open-source web app for career exploration with detailed role info, links to certifications, and version control with Git.

Heart Disease Prediction (Apr–May 2024)
• Team-built Python web app using logistic regression for heart disease risk prediction via vitals analysis.

STRENGTHS
✓ Sincerity & Punctuality
✓ Positive Attitude & Dedication
✓ Hardworking, Reliable, Optimistic`;

    const blob = new Blob([resumeContent], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Priyansh_Paila_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const handleViewResume = () => {
    const resumeHTML = `
<!DOCTYPE html>
<html>
<head>
  <title>Priyansh Paila - Resume</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; line-height: 1.6; }
    h1 { color: #333; border-bottom: 2px solid #007acc; }
    h2 { color: #007acc; margin-top: 30px; }
    .section { margin-bottom: 20px; }
    ul { padding-left: 20px; }
  </style>
</head>
<body>
  <h1>PRIYANSH PAILA</h1>
  <div class="section">
    <strong>Software Developer</strong><br/>
    📞 7467995000 | ✉️ priyanshpaila@gmail.com<br/>
    🔗 <a href="https://www.linkedin.com/in/priyansh-paila-aa70bb221" target="_blank">LinkedIn Profile</a><br/>
    📍 Bhilai, Chhattisgarh, India - 490001
  </div>

  <h2>ABOUT</h2>
  <p>Ambitious software developer with strong fundamentals in HTML, CSS, JavaScript, and C++. Adaptable, eager to learn, and passionate about contributing to real-world projects.</p>

  <h2>EDUCATION</h2>
  <div class="section">B.Tech in Computer Science & Engineering – <strong>85.07%</strong><br/>Shri Shankaracharya Technical Campus (2020–2024)</div>
  <div class="section">Higher Secondary (12th) – <strong>82.40%</strong><br/>M.G.M Senior Secondary School (2018–2020)</div>
  <div class="section">Secondary (10th) – <strong>74.20%</strong><br/>M.G.M Senior Secondary School (2016–2018)</div>

  <h2>SKILLS</h2>
  <p><strong>Frontend:</strong> HTML, CSS, JavaScript, Bootstrap, Git, UI/UX, Figma, Flutter, ChatGpt<br/>
     <strong>Backend:</strong> C++, OOPs, Problem Solving, File Handling (C++)<br/>
     <strong>Database:</strong> MySQL, MongoDb</p>

  <h2>PROJECTS</h2>
  <div class="section">
    <strong>Career Guidance Platform</strong> (Oct–Nov 2023)
    <ul>
      <li>Open-source app for career insights with job descriptions, skills, salary info, and certification links.</li>
    </ul>
  </div>
  <div class="section">
    <strong>Heart Disease Prediction</strong> (Apr–May 2024)
    <ul>
      <li>Python-based tool using logistic regression for proactive heart health assessments.</li>
    </ul>
  </div>

  <h2>STRENGTHS</h2>
  <ul>
    <li>Sincerity & Punctuality</li>
    <li>Positive Attitude & Dedication</li>
    <li>Hardworking, Reliable, Optimistic</li>
  </ul>
</body>
</html>`.replace(/"/g, "&quot;");

    const blob = new Blob([resumeHTML], { type: "text/html" });
    const url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
    setTimeout(() => window.URL.revokeObjectURL(url), 100);
  };

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
          Resume
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold">My Resume</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Button onClick={handleDownloadResume} className="group">
            <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            Download Resume
          </Button>
          <Button onClick={handleViewResume} variant="outline" className="group">
            <FileText className="mr-2 h-4 w-4" />
            View Resume
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
