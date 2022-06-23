import "./App.css";
import React, { useState, useContext } from "react";
import MainMenu from "./Components/MainMenu";
import Login from "./Components/Login";
import Admin from "./Components/AdminPanel";
import Bos from "./Components/Bos.js";
import { LessonContext } from "./Helpers/Contex";
import NewStudent from "./Components/NewStudent";

import AddLesson from "./Components/AddLesson";

function App() {
  const [pageState, setPageState] = useState("login");
  const [user, setUser] = useState({ name: "", password: "" });
  const [selected, setSelected] = useState({});

  const [studentList, setStudentList] = useState([
    {
      personel: {
        name: "Ege Öztürk",
        password: "123",
        no: "3",
      },
      lessons: {
        Matematik: {
          file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        },
        Fizik: {
          file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        },
      },
    },
    {
      personel: {
        name: "admin",
        password: "123",
        no: "1",
      },
      lessons: {},
    },
    {
      personel: {
        name: "Zeynep Arda",
        password: "123",
        no: "2",
      },
      lessons: {
        Matematik: {
          file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        },
        Fizik: {
          file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        },
      },
    },
  ]);

  const [lessonList, setLessonList] = useState([
    {
      name: "Yazılım",
      code: "1223",
      file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      name: "Java",
      code: "1234",
      file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      name: "Matematik",
      code: "12243",
      file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
  ]);
  return (
    <div className="App">
      <LessonContext.Provider
        value={{
          pageState,
          setPageState,
          user,
          setUser,
          selected,
          setSelected,
          studentList,
          setStudentList,
          lessonList,
          setLessonList,
        }}
      >
        {pageState === "login" && <Login />}
        {pageState === "menu" && <MainMenu />}
        {pageState === "admin" && <Admin />}
        {pageState === "bos" && <Bos />}
        {pageState === "student" && <NewStudent />}

        {pageState === "lesson" && <AddLesson />}
      </LessonContext.Provider>
    </div>
  );
}

export default App;
