import React from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";

const Paginationn = () => {
  const [page, setPage] = React.useState(1);
  const number = useSelector((state) => state.spacexData);
  const { datas } = number;
  let totalPageNumbers = Math.ceil(datas.length / 10);
  const handleChange = (event, value) => {
    setPage(value);
    console.log(value);
  };
  return (
    <div>
      <Stack
        spacing={5}
        sx={{ justifyContent: "center", alignItems: "center", mb: 5 }}
      >
        <Pagination
          count={totalPageNumbers}
          color="primary"
          size="large"
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
};

export default Paginationn;
