import { Box, Grid, Pagination } from "@mui/material";
import React, { useState } from "react";

export default function PaginationMovie({ page, setPage }) {
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
      <Pagination
        count="100"
        page={page}
        onChange={handleChange}
        sx={{ mt: 3, mb: 3 }}
      />
    </Box>
  );
}
