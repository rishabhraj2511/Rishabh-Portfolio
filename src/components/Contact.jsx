import { ArrowUpRight, Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";

const contactLinks = [
  {
    label: "Email",
    value: "rishabhraj8423@gmail.com",
    href: "mailto:rishabhraj8423@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 9219548059",
    href: "tel:9219548059",
    icon: Phone,
  },
  {
    label: "GitHub",
    value: "github.com/rishabhraj2511",
    href: "https://github.com/rishabhraj2511",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rishabh-raj",
    href: "https://www.linkedin.com/in/rishabh-raj-422477327/",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    value: "instagram.com/rishabhraj880",
    href: "https://www.instagram.com/rishabhraj880/",
    icon: Instagram,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-surface">
      <div className="container grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 reveal">
          <Badge variant="outline" className="w-fit">
            Contact
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl">
            Let's connect and build something meaningful.
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Whether you want to collaborate, talk security, or share ideas, my
            inbox is open. I am always happy to learn with others.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="mailto:rishabhraj8423@gmail.com">Send an email</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://github.com/rishabhraj2511" target="_blank" rel="noreferrer">
                Visit GitHub
              </a>
            </Button>
          </div>
        </div>
        <Card className="glass-card reveal reveal-delay-1 transition-transform duration-300 ease-out hover:-translate-y-1">
          <CardHeader>
            <CardTitle>Reach me directly</CardTitle>
            <CardDescription>
              Choose the channel that works best for you.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              const isExternal = item.href.startsWith("http");
              return (
                <Button
                  key={item.label}
                  asChild
                  variant="outline"
                  className="w-full justify-between"
                >
                  <a
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{item.value}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              );
            })}
            <Separator className="my-2" />
            <p className="text-xs text-muted-foreground">
              Based in India and open to remote opportunities and collaborations.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
