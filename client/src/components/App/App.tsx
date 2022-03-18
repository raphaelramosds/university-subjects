import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import AddSubject from "../Subjects/AddSubject/AddSubject";
import DisplaySubjects from "../Subjects/DisplaySubject/DisplaySubjects";
import Workloads from "../Workloads/Workloads";

import "./App.css";

export interface Subject {
  id: string,
  name: string,
  ch: number,
  mandatory: boolean,
}

const App = () => {

  // declaração de estado
  const [subjects, setSubjects] = useState<Array<Subject>>([]);

  // errors
  const [err, setErr] = useState("");

  // add subject
  const handleCreateSubject = async (subject: Subject) => {
    try {
      const response = await api.post("/subjects", subject)
      subject.id = response.data.id;
      setSubjects((prevs) => [...prevs, subject]);
    } catch(error) {
      setErr("Preencha o(s) campo(s) vazio(s)");
    }
  }

  // delete
  const handleDeleteSubjects = (id: string) => {
    const filteredSubjects = subjects.filter((subject) => subject.id !== id);
    setSubjects(filteredSubjects);
  }

  useEffect(() => {    
    api.get("/subjects").then((response) => {
      setSubjects(response.data);
    });
  }, []);

  return (
    <>
      <div className="header">
        <div className="title">
          <h1>Minhas Matérias</h1>
          <p>UFRN</p>
        </div>
      </div>
      {err && <div className="errorMessage">{err}</div>}
      <div className="container">
        <AddSubject createSubject={handleCreateSubject}/>
        <Workloads />
        <DisplaySubjects subjects={subjects} deleteSubject={handleDeleteSubjects}/>
      </div>
    </>
  );
}

export default App;