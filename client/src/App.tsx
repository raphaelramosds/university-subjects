import React, { useEffect, useState } from "react";
import { api } from "./services/api";

const App = () => {

  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    api.get('/subjects').then((response) => {
      console.log(response);
      // setSubjects(response.data);
    });
  }, []);

  return (
    <h1>My Subjects</h1>
  );
}

export default App;