/* Eklenmiş öğrencinin derslerinin görüldüğü ve pdf indirildiği yer. */
// import React, { useContext, useState, useEffect } from 'react'
import { LessonContext } from "../Helpers/Contex";
import "../App.css";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export default function MainMenu() {
  const { selected, setPageState, setUser } = React.useContext(LessonContext);

  const Logout = () => {
    setUser({ no: "", password: "" });
    setPageState("login");
  };
  return (
    <div className="Menu">
      <div
        style={{
          backgroundColor: "#e1cced",
          padding: 180,
          borderRadius: 100,
          minWidth: 500,
          height: 720,
        }}
      >
        <div className="maintable">
          <h1> {selected.personel.name}</h1>
        </div>

        <TableContainer style={{ backgroundColor: "white" }} component={Paper}>
          <Table sx={{ minWidth: 430, height: 200 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dersler</TableCell>
                <TableCell align="right">Doküman İndir</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(selected.lessons).map((item) => (
                <TableRow
                  key={item}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item}
                  </TableCell>
                  <TableCell align="right">
                    {/* <Button style={{ borderWidth: 1.8 }} variant="outlined" onClick={}>
                      {" "}
                      PDF İNDİR
                    </Button> */}
                    <a href={selected.lessons[item].file} download>
                      Pdf İndir
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Button
          style={{
            backgroundColor: "#fff",
            color: "black",
            height: 30,
            padding: 18,
          }}
          sx={{ minWidth: 450, height: 500 }}
          variant="contained"
          onClick={Logout}
        >
          {" "}
          ÇIKIŞ
        </Button>
      </div>
    </div>
  );
}
