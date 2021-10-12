import React, { useEffect } from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { pageSelect } from "../../redux/features/dataSlice";

const Paginationn = () => {
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);
  const number = useSelector((state) => state.spacexData);
  const { datas } = number;
  let totalPageNumbers = Math.ceil(datas.length / 9); //datas.length / datas on page
  const handleChange = (event, value) => {
    setPage(value);
    console.log(value);
  };

  useEffect(() => {
    dispatch(pageSelect(page));
  }, [page]);
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
