/* Admin girişi yapıldıktan sonra Ders ve PDF eklenen ekran */
import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FloatingLabel, Form } from "react-bootstrap";
import Button from "@mui/material/Button";
import { LessonContext } from "../Helpers/Contex";

function AddLesson() {
  const { setPageState, lessonList, setLessonList } = useContext(LessonContext);

  const [details, setDetails] = useState({ name: "", code: "", file: "" });

  const New = (details) => {
    return {
      name: details.name,
      code: details.code,
    };
  };

  const Save = () => {
    if (details.name !== "" && details.code !== "") {
      if (lessonList.find((item) => item.code === details.code)) {
        alert("Aynı ders kaydedilemez");
      } else {
        setLessonList([
          ...lessonList,
          { name: details.name, code: details.code, file: details.file },
        ]);
        setDetails({ name: "", no: "" });

        setPageState("admin");
      }
    } else alert("Boş alanları doldurunuz!");
  };

  //PDF EKLEME KODLARI
  // pdf dosyası üzerinde durumu değiştir
  const [pdfFile, setPdfFile] = useState(null);

  // pdf dosyası hata durumu
  const [pdfError, setPdfError] = useState("");

  // dosyayı onChange olayında işle
  const allowedFiles = ["application/pdf"];
  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    // console.log(selectedFile.type);
    if (selectedFile) {
      if (selectedFile && allowedFiles.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfError("");
          setPdfFile(e.target.result);
          setDetails({ ...details, file: e.target.result });
        };
      } else {
        setPdfError("Not a valid pdf: Please select only PDF");
        setPdfFile("");
      }
    } else {
      console.log("please select a PDF");
    }
  };

  return (
    /* Ders Ekleme Alanı */
    <div style={{ marginTop: 200, width: 550 }}>
      <FloatingLabel controlId="quastion" label="Ders Adı" className="mb-3">
        <Form.Control
          value={details.name}
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px", borderColor: "#cfcb27", borderWidth: 3 }}
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="quastioncode"
        label="Ders Kodu"
        className="mb-3"
      >
        <Form.Control
          value={details.code}
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px", borderColor: "#cfcb27", borderWidth: 3 }}
          onChange={(e) => setDetails({ ...details, code: e.target.value })}
        />
      </FloatingLabel>
      <input type="file" onChange={handleFile}></input>
      {/* we will display error message in case user select some file
        other than pdf */}
      {pdfError && <span className="text-danger">{pdfError}</span>}
      <Button onClick={Save} style={{ color: "black" }}>
        Kaydet
      </Button>
      <Button onClick={() => setPageState("admin")} style={{ color: "black" }}>
        Vazgeç
      </Button>
    </div>
  );
}

export default AddLesson;
