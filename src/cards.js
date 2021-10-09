import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "./components/Card/Card";
const cards = () => {
  return (
    <Box sx={{ flexGrow: 1 }} m={5}>
      <Grid
        container
        spacing={2}
        direction="raw"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card />
        </Grid>
      </Grid>
    </Box>
  );
};

export default cards;
