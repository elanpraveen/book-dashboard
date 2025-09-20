import React from "react";
import { TextField } from "@mui/material";

export default function SearchBar({ value, onChange }) {
  return (
    <TextField
      label="Search by title or author"
      variant="outlined"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
      style={{ marginBottom: "16px" }}
    />
  );
}
