import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "./components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { dataFetch, search } from "./redux/features/dataSlice";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

const Cards = () => {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");
  const stateData = useSelector((state) => state.spacexData);
  const { datas } = stateData;
  //console.log(datas);
  const searchHandler = (e) => {
    setSearchData(e.target.value);
    console.log(searchData);

    if (searchData != "") {
      dispatch(search(searchData));
    }
  };
  //console.log(searchData);
  useEffect(() => {
    dispatch(dataFetch());
  }, []);
  return (
    <>
      <Box m={4}>
        <FormControl sx={{ mr: 3, minWidth: 200, minHeight: 50 }}>
          <InputLabel htmlFor="grouped-native-select">Filter</InputLabel>
          <Select
            native
            defaultValue=""
            id="grouped-native-select"
            label="Grouping"
          >
            <option aria-label="None" value="all" label="All" />
            <optgroup label="Launch Date">
              <option value={1}>Last Week</option>
              <option value={2}>Last Month</option>
              <option value={2}>Last Year</option>
            </optgroup>
            <optgroup label="Launch Status">
              <option value={3}>Failure</option>
              <option value={4}>Success</option>
            </optgroup>
            <option aria-label="None" value="Upcoming" label="Upcoming" />
          </Select>
        </FormControl>
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          onChange={searchHandler}
        />
      </Box>

      <Box sx={{ flexGrow: 1 }} m={5} p={5}>
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
    </>
  );
};

export default Cards;
