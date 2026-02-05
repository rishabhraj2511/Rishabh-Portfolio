const contactLinks = [
  {
    icon: "fa-solid fa-envelope",
    color: "#EA4335",
    text: "rishabhraj8423@gmail.com",
    link: "mailto:rishabhraj8423@gmail.com",
  },
  {
    icon: "fa-solid fa-phone",
    color: "#34A853",
    text: "+91 9219548059",
    link: "tel:9219548059",
  },
  {
    icon: "fa-brands fa-github",
    color: "#ffffff",
    text: "github.com/rishabhraj2511",
    link: "https://github.com/rishabhraj2511",
  },
    {
    icon: "fa-brands fa-instagram",
    color: "#E4405F",
    text: "instagram.com/rishabhraj880",
    link: "https://www.instagram.com/rishabhraj880/",
  },
  {
    icon: "fa-brands fa-linkedin",
    color: "#0A66C2",
    text: "linkedin.com/in/rishabh-raj",
    link: "https://www.linkedin.com/in/rishabh-raj-422477327/",
  },

  {
    icon: "fa-brands fa-x-twitter",
    color: "#ffffff",
    text: "x.com/rishabhraj2511",
    link: "https://x.com/rishabhraj2511",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="cyber-bg"
      style={{
        padding: "60px 10px",
        borderTop: "1px solid rgba(0,255,255,0.08)",
      }}
    >
      {/* CENTER HEADING */}
      <h2
        style={{
          fontSize: "2.6rem",
          marginBottom: "70px",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        Contact{" "}
        <span
          style={{
            color: "#00ffff",
            textShadow: "0 0 15px #00ffff",
          }}
        >
          Me
        </span>
      </h2>

      {/* CONTENT AREA (ABOUT-LIKE ALIGNMENT) */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* SUB HEADING */}
        <h3
          style={{
            fontSize: "2.1rem",
            marginBottom: "35px",
            color: "#00ffff",
            textShadow: "0 0 10px #00ffff",
          }}
        >
          Let’s Connect!
        </h3>

        {/* CONTACT GRID : 3 LEFT + 3 RIGHT */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
            gap: "26px 40px",
            marginBottom: "40px",
          }}
        >
          {contactLinks.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                padding: "14px 28px",
                borderRadius: "40px",
                border: "1px solid rgba(0,255,255,0.25)",
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "1rem",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "rgba(0,255,255,0.08)";
                e.currentTarget.style.boxShadow =
                  "0 8px 22px rgba(0,255,255,0.45)";
                e.currentTarget.style.transform =
                  "translateY(3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform =
                  "translateY(0)";
              }}
            >
              <i
                className={item.icon}
                style={{
                  fontSize: "1.35rem",
                  color: item.color,
                  minWidth: "24px",
                }}
              ></i>
              <span>{item.text}</span>
            </a>
          ))}
        </div>

        {/* CLOSING MESSAGE */}
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: "1.8",
            color: "#cccccc",
            maxWidth: "650px",
          }}
        >
          Whether you want to collaborate on a project, talk about
          cybersecurity, or just have a meaningful tech conversation —
          my inbox is always open.
        </p>
      </div>
    </section>
  );
};

export default Contact;
