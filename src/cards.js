import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "./components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { dataFetch, search, filter } from "./redux/features/dataSlice";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Filter from "./components/Filter/Filter";
import Spinner from "./components/Spinner/Spinner";
import Pagination from "./components/Pagination/Pagination";

const Cards = () => {
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state.spacexData);
  const { datas, search, filter, loading, currentPage, datasPerPage } =
    stateData;
  console.log(filter, "filter");

  let spacex;

  if (filter !== "" && search === "") {
    // calculation For Pagination

    if (filter === "all") {
      //spacex = datas;
      console.log("hello");
      const indexOfLastData = currentPage * datasPerPage;
      const indexOfFirstData = indexOfLastData - datasPerPage;
      spacex = datas.slice(indexOfFirstData, indexOfLastData);
      console.log(currentPage, "currentPage");
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
        if (d.upcoming) {
          console.log("calling upcoming");
          return d.upcoming;
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
      const indexOfLastData = currentPage * datasPerPage;
      const indexOfFirstData = indexOfLastData - datasPerPage;
      spacex = datas.slice(indexOfFirstData, indexOfLastData);
      console.log(currentPage, "currentPage");
      //spacex = datas;
    }
  } else if (filter === "all" && search !== "") {
    spacex = datas.filter((d) => d.mission_name.toLowerCase().includes(search));
  } else {
    //spacex = datas;
    const indexOfLastData = currentPage * datasPerPage;
    const indexOfFirstData = indexOfLastData - datasPerPage;
    spacex = datas.slice(indexOfFirstData, indexOfLastData);
    console.log(currentPage, "currentPage");
  }

  //console.log(datas);

  //console.log(searchData);
  useEffect(() => {
    dispatch(dataFetch());
  }, []);
  return (
    <>
      <Filter />
      {loading ? (
        <Spinner />
      ) : (
        <Box sx={{ flexGrow: 1 }} m={5} p={5}>
          <Grid
            container
            direction="raw"
            alignItems="center"
            justifyContent="center"
          >
            {spacex &&
              spacex.map((data) => {
                return (
                  <Grid
                    xs={12}
                    md={3}
                    alignItems="center"
                    justifyContent="center"
                    m={2}
                  >
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
      )}
      <Pagination />
    </>
  );
};

export default Cards;
