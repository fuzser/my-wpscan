import React from "react";

export default function Spacer({ height = "1rem", className, style }) {
  const heightValue =
    typeof height === "number"
      ? `${height}px`
      : typeof height === "string" && height.endsWith("%")
      ? `${parseFloat(height)}vh` 
      : height;

  return (
    <div
      className={className}
      style={{ height: heightValue, width: "100%", display: "block", ...style }}
    />
  );
}
