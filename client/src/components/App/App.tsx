import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import DisplaySubjects from "../Subjects/DisplaySubject/DisplaySubjects";

const App = () => {

  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    api.get('/subjects').then((response) => {
      setSubjects(response.data);
    });
  }, [subjects]);

  return (
    <>
      <DisplaySubjects subjects={subjects} />
    </>
  );
}

export default App;