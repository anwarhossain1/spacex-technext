import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "./components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { dataFetch } from "./redux/features/dataSlice";

const Cards = () => {
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state.spacexData);
  const { datas } = stateData;
  console.log(datas);
  useEffect(() => {
    dispatch(dataFetch());
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }} m={5}>
      <Grid
        container
        spacing={3}
        direction="raw"
        alignItems="center"
        justify="center"
      >
        {datas.map((data) => {
          return (
            <Grid item xs={12} md={3}>
              <Card
                flightNumber={data.flight_number}
                missionName={data.mission_name}
                rocketName={data.rocket.rocket_name}
                image={data.links.mission_patch}
                launchStatus={data.launch_success}
                upcoming={data.upcoming}
                details={data.details}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Cards;
