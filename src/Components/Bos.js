/* admin sayfası girişi */
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import AddStudentModal from "./AddStudentModal";
import { LessonContext } from "../Helpers/Contex";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const columns = [
  { id: "name", label: "İsim", minWidth: 100 },

  {
    id: "no",
    label: "Okul Numarası",
    minWidth: 190,
    align: "right",
    format: (value) => value,
  },
];

export default function Bos({ lesson }) {
  const { studentList, setStudentList, lessonList } =
    React.useContext(LessonContext);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: "#eef0f2",
      }}
    >
      <div>Öğrenci Ekle</div>
      <Fab onClick={handleOpen} size="small" color="black" aria-label="add">
        <AddIcon />{" "}
      </Fab>{" "}
      <TableContainer sx={{ maxHeight: 500 }}>
        {/* <Button size ="medium"variant="outlined" onClick={handleOpen} >Öğrenci ekle</Button> */}

        <Table
          style={{ backgroundColor: "#eef0f2" }}
          stickyHeader
          aria-label="sticky table"
        >
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                colSpan={5}
                style={{ backgroundColor: "#d8a9f6" }}
              >
                {lesson.name}
              </TableCell>
            </TableRow>

            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    top: 57,
                    minWidth: column.minWidth,
                    backgroundColor: "#e1cced",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {studentList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((student) => {
                if (Object.keys(student.lessons).includes(lesson.name))
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={student.code}
                    >
                      {columns.map((column) => {
                        const value = student.personel[column.id]; //öğrenci numarasını value dedim
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <AddStudentModal
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
        lesson={lesson}
        studentList={studentList}
        setStudentList={setStudentList}
        lessonList={lessonList}
      />
    </Paper>
  );
}
