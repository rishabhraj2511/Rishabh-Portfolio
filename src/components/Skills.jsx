const programmingLanguages = [
  { name: "C", level: 75 },
  { name: "Java", level: 70 },
  { name: "Python", level: 70 },
  { name: "JavaScript", level: 75 },
];

const systemsStack = [
  "HTML & CSS",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Linux",
  "Computer Networking",
  "Ethical Hacking",
  "Cyber Forensics",
];

const Skills = () => {
  return (
   <section
  id="skills"
    className="cyber-bg"
  style={{

    padding: "90px 20px",     
    display: "flex",
    justifyContent: "center",
    borderTop: "1px solid rgba(0,255,255,0.08)",
  }}
>


      <div style={{ maxWidth: "1200px", width: "100%" }}>
        {/* Heading */}
        <h2
          style={{
            fontSize: "2.6rem",
            marginBottom: "80px",
            color: "#ffffff",
            textAlign: "center",
          }}
        >
          Technical{" "}
          <span
            style={{
              color: "#00ffff",
              textShadow: "0 0 15px #00ffff",
            }}
          >
            Skills
          </span>
        </h2>

        {/* LEFT - RIGHT LAYOUT */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
            gap: "80px",
          }}
        >
          {/* LEFT: Programming Languages */}
          <div>
            <h3
              style={{
                fontSize: "1.6rem",
                marginBottom: "30px",
                color: "#00ffff",
              }}
            >
              Programming Languages
            </h3>

                {programmingLanguages.map((skill, i) => (
             <div key={i} style={{ marginBottom: "26px" }}>
    
             {/* WIDTH-CONSTRAINED WRAPPER */}
            <div style={{ width: "60%", marginLeft: "8px" }}>
      
                {/* LABEL ROW */}
                <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "6px",
          color: "#cccccc",
          fontSize: "0.95rem",
        }}
      >
        <span>{skill.name}</span>
        <span
          style={{
            fontSize: "0.85rem",
            color: "#999",
          }}
        >
          {skill.level}%
        </span>
      </div>

      {/* PROGRESS BAR */}
      <div
        style={{
          width: "100%",
          height: "8px",
          backgroundColor: "#1a1a1a",
          borderRadius: "6px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${skill.level}%`,
            height: "100%",
            background:
              "linear-gradient(90deg, #00ffff 0%, #00e6c3 60%, #4cff4c 100%)",
            boxShadow: "0 0 12px rgba(0, 255, 200, 0.6)",
          }}
        />
      </div>
    </div>
  </div>
))}

          </div>

          {/* RIGHT: Systems, Stack & Security */}
          <div>
            <h3
              style={{
                fontSize: "1.6rem",
                marginBottom: "30px",
                color: "#00ffff",
              }}
            >
              Systems, Stack & Security
            </h3>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              {systemsStack.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    padding: "12px 20px",
                    borderRadius: "28px",
                    color: "#00ffff",
                    border: "1px solid rgba(0,255,255,0.35)",
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background =
                      "linear-gradient(135deg, #00ffff, #4cff4c)";
                    e.target.style.color = "#0a0a0a";
                    e.target.style.boxShadow =
                      "0 0 20px rgba(0,255,200,0.7)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = "#00ffff";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
