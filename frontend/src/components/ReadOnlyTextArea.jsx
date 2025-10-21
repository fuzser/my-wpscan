import React from "react";

export default function ReadOnlyTextArea({
  value = "",
  width = "100%",
  height = "200px",
  showCopyButton = true, // showCopyButton controls the visibility of the copy button
  copyLabel = "Copy", // copyLabel sets the label of the copy button
  onCopy, // onCopy represents the callback after copying
  style = {}, // style setting for container
}) {
  function handleCopy() {
    if (!value) return;
    navigator.clipboard
      .writeText(value)
      .then(() => {
        if (onCopy) onCopy(value); // value represents the copied text
      })
      .catch(() => {
        alert("Failed to copy");
      });
  }

  return (
    <div style={{ position: "relative", width, ...style }}>
      <textarea
        readOnly
        value={value}
        style={{
          width: "100%",
          height,
          padding: "12px",
          fontSize: "14px",
          fontFamily: "Consolas, monospace",
          borderRadius: "8px",
          border: "1px solid #ccc",
          resize: "none",
          backgroundColor: "#f9f9f9",
          color: "#333",
          boxSizing: "border-box",
        }}
      />
      {showCopyButton && (
        <button
          onClick={handleCopy}
          style={{
            position: "absolute",
            top: "99%",
            right: "0%",
            backgroundColor: "#007bff",
            border: "none",
            color: "white",
            padding: "6px 10px",
            borderRadius: "4px",
            cursor: "pointer",
            userSelect: "none",
            fontSize: "12px",
            fontWeight: "600",
          }}
          aria-label="copy-button"
        >
          {copyLabel}
        </button>
      )}
    </div>
  );
}
