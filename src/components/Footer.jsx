import { Github, Instagram, Linkedin } from "lucide-react";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg">Rishabh Raj</p>
            <p className="text-sm text-muted-foreground">
              Building, breaking, and securing the web.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild size="icon" variant="ghost">
              <a
                href="https://github.com/rishabhraj2511"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="icon" variant="ghost">
              <a
                href="https://www.linkedin.com/in/rishabh-raj-422477327/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="icon" variant="ghost">
              <a
                href="https://www.instagram.com/rishabhraj880/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        <Separator />
        <p className="text-xs text-muted-foreground">
          Copyright {new Date().getFullYear()} Rishabh Raj. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
