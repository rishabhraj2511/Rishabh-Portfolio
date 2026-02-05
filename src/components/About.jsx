import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const About = () => {
  return (
    <section id="about" className="section-surface">
      <div className="container grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <Badge variant="outline" className="w-fit">
            About
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl">
            A builder who enjoys the full story, from idea to defense.
          </h2>
          <p className="text-muted-foreground">
            I am passionate about creating software that is both elegant and
            resilient. I love exploring how systems behave under stress and how
            thoughtful design prevents failure.
          </p>
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="approach">Approach</TabsTrigger>
              <TabsTrigger value="focus">Focus</TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Who I am</CardTitle>
                  <CardDescription>
                    Developer and security learner with a growth mindset.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  I build full stack projects that balance clean UI with solid
                  foundations. I document what I learn along the way and bring
                  that insight into each new challenge.
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="approach">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>How I work</CardTitle>
                  <CardDescription>
                    Iterate fast, validate assumptions, and keep improving.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  I test ideas early, embrace feedback, and refine the details
                  that make a product dependable. Security is part of the
                  process, not an afterthought.
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="focus">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>What I study</CardTitle>
                  <CardDescription>
                    Full stack development, networking, and ethical hacking.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  I focus on frontend engineering, backend APIs, and hands on
                  security labs to understand how real systems stay safe.
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="grid gap-4">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Strengths</CardTitle>
              <CardDescription>What I bring to a project.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm text-muted-foreground">
              <div className="rounded-lg bg-muted/60 p-3">
                Clear UX decisions and design intent.
              </div>
              <div className="rounded-lg bg-muted/60 p-3">
                Systems thinking and structured debugging.
              </div>
              <div className="rounded-lg bg-muted/60 p-3">
                Curiosity to test, learn, and improve.
              </div>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Currently exploring</CardTitle>
              <CardDescription>Labs and learning initiatives.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Network protocols and defensive monitoring.</p>
              <p>Advanced React patterns and UI systems.</p>
              <p>Building proof of concept security tooling.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
