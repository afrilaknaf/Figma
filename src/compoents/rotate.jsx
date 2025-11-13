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
        paddingBottom: "50px",
        background:
          "radial-gradient(circle at bottom, #9B4DFF 0%, #1a002a 40%, #000 100%)",
      }}
    >
      <svg viewBox="0 0 1440 850" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Glow effect */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Violet gradient */}
          <linearGradient id="violetGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9B4DFF" />
            <stop offset="100%" stopColor="#B076FF" />
          </linearGradient>
        </defs>

        {/* 1️⃣ Outer arc — slightly smaller now */}
        <path
          id="arc1"
          d="M250,770 A520,520 0 0,1 1190,770"
          stroke="url(#violetGrad)"
          strokeOpacity="0.25"
          strokeWidth="1.5"
          fill="none"
          filter="url(#glow)"
        />

        {/* 2️⃣ Second arc */}
        <path
          id="arc2"
          d="M320,780 A450,450 0 0,1 1120,780"
          stroke="url(#violetGrad)"
          strokeOpacity="0.18"
          strokeWidth="1.3"
          fill="none"
          filter="url(#glow)"
        />

        {/* 3️⃣ Third arc */}
        <path
          id="arc3"
          d="M390,790 A380,380 0 0,1 1050,790"
          stroke="url(#violetGrad)"
          strokeOpacity="0.12"
          strokeWidth="1.2"
          fill="none"
          filter="url(#glow)"
        />

        {/* 4️⃣ Inner smallest arc */}
        <path
          id="arc4"
          d="M460,800 A310,310 0 0,1 980,800"
          stroke="url(#violetGrad)"
          strokeOpacity="0.1"
          strokeWidth="1"
          fill="none"
          filter="url(#glow)"
        />

        {/* ✨ Glowing dots animation */}
        <circle r="4" fill="#B076FF" filter="url(#glow)">
          <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#arc1" />
          </animateMotion>
        </circle>

        <circle r="3.5" fill="#B076FF" opacity="0.8" filter="url(#glow)">
          <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#arc2" />
          </animateMotion>
        </circle>

        <circle r="3" fill="#B076FF" opacity="0.6" filter="url(#glow)">
          <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#arc3" />
          </animateMotion>
        </circle>

        <circle r="2.5" fill="#B076FF" opacity="0.5" filter="url(#glow)">
          <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#arc4" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
}
