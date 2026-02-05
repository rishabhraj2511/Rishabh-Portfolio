import { useState } from "react";

import avatar from "../assets/avatar.png";
import realPhoto from "../assets/rishabh.jpg";

const AvatarReveal = () => {
  const [revealed, setRevealed] = useState(false);
  const [ripple, setRipple] = useState(false);

  const handleClick = () => {
    if (revealed) return;

    setRipple(true);

    // ripple ke baad reveal
    setTimeout(() => {
      setRevealed(true);
      setRipple(false);
    }, 600);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      {/* RIPPLE EFFECT */}
      {ripple && (
        <span
          style={{
            position: "absolute",
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            border: "2px solid rgba(0,255,255,0.8)",
            animation: "cyberRipple 0.6s ease-out",
            pointerEvents: "none",
          }}
        />
      )}

      {/* IMAGE */}
      <img
        src={revealed ? realPhoto : avatar}
        alt="Rishabh Raj"
        style={{
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          objectFit: "cover",
          objectPosition: "top center",
          boxShadow: revealed
            ? "0 0 20px #00ff00, 0 0 40px #00ff00, 0 0 60px rgba(0,255,0,0.6)"
            : "0 0 20px #00ffff, 0 0 40px rgba(0,255,255,0.6)",
          transition: "all 0.8s ease",
          zIndex: 2,
        }}
      />

      {!revealed && (
        <p
          style={{
            marginTop: "12px",
            color: "#00ffff",
            fontSize: "0.9rem",
            letterSpacing: "1px",
          }}
        >
          Click to Reveal
        </p>
      )}
    </div>
  );
};

export default AvatarReveal;