import { Box, Grid, Pagination } from "@mui/material";
import React, { useState } from "react";

export default function PaginationMovie({ page, setPage, count }) {
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        sx={{ mt: 3, mb: 3 }}
      />
    </Box>
  );
}
