import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { api } from "../../../services/api";

import './DisplaySubject.css';

interface Props {
  subjects: Array<any>,
  deleteSubject: any
}

const DisplaySubjects: React.FC<Props> = ({ subjects, deleteSubject }) => {

  const handleDeleteSubject = (id: string): React.MouseEvent<HTMLElement> | void => {
    api.delete(`/subjects/${id}`);
    deleteSubject(id);
  }

  return (
    <>
      {subjects.length > 0 ?
        <ul className="subjectsList">
          {subjects.map((subject) => (
            <div className="subject">
              <li key={subject.id}
                onClick={() => handleDeleteSubject(subject.id)}>
                <div className="info">
                  <div className="icon">
                    <FontAwesomeIcon icon={faCircleNotch} />
                  </div>
                  <div className="name">
                    {subject.name}
                  </div>
                  <div className="ch">
                    {subject.ch}h
                  </div>
                </div>
              </li>
            </div>
          ))}
        </ul> : <small style={{ marginTop: 30 }}>Nenhuma matéria cadastrada</small>
      }
    </>
  );
}

export default DisplaySubjects;
