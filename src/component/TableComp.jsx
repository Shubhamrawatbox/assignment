import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Pagination } from "@mui/material";
import { useDispatch } from "react-redux";
import { pageChange } from "../redux/features/counter/counterSlice";
import { Link, useNavigate } from "react-router-dom";

export default function BasicTable({ data, total_pages, isLoading }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const dataPass=(data)=>{
    navigate({ pathname: `/user/${data?.id}`, state: data });
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Image</TableCell>
            <TableCell align="left">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <p className="text-center">Loading....</p>
          ) : (
            data?.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" className="cursor-pointer" onClick={()=>dataPass(row)}>
                  {`${row.first_name} ${row.last_name}`}
                </TableCell>
                <TableCell component="th" scope="row">
                  <img src={row.avatar} width={"50px"} height={"50px"} />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <div className="flex justify-center m-5">
        <Pagination
          count={total_pages}
          onChange={(_, value) => dispatch(pageChange(value))}
        />
      </div>
    </TableContainer>
  );
}
