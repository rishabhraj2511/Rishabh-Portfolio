import { useEffect, useState } from "react";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

const THEME_STORAGE_KEY = "portfolio-theme";

const getStoredTheme = () => {
  if (typeof window === "undefined") {
    return null;
  }
  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : null;
  } catch (error) {
    return null;
  }
};

const getPreferredTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(
    () => getStoredTheme() || getPreferredTheme()
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }
    if (getStoredTheme()) {
      return undefined;
    }
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event) => {
      if (getStoredTheme()) {
        return;
      }
      setTheme(event.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleToggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      if (typeof window !== "undefined") {
        try {
          window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
        } catch (error) {}
      }
      return nextTheme;
    });
  };

  useEffect(() => {
    if (isLoading) {
      return undefined;
    }
    const elements = Array.from(document.querySelectorAll(".reveal"));
    if (elements.length === 0) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("reveal-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-emerald-200/60 blur-3xl dark:bg-emerald-500/15" />
        <div className="absolute top-[35%] left-[-15%] h-[320px] w-[320px] rounded-full bg-amber-200/60 blur-3xl dark:bg-amber-400/15" />
        <div className="absolute bottom-[-10%] right-[10%] h-[360px] w-[360px] rounded-full bg-teal-200/50 blur-3xl dark:bg-teal-400/15" />
      </div>
      <ScrollProgress />
      <Navbar isDark={theme === "dark"} onToggleTheme={handleToggleTheme} />
      <main className="relative pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
