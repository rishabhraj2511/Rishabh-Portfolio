const About = () => {
  return (
    <section
  id="about"
  className="cyber-bg"
  style={{
    padding: "90px 20px",
    borderTop: "1px solid rgba(0,255,255,0.08)",
  }}
>

      <div style={{ 
        maxWidth: "900px",
        paddingLeft: "120px",
        }}>
        <h2
          style={{
            fontSize: "2.6rem",
            marginBottom: "30px",
            color: "#ffffff",
          }}
        >
          About{" "}
          <span
            style={{
              color: "#00ffff",
              textShadow: "0 0 15px #00ffff",
            }}
          >
            Me
          </span>
        </h2>

        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: "1.9",
            color: "#cccccc",
            marginBottom: "22px",
          }}
        >
          Hi, I’m{" "}
          <span
            style={{
              color: "#00ffff",
              textShadow: "0 0 8px #00ffff",
            }}
          >
            Rishabh Raj
          </span>
          . I’m a developer who enjoys building robust digital solutions and an
          enthusiast who loves deconstructing them to understand what makes them
          secure.
        </p>

        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: "1.9",
            color: "#cccccc",
            marginBottom: "22px",
          }}
        >
          My journey in Computer Science is driven by a dual fascination: the
          logic of creation and the mechanics of security. I’m currently
          deepening my expertise in{" "}
          <span style={{ color: "#00ffff" }}>
            Full-Stack Development and Ethical Hacking
          </span>
          , while strengthening my foundation in Computer Networking and
          Cybersecurity.
        </p>

        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: "1.9",
            color: "#cccccc",
            marginBottom: "22px",
          }}
        >
          I thrive in the trial-and-error phase of a project. From writing clean
          frontend logic to exploring real-world system vulnerabilities, I see
          every broken line of code as an opportunity to learn.
        </p>

        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: "1.9",
            color: "#ffffff",
          }}
        >
          I’m not just building a portfolio —{" "}
          <span
            style={{
              color: "#00ffff",
              textShadow: "0 0 10px #00ffff",
              fontWeight: "600",
            }}
          >
            I’m documenting a mindset of constant growth and problem-solving.
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;