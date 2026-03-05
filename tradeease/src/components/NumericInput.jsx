import React from "react";

/**
 * NumericInput — displays number values with comma formatting (e.g. 1,359,971)
 * while storing the raw numeric string in parent state.
 *
 * Props:
 *  value        — raw numeric string from parent state (no commas)
 *  onChange     — receives raw numeric string (no commas)
 *  allowDecimal — default true; set false for whole-number-only fields
 *  All other props (className, placeholder, style, autoFocus) pass through.
 */

function formatWithCommas(str) {
  if (str === "" || str == null) return "";
  const parts = String(str).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

export default function NumericInput({
  value,
  onChange,
  className,
  placeholder,
  style,
  autoFocus,
  allowDecimal = true,
}) {
  const handleChange = (e) => {
    const raw = e.target.value;
    const stripped = allowDecimal
      ? raw.replace(/[^\d.]/g, "").replace(/(\..*?)\..*/g, "$1") // strip non-numeric, keep one dot
      : raw.replace(/\D/g, ""); // integers only
    onChange(stripped);
  };

  return (
    <input
      type="text"
      inputMode={allowDecimal ? "decimal" : "numeric"}
      autoComplete="off"
      className={className}
      placeholder={placeholder}
      value={formatWithCommas(value)}
      onChange={handleChange}
      autoFocus={autoFocus}
      style={style}
    />
  );
}
