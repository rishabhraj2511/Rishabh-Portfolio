const experienceData = [
  {
    title: "Full-Stack Development",
    period: "2024 – Present",
    desc: "Building responsive web applications using React, Node.js, Express, and databases. Focused on clean UI, performance, and real-world usability.",
  },
  {
    title: "Networking & Cybersecurity",
    period: "2023 – Present",
    desc: "Hands-on learning in computer networking, ethical hacking fundamentals, Linux, and system-level security concepts.",
  },
  {
    title: "Projects & Labs",
    period: "Ongoing",
    desc: "Actively creating projects and labs to understand how systems behave, fail, and can be secured.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="cyber-bg"
      style={{
        padding: "90px 20px",
        borderTop: "1px solid rgba(0,255,255,0.08)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "900px", width: "100%" }}>
        <h2 style={{ fontSize: "2.6rem", color: "#fff", marginBottom: "60px" }}>
          Learning{" "}
          <span style={{ color: "#00ffff", textShadow: "0 0 15px #00ffff" }}>
            Journey
          </span>
        </h2>

        {experienceData.map((item, i) => (
          <div key={i} style={{ marginBottom: "40px" }}>
            <h3 style={{ color: "#00ffff", fontSize: "1.3rem" }}>
              {item.title}
            </h3>
            <span style={{ color: "#888", fontSize: "0.85rem" }}>
              {item.period}
            </span>
            <p style={{ color: "#ccc", marginTop: "10px", lineHeight: "1.7" }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;