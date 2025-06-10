"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Send,
  X,
} from "lucide-react";
import Image from "next/image";
import { submitContactForm } from "./actions";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  // githubUrl: string;
  fullDescription: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Wakatee",
    description:
      "A professional website where users can book spaces hourly or daily",
    image: "/wakatee.PNG?height=300&width=500",
    technologies: ["Angular", "TypeScript", "Bootstrap", "Sass"],
    liveUrl: "https://wakatee.com/",
    // githubUrl: "https://github.com",
    fullDescription:
      "Wakatee is a sleek and user-friendly web platform designed for individuals and businesses to book spaces on an hourly or daily basis. Whether you're looking for co-working offices, meeting rooms, event venues, or studio spaces, Wakatee provides an intuitive interface for browsing availability, checking amenities, and making instant reservations. The platform features real-time booking management, secure payment integration, and responsive design for seamless access across all devices. Built with scalability and flexibility in mind, Wakatee streamlines the entire space rental experience.",
  },
  {
    id: 2,
    title: "Prosperis Holdings",
    description:
      "A modern investment company website showcasing services, portfolios, and insights",
    image: "/prosperis.PNG?height=300&width=500",
    technologies: ["WordPress"],
    liveUrl: "https://prosperisgroup.com/",
    // githubUrl: "https://github.com",
    fullDescription:
      "Prosperis Holdings is a professionally designed corporate website developed for a dynamic investment company. The platform highlights the firm's core services including asset management, investment advisory, and capital growth strategies. Built with WordPress for easy content management, the site features an elegant design, clear service breakdowns, investor insights, and an engaging blog for market trends. Its responsive layout ensures a seamless experience across all devices, while contact forms and newsletter integration enhance client engagement and lead generation.",
  },
  {
    id: 3,
    title: "AVA",
    description:
      "A professional investment banking website showcasing financial services and corporate solutions",
    image: "/ava.PNG?height=300&width=500",
    technologies: ["Wordpress"],
    liveUrl: "https://avacapitalgroup.com/",
    // githubUrl: "https://github.com",
    fullDescription:
      "AVA is a cutting-edge, progressive web application built for a modern investment banking company. The platform highlights key financial services including mergers and acquisitions advisory, capital raising, and strategic financial consulting. Designed with React and SCSS, the site combines sleek visuals with robust performance, offering smooth navigation, fast load times, and offline access. As a PWA, AVA ensures consistent accessibility across devices. It also features an insights section, service overviews, and secure client communication tools to reinforce trust and professionalism.",
  },
  // {
  //   id: 4,
  //   title: "Portfolio Website",
  //   description: "Responsive portfolio with smooth animations",
  //   image: "@/icons/angular.png",
  //   technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
  //   liveUrl: "https://example.com",
  //   // githubUrl: "https://github.com",
  //   fullDescription:
  //     "A modern, responsive portfolio website showcasing development projects with smooth animations, dark mode support, and optimized performance. Built with accessibility and SEO best practices.",
  // },
];

const skills = [
  {
    name: "Html",
    img: "/icons/html.png",
  },
  {
    name: "CSS",
    img: "/icons/css.svg",
  },
  {
    name: "SCSS/Sass",
    img: "/icons/sass.svg",
  },
  {
    name: "JavaScript",
    img: "/icons/js.svg",
  },
  {
    name: "React.js",
    img: "/icons/reactjs.png",
  },
  {
    name: "Angular",
    img: "/icons/angular.png",
  },
  {
    name: "Vue",
    img: "/icons/vue-js.svg",
  },
  // { name: "Next.js", icon: Code },
  {
    name: "TypeScript",
    img: "/icons/ts-logo.svg",
  },
  {
    name: "Tailwind CSS",
    img: "/icons/tailwind-css.svg",
  },

  // {
  //   name: "Responsive Design",
  //   img: "/icons/angular.png",
  // },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const handleContactSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    try {
      await submitContactForm(formData);
      // Reset form
      const form = document.getElementById("contact-form") as HTMLFormElement;
      form?.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-40 border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-blue-400"
            >
              Oloye Reedwan
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900/20"
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Oloye Reedwan
            </h1>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Front-End Developer
            </h3>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              I craft beautiful, responsive web experiences with modern
              technologies and clean code
            </p>
            <div className="flex justify-center space-x-6">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-950 px-8 py-3"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 text-blue-400">About Me</h2>
            <p className="text-lg text-slate-300 mb-12 leading-relaxed">
              I'm a passionate front-end developer with 3+ years of experience
              creating engaging, user-friendly web applications. I specialize in
              Javascript, React.js, Angular, Vue and modern CSS frameworks, with
              a keen eye for design and performance optimization. I love turning
              complex problems into simple, beautiful solutions that users enjoy
              interacting with.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors duration-300"
                >
                  {/* <skill.icon className="w-8 h-8 text-blue-400 mb-2" /> */}
                  <img className="w-14 h-14 mb-2" src={skill.img} alt="" />
                  <span className="text-sm text-slate-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-400">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              passion for front-end development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-blue-900/30 text-blue-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 text-blue-400">
              Get In Touch
            </h2>
            <p className="text-lg text-slate-300 mb-12">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can work together!
            </p>

            <form
              id="contact-form"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);
                await handleContactSubmit(formData);
              }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                />
              </div>
              <Input
                name="subject"
                placeholder="Subject"
                required
                className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                required
                className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
              />
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <div className="flex justify-center space-x-6 mt-12">
              <a
                href="https://github.com/reedzclone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/oloye/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:oloyereedz@gmail.com"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="py-8 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">© {new Date().getFullYear()}</p>
        </div>
      </footer> */}

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-blue-900/30 text-blue-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="border-slate-600 text-slate-300 hover:bg-slate-700"
                    >
                      {/* <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a> */}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
