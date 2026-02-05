import { ArrowUpRight } from "lucide-react";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A redesigned portfolio focused on clear storytelling, smooth navigation, and a polished UI system.",
    tech: ["React", "Vite", "UI System"],
    link: "https://github.com/",
    status: "Featured",
  },
  {
    title: "Networking & Security Labs",
    description:
      "Hands on labs covering packet analysis, network configuration, and ethical hacking fundamentals.",
    tech: ["Linux", "Networking", "Security"],
    link: "#",
    status: "Ongoing",
  },
  {
    title: "Learning Projects",
    description:
      "A growing collection of full stack experiments that explore APIs, databases, and deployment workflows.",
    tech: ["Node.js", "Express", "MongoDB"],
    link: "#",
    status: "In progress",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-surface">
      <div className="container py-20">
        <div className="space-y-3 reveal">
          <Badge variant="outline" className="w-fit">
            Projects
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl">
            Recent work and experiments.
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            A snapshot of projects that highlight my approach to building and
            securing modern web experiences.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const isExternal = project.link.startsWith("http");
            const delayClass = [
              "reveal-delay-1",
              "reveal-delay-2",
              "reveal-delay-3",
            ][index];
            return (
              <Card
                key={project.title}
                className={`glass-card flex h-full flex-col transition-transform duration-300 ease-out hover:-translate-y-1 reveal ${delayClass || ""}`}
              >
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <CardTitle>{project.title}</CardTitle>
                    <Badge variant="secondary">{project.status}</Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={project.link}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="inline-flex items-center justify-center"
                    >
                      View project
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
