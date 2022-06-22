/* admin sayfasında yukarıdaki öğrenci ve ders ekleme paneli. */
import React, { useContext } from "react";
import Bos from "../Components/Bos";
import { LessonContext } from "../Helpers/Contex";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function AdminPanel() {
  const { setPageState, lessonList, setUser } = useContext(LessonContext);
  const Logout = () => {
    setUser({ no: "", password: "" });
    setPageState("login");
  };

  return (
    <div style={{ width: "70%", height: "80%" }}>
      <div
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#d5d5d5",
          height: 70,
          alignItems: "center",
          marginTop: 2,
          paddingTop: 15,
        }}
      >
        <Button
          onClick={() => {
            setPageState("student");
          }}
        >
          {" "}
          Yeni Öğrenci Kaydı
        </Button>
        <Button
          onClick={() => {
            setPageState("lesson");
          }}
        >
          {" "}
          Yeni Ders Kaydı
        </Button>
        <Button variant="text" style={{ color: "black" }} onClick={Logout}>
          çıkış
        </Button>

        {/* <Button onClick={setPageState("student")}> Öğrenci Ekle</Button> */}
      </div>

      {lessonList?.map((item) => (
        <Bos lesson={item} />
      ))}
    </div>
  );
}

export default AdminPanel;
