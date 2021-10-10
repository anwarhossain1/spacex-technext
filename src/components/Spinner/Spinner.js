import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Spinner = () => {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "100px" }}>
        <CircularProgress />
      </Box>
    </div>
  );
};

export default Spinner;
