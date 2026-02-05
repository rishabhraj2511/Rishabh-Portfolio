const Footer = () => {
  return (
    <footer
      className="cyber-bg"
      style={{
        padding: "60px 20px 40px",
        borderTop: "1px solid rgba(0,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Name */}
        <h3
          style={{
            color: "#00ffff",
            fontSize: "1.4rem",
            marginBottom: "8px",
            textShadow: "0 0 10px rgba(0,255,255,0.55)",
          }}
        >
          Rishabh Raj
        </h3>

        {/* Tagline */}
        <p
          style={{
            color: "#cccccc",
            fontSize: "0.95rem",
            marginBottom: "26px",
            letterSpacing: "0.3px",
          }}
        >
          Building • Breaking • Securing the Web
        </p>

        {/* Social Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "28px",
            marginBottom: "30px",
          }}
        >
          {[
            {
              icon: "fa-brands fa-github",
              link: "https://github.com/rishabhraj2511",
            },
            {
              icon: "fa-brands fa-linkedin",
              link: "https://www.linkedin.com/in/rishabh-raj-422477327/",
            },
            {
              icon: "fa-brands fa-instagram",
              link: "https://www.instagram.com/rishabhraj880/",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#ffffff",
                fontSize: "1.35rem",
                transition: "all 0.3s ease",
                display: "inline-flex",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#00ffff";
                e.currentTarget.style.textShadow =
                  "0 0 10px rgba(0,255,255,0.7)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.textShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <i className={item.icon}></i>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            width: "70px",
            height: "2px",
            margin: "0 auto 18px",
            background:
              "linear-gradient(90deg, #00ffff, #4cff4c)",
            opacity: 0.6,
          }}
        />

        {/* Copyright */}
        <p
          style={{
            color: "#777777",
            fontSize: "0.85rem",
            letterSpacing: "0.3px",
          }}
        >
          © {new Date().getFullYear()} Rishabh Raj. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
