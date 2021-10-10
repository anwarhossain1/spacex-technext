import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { search, filter } from "../../redux/features/dataSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");
  const [value, setValue] = useState("");
  const [lastyear, setLastyear] = useState("");
  console.log(value);
  console.log(setLastyear);
  const searchHandler = (e) => {
    setSearchData(e.target.value);
  };
  useEffect(() => {
    dispatch(search(searchData));
  }, [searchData]);

  useEffect(() => {
    dispatch(filter(value));
  }, [value]);

  return (
    <div>
      <Box m={4}>
        <FormControl sx={{ mr: 3, minWidth: 200, minHeight: 50 }}>
          <InputLabel htmlFor="grouped-native-select">Filter</InputLabel>
          <Select
            native
            defaultValue=""
            id="grouped-native-select"
            label="Grouping"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          >
            <option aria-label="None" value="all" label="All" />
            <optgroup label="Launch Date">
              <option value="lastweek">Last Week</option>
              <option value="lastmonth">Last Month</option>
              <option value="lastyear">Last Year</option>
            </optgroup>
            <optgroup label="Launch Status">
              <option value="failure">Failure</option>
              <option value="success">Success</option>
            </optgroup>
            <option aria-label="None" value="upcoming" label="Upcoming" />
          </Select>
        </FormControl>
        <TextField
          id="standard-basic"
          label="Search By Rocket Name"
          variant="standard"
          onChange={searchHandler}
        />
      </Box>
    </div>
  );
};

export default Filter;
