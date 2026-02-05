import { ArrowUpRight, Code2, MapPin, Shield, Sparkles } from "lucide-react";

import realPhoto from "../assets/rishabh.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="container grid gap-12 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="animate-fade-up space-y-6">
          <Badge variant="secondary" className="w-fit">
            Full stack developer with a security mindset
          </Badge>
          <h1 className="text-balance font-display text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            Building resilient digital products that hold up under pressure.
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            I am Rishabh Raj, an aspiring software developer who studies how
            systems behave, break, and recover. I focus on clean UI, reliable
            code, and security-aware engineering.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#projects" className="inline-flex items-center">
                View projects
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Let's collaborate</a>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="glass-card soft-shadow rounded-2xl p-4">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Code2 className="h-4 w-4 text-primary" />
                Development
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                React, Node, and modern UI systems.
              </p>
            </div>
            <div className="glass-card soft-shadow rounded-2xl p-4">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Shield className="h-4 w-4 text-primary" />
                Security Labs
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Networking, ethical hacking, and hardening.
              </p>
            </div>
            <div className="glass-card soft-shadow rounded-2xl p-4">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Sparkles className="h-4 w-4 text-primary" />
                Curiosity
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Always learning, always shipping.
              </p>
            </div>
          </div>
        </div>
        <div className="relative animate-fade-up" style={{ animationDelay: "120ms" }}>
          <div className="hero-ring absolute -right-16 -top-10 h-52 w-52 rounded-full blur-2xl animate-float" />
          <Card className="glass-card relative overflow-hidden">
            <CardContent className="space-y-5 p-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20 border border-white/70">
                  <AvatarImage src={realPhoto} alt="Rishabh Raj" />
                  <AvatarFallback>RR</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Aspiring software developer
                  </p>
                  <p className="font-display text-xl">Rishabh Raj</p>
                  <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    India
                  </div>
                </div>
              </div>
              <Separator />
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-muted/60 p-3">
                  <p className="text-xs text-muted-foreground">Current focus</p>
                  <p className="text-sm font-medium">
                    Full stack + security
                  </p>
                </div>
                <div className="rounded-xl bg-muted/60 p-3">
                  <p className="text-xs text-muted-foreground">Learning</p>
                  <p className="text-sm font-medium">Network defense</p>
                </div>
                <div className="rounded-xl bg-muted/60 p-3">
                  <p className="text-xs text-muted-foreground">Projects</p>
                  <p className="text-sm font-medium">Portfolio + labs</p>
                </div>
                <div className="rounded-xl bg-muted/60 p-3">
                  <p className="text-xs text-muted-foreground">Availability</p>
                  <p className="text-sm font-medium">Open to internships</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
