/* Yeni öğrenci ekleme ekranı */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LessonContext } from "../Helpers/Contex";
import Button from "@mui/material/Button";

function NewStudent() {
  const { studentList, setStudentList, setPageState } =
    React.useContext(LessonContext);
  const [details, setDetails] = useState({ name: "", no: "", password: "" });
  const showNotes = (details) => {
    return {
      personel: {
        name: details.name,
        password: details.password,
        no: details.no,
      },
      lessons: {},
    };
  };

  const Save = (details) => {
    if (details.name && details.no && details.password !== "") {
      if (studentList.find((item) => item.personel.no === details.no)) {
        alert("aynı kullanıcı kaydedilemez");
      } else {
        setStudentList([...studentList, showNotes(details)]);
        setDetails({ name: "", no: "", password: "" });
        setPageState("admin");

        console.log(studentList, "kayıtlarr");
      }
    } else alert("Boş alanları doldurunuz!");
  };
  const Cancel = () => {
    setDetails({ name: "", no: "", password: "" });
    setPageState("admin");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    Save(details);
  };

  return (
    <div>
      {" "}
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>Yeni Öğreci Kaydı</h2>

          <div className="form-group">
            <label html="name"> İsim Soyisim:</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
          </div>

          <div className="form-group">
            <label htmlFor="number"> Numara </label>
            <input
              type="number"
              name="number"
              id="number"
              onChange={(e) => setDetails({ ...details, no: e.target.value })}
              value={details.no}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password"> Şifre</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            ></input>
          </div>
          <input type="submit" value="Kaydet"></input>
          <Button onClick={Cancel}> Vazgeç</Button>
        </div>
      </form>
    </div>
  );
}

export default NewStudent;
