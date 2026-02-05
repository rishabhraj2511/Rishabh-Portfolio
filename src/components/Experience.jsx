import { Badge } from "./ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const experienceData = [
  {
    title: "Full stack development",
    period: "2024 - Present",
    desc: "Building responsive web applications with React, Node.js, Express, and databases. Focused on clean UI, performance, and real world usability.",
  },
  {
    title: "Networking and cybersecurity",
    period: "2023 - Present",
    desc: "Hands on learning in networking fundamentals, ethical hacking concepts, Linux, and system level security practices.",
  },
  {
    title: "Projects and labs",
    period: "Ongoing",
    desc: "Creating experiments that explore how systems fail, how to detect issues, and how to design safer defaults.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container space-y-6">
        <Badge variant="outline" className="w-fit">
          Journey
        </Badge>
        <h2 className="font-display text-3xl md:text-4xl">
          Learning journey and hands on experience.
        </h2>
        <p className="max-w-2xl text-muted-foreground">
          A steady progression across development, security, and practical labs
          that shape how I build.
        </p>
        <Accordion type="single" collapsible className="flex flex-col gap-4">
          {experienceData.map((item) => (
            <AccordionItem
              key={item.title}
              value={item.title}
              className="glass-card rounded-2xl border border-border/60 px-4"
            >
              <AccordionTrigger className="text-left">
                <div className="space-y-1">
                  <p className="text-base font-medium text-foreground">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.period}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm text-muted-foreground">
                {item.desc}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Experience;
