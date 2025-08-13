import React, { useState } from "react";

export default function CoolInput({
  id,
  width = "300px",
  height = "50px",
  color = "#00BFFF",
  margin = 0,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  onChange,
  placeholder = "Type something cool...",
}) {
  const [value, setValue] = useState("");

  if (!id) {
    throw new Error("CoolInput need unique id");
  }

  function handleChange(e) {
    const val = e.target.value;
    setValue(val);
    if (onChange) {
      onChange(id, val);
    }
  }

  return (
    <input
      id={id}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      style={{
        width,
        height,
        margin, // 支持简写 margin
        marginTop, // 单向 margin 覆盖
        marginRight,
        marginBottom,
        marginLeft,
        padding: "0 15px",
        fontSize: "18px",
        border: "2px solid",
        borderImageSlice: 1,
        borderWidth: "2px",
        borderImageSource: `linear-gradient(45deg, ${color}, #8A2BE2)`,
        borderRadius: "12px",
        outline: "none",
        background: "transparent",
        color: color,
        transition: "box-shadow 0.3s ease",
        boxShadow: `0 0 10px ${color}`,
        fontWeight: "600",
      }}
      onFocus={(e) => {
        e.target.style.boxShadow = `0 0 20px ${color}, 0 0 30px #8A2BE2`;
      }}
      onBlur={(e) => {
        e.target.style.boxShadow = `0 0 10px ${color}`;
      }}
    />
  );
}
