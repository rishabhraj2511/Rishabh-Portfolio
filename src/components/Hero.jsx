import AvatarReveal from "./AvatarReveal";


const Hero = () => {
  return (
<section
  id="home"
  className="cyber-bg hero-glow"
  style={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "40px",
  }}
>

      {/* Avatar */}
      <AvatarReveal />

      {/* Name */}
      <h1
        style={{
          marginTop: "30px",
          fontSize: "3rem",
          fontWeight: "700",
          color: "#ffffff",
        }}
      >
        Hi, I’m{" "}
        <span
          style={{
            color: "#00ffff",
            textShadow: "0 0 15px #00ffff",
          }}
        >
          Rishabh Raj
        </span>
      </h1>

      {/* Subtitle */}
      <p
        style={{
          marginTop: "15px",
          maxWidth: "700px",
          fontSize: "1.1rem",
          lineHeight: "1.6",
          color: "#cccccc",
        }}
      >
        Aspiring Software Developer & Ethical Hacker — exploring how systems break,
        networks fail, and how secure technology is truly built.
      </p>

      {/* CTA */}
      <button
  style={{
    marginTop: "30px",
    padding: "14px 32px",
    fontSize: "1rem",
    fontWeight: "600",
    background: "linear-gradient(135deg, #65f078, #20bf00)",
    color: "#0a0a0a",
    border: "none",
    borderRadius: "14px",
    cursor: "pointer",
    boxShadow: "0 8px 25px rgba(0, 230, 195, 0.35)",
    transition: "all 0.3s ease",
  }}
  onClick={() => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  onMouseOver={(e) => {
    e.target.style.transform = "translateY(-2px)";
    e.target.style.boxShadow =
      "0 12px 35px rgba(0, 230, 195, 0.55)";
  }}
  onMouseOut={(e) => {
    e.target.style.transform = "translateY(0)";
    e.target.style.boxShadow =
      "0 8px 25px rgba(0, 230, 195, 0.35)";
  }}
>
  Explore My Work
</button>
    </section>
  );
};

export default Hero;