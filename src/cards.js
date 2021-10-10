import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "./components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { dataFetch, search, filter } from "./redux/features/dataSlice";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Filter from "./components/Filter/Filter";

const Cards = () => {
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state.spacexData);
  const { datas, search, filter } = stateData;
  console.log(filter, "filter");

  let spacex;
  if (filter !== "") {
    if (filter === "all") {
      spacex = datas;
      console.log("hello");
    } else if (filter === "lastyear") {
      let lastYear = new Date().getFullYear().toString();
      console.log(lastYear - 1);
      spacex = datas.filter((d) =>
        d.launch_year.toLowerCase().includes(lastYear - 1)
      );
    } else if (filter === "lastweek") {
      let today = new Date();
      let lastWeek = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 7
      ).toString();
      console.log(lastWeek);
      spacex = datas.filter((d) =>
        d.launch_date_local.toLowerCase().includes(lastWeek)
      );
    } else if (filter === "lastmonth") {
      let today = new Date();
      let lastMonth = new Date(
        today.getFullYear(),
        today.getMonth() - 1,
        today.getDate()
      ).toString();
      console.log(lastMonth);
      spacex = datas.filter((d) =>
        d.launch_date_local.toLowerCase().includes(lastMonth)
      );
    } else if (filter === "failure") {
      spacex = datas.filter((d) => {
        if (d.launch_success) {
          return d.launch_success;
        }
      });
    } else if (filter === "success") {
      spacex = datas.filter((d) => {
        if (d.launch_success) {
          return d.launch_success === true;
        }
      });
    } else if (filter === "upcoming") {
      spacex = datas.filter((d) => {
        if (d.upcoming) {
          console.log("calling upcoming");
          return d.upcoming;
        }
      });
    } else {
    }
  } else if (search !== "") {
    spacex = datas.filter((d) => d.mission_name.toLowerCase().includes(search));
  } else {
    spacex = datas;
  }
  //console.log(datas);

  //console.log(searchData);
  useEffect(() => {
    dispatch(dataFetch());
  }, []);
  return (
    <>
      <Filter />
      <Box sx={{ flexGrow: 1 }} m={5} p={5}>
        <Grid
          container
          spacing={3}
          direction="raw"
          alignItems="center"
          justify="center"
        >
          {spacex &&
            spacex.map((data) => {
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
                    launchYear={data.launch_year}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </>
  );
};

export default Cards;
