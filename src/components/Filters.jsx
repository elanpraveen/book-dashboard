import React from "react";
import { MenuItem, TextField } from "@mui/material";

export default function Filters({ genre, status, onFilterChange }) {
  return (
    <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
      <TextField
        select
        label="Genre"
        value={genre}
        onChange={(e) => onFilterChange("genre", e.target.value)}
        style={{ width: 200 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Fiction">Fiction</MenuItem>
        <MenuItem value="Non-Fiction">Non-Fiction</MenuItem>
        <MenuItem value="Sci-Fi">Sci-Fi</MenuItem>
      </TextField>

      <TextField
        select
        label="Status"
        value={status}
        onChange={(e) => onFilterChange("status", e.target.value)}
        style={{ width: 200 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Available">Available</MenuItem>
        <MenuItem value="Issued">Issued</MenuItem>
      </TextField>
    </div>
  );
}
