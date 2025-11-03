import React from "react";

export default function Background() {
  return (
    <div
      className="background"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background:
          "radial-gradient(circle at bottom,#9B4DFF 0%, #1a002a 40%, #000 100%)",
      }}
    >
      <svg viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1️⃣ Wider outer arc */}
        <path
          id="arc1"
          d="M150,800 A650,650 0 0,1 1290,800"
          stroke="white"
          strokeOpacity="0.2"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
        />

        {/* 2️⃣ Mid arc */}
        <path
          id="arc2"
          d="M230,800 A570,570 0 0,1 1210,800"
          stroke="white"
          strokeOpacity="0.15"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
        />

        {/* 3️⃣ Inner arc */}
        <path
          id="arc3"
          d="M310,800 A490,490 0 0,1 1130,800"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
        />

        {/* Glowing moving circles */}
        <circle r="5" fill="white" filter="url(#glow)">
          <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#arc1" />
          </animateMotion>
        </circle>

        <circle r="4" fill="white" filter="url(#glow)" opacity="0.8">
          <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#arc2" />
          </animateMotion>
        </circle>

        <circle r="3" fill="white" filter="url(#glow)" opacity="0.6">
          <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#arc3" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
}
