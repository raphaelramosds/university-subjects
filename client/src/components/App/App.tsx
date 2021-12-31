import React, { ReactComponentElement, useEffect, useState } from "react";
import { api } from "../../services/api";
import AddSubject from "../Subjects/AddSubject/AddSubject";
import DisplaySubjects from "../Subjects/DisplaySubject/DisplaySubjects";
import Workloads from "../Workloads/Workloads";

import './App.css';

export interface Subject {
  name: string,
  ch: number,
  mandatory: boolean,
}

const App = () => {

  // declaração de estado
  const [subjects, setSubjects] = useState<Array<Subject>>([]);

  // update state
  useEffect(() => {
    api.get('/subjects').then((response) => {
      setSubjects(response.data);
    });
  }, []);

  const handleUpdateSubjects = async (subject: Subject) => {
    const response = await api.post('/subjects', subject);
  
    if (response.data.error) {
      alert(response.data.error);
      return;
    }

    setSubjects((prevs) => [...prevs, subject]);
  }

  return (
    <>
      <div className="header">
        <div className="title">
          <h1>Minhas Matérias</h1>
          <p>UFRN</p>
        </div>
      </div>
      <div className="container">
        <AddSubject updateSubject={handleUpdateSubjects} />
        <DisplaySubjects subjects={subjects} />
        <Workloads />
      </div>
    </>
  );
}

export default App;