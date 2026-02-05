import { useEffect, useState } from "react";

const sections = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(sec);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 2000,
          padding: "18px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: scrolled
            ? "rgba(10,10,10,0.75)"
            : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(0,255,255,0.15)"
            : "none",
          boxShadow: scrolled
            ? "0 8px 30px rgba(0,255,255,0.15)"
            : "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <h2
          style={{
            color: "#00ffff",
            fontWeight: "700",
            textShadow: "0 0 12px rgba(0,255,255,0.6)",
          }}
        >
          Rishabh Raj
        </h2>

        {/* -------- DESKTOP MENU -------- */}
        <div
          className="desktop-menu"
          style={{
            display: "flex",
            gap: "30px",
          }}
        >
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              style={{
                position: "relative",
                color: active === item ? "#00ffff" : "#ffffff",
                textDecoration: "none",
                fontSize: "0.95rem",
                paddingBottom: "6px",
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}

              {/* Active underline */}
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  height: "2px",
                  width: active === item ? "100%" : "0%",
                  background:
                    "linear-gradient(90deg, #00ffff, #4cff4c)",
                  boxShadow:
                    active === item
                      ? "0 0 10px rgba(0,255,255,0.8)"
                      : "none",
                  transition: "width 0.3s ease",
                }}
              />
            </a>
          ))}
        </div>

        {/* -------- HAMBURGER (MOBILE) -------- */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(true)}
          style={{
            display: "none",
            fontSize: "1.8rem",
            color: "#00ffff",
            cursor: "pointer",
          }}
        >
          ☰
        </div>
      </nav>
{/* ================= MOBILE SLIDE MENU ================= */}
<div
  style={{
    position: "fixed",
    top: 0,
    right: 0,
    height: "100vh",
    width: "260px",
    background: "rgba(1, 34, 43, 0.97)",
    backdropFilter: "blur(12px)",
    transform: menuOpen ? "translateX(0)" : "translateX(100%)",
    transition: "transform 0.35s ease",
    zIndex: 2000,
    paddingTop: "100px",
    display: "flex",
    flexDirection: "column",
    gap: "26px",
  }}
>
  {/* CLOSE BUTTON */}
  <button
    onClick={() => setMenuOpen(false)}
    style={{
      position: "absolute",
      top: "20px",
      right: "20px",
      fontSize: "1.8rem",
      background: "transparent",
      border: "none",
      color: "#00ffff",
      cursor: "pointer",
      zIndex: 2001,
    }}
  >
    ✕
  </button>

  {sections.map((item) => (
    <a
      key={item}
      href={`#${item}`}
      onClick={() => setMenuOpen(false)}
      style={{
        padding: "10px 24px",
        color: active === item ? "#00ffff" : "#ffffff",
        fontSize: "1.05rem",
        textDecoration: "none",
        borderLeft:
          active === item
            ? "3px solid #4cff4c"
            : "3px solid transparent",
        background:
          active === item
            ? "rgba(0,255,255,0.08)"
            : "transparent",
        transition: "all 0.25s ease",
      }}
    >
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </a>
  ))}
</div>
    </>
  );
};

export default Navbar;