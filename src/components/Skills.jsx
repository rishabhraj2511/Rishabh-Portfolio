import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

const programmingLanguages = [
  { name: "C", level: 75, note: "Systems foundations" },
  { name: "Java", level: 70, note: "OOP and backend logic" },
  { name: "Python", level: 70, note: "Automation and scripting" },
  { name: "JavaScript", level: 78, note: "Frontend and tooling" },
];

const stackSkills = [
  "HTML & CSS",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "REST APIs",
  "Git",
];

const securitySkills = [
  "Linux",
  "Networking",
  "Ethical Hacking",
  "Threat Modeling",
  "Cyber Forensics",
  "Wireshark",
  "OWASP Basics",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container grid gap-10">
        <div className="space-y-3 reveal">
          <Badge variant="outline" className="w-fit">
            Skills
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl">
            Technical strengths and growing expertise.
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            A balanced focus on modern web development and security foundations
            keeps me ready for real world challenges.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="glass-card reveal reveal-delay-1 transition-transform duration-300 ease-out hover:-translate-y-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>Programming languages</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-5">
              {programmingLanguages.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <p className="font-medium text-foreground">
                        {skill.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {skill.note}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress value={skill.level} />
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="glass-card reveal reveal-delay-2 transition-transform duration-300 ease-out hover:-translate-y-1">
            <CardHeader>
              <CardTitle>Web stack</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {stackSkills.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </CardContent>
          </Card>
          <Card className="glass-card reveal reveal-delay-3 transition-transform duration-300 ease-out hover:-translate-y-1">
            <CardHeader>
              <CardTitle>Security toolkit</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {securitySkills.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
