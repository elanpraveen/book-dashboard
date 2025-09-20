import React from "react";
import { Button } from "@mui/material";

export default function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
}) {
  return (
    <div style={{ marginTop: "16px", display: "flex", gap: "8px" }}>
      <Button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </Button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <Button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
}
