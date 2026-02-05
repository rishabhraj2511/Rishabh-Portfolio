import { useEffect, useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";

import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { cn } from "../lib/utils";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Journey" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      let current = "home";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          current = section.id;
          break;
        }
      }
      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all",
        scrolled
          ? "border-b border-border/70 bg-white/75 shadow-sm backdrop-blur"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="font-display text-lg text-foreground">
          Rishabh Raj
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                "relative text-sm font-medium transition-colors",
                active === section.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {section.label}
              <span
                className={cn(
                  "absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-primary transition-opacity",
                  active === section.id ? "opacity-100" : "opacity-0"
                )}
              />
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="outline" size="sm">
            <a href="#contact">Let's talk</a>
          </Button>
          <Button asChild size="sm">
            <a href="#projects" className="inline-flex items-center">
              View work
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white/95">
              <div className="flex h-full flex-col gap-6">
                <div>
                  <p className="font-display text-lg">Rishabh Raj</p>
                  <p className="text-sm text-muted-foreground">
                    Full stack development and security labs
                  </p>
                </div>
                <nav className="flex flex-col gap-2">
                  {sections.map((section) => (
                    <SheetClose asChild key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className={cn(
                          "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                          active === section.id
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {section.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto">
                  <Button asChild className="w-full">
                    <a href="#contact">Start a conversation</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
