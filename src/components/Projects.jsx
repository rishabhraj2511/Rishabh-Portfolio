const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with React and a cyber-inspired dark UI. Focused on clean layout, smooth interactions, and clear skill representation.",
    tech: ["React", "CSS", "Vite"],
    link: "https://github.com/",
  },
  {
    title: "Networking & Security Labs",
    description:
      "Hands-on practice with networking fundamentals, ethical hacking concepts, and system-level exploration to understand real-world vulnerabilities.",
    tech: ["Linux", "Networking", "Security"],
    link: "#",
  },
  {
    title: "Ongoing Learning Projects",
    description:
      "Actively building projects in full-stack development and cybersecurity. This section will evolve as I ship more real-world applications.",
    tech: ["Node.js", "Express.js", "MongoDB"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="cyber-bg"
      style={{
        padding: "90px 20px",
        borderTop: "1px solid rgba(0,255,255,0.08)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "1100px", width: "100%" }}>
        {/* Heading */}
        <h2
          style={{
            fontSize: "2.6rem",
            marginBottom: "60px",
            color: "#ffffff",
            textAlign: "center",
          }}
        >
          My{" "}
          <span
            style={{
              color: "#00ffff",
              textShadow: "0 0 15px #00ffff",
            }}
          >
            Work
          </span>
        </h2>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "40px",
          }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              onClick={() => window.open(project.link, "_blank")}
              style={{
                background: "#0f0f0f",
                padding: "28px",
                borderRadius: "16px",
                border: "1px solid rgba(0,255,255,0.12)",
                cursor: "pointer",
                transition: "all 0.35s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 14px 40px rgba(0,255,255,0.15)";
                e.currentTarget.style.border =
                  "1px solid rgba(0,255,255,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.border =
                  "1px solid rgba(0,255,255,0.12)";
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "scale(0.97)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
            >
              <h3
                style={{
                  fontSize: "1.3rem",
                  marginBottom: "14px",
                  color: "#00ffff",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.7",
                  color: "#cccccc",
                  marginBottom: "18px",
                }}
              >
                {project.description}
              </p>

              {/* Tech tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: "7px 16px",
                      fontSize: "0.8rem",
                      borderRadius: "20px",
                      border: "1px solid rgba(0,255,255,0.35)",
                      color: "#00ffff",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
