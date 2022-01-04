import React, { ReactComponentElement, useCallback, useEffect, useState } from "react";
import { api } from "../../services/api";
import AddSubject from "../Subjects/AddSubject/AddSubject";
import DisplaySubjects from "../Subjects/DisplaySubject/DisplaySubjects";
import Workloads from "../Workloads/Workloads";

import './App.css';

export interface Subject {
  id: string,
  name: string,
  ch: number,
  mandatory: boolean,
}

const App = () => {

  // declaração de estado
  const [subjects, setSubjects] = useState<Array<Subject>>([]);

  // update list
  const handleUpdateSubjects = async (subject: Subject) => {
    const response = await api.post('/subjects', subject);

    // console.log(response);

    subject.id = response.data.id;

    setSubjects((prevs) => [...prevs, subject]);
  }

  // delete
  const handleDeleteSubjects = (id: string) => {
    console.log(id);

    const filteredSubjects = subjects.filter((subject) => subject.id !== id);
    setSubjects(filteredSubjects);
  }

  useEffect(() => {    
    api.get('/subjects').then((response) => {
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
      <div className="container">
        <AddSubject updateSubject={handleUpdateSubjects}/>
        <DisplaySubjects subjects={subjects} deleteSubject={handleDeleteSubjects}/>
        <Workloads />
      </div>
    </>
  );
}

export default App;