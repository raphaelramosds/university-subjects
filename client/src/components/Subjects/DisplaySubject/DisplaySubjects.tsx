import React from "react";
import { api } from "../../../services/api";

interface Props {
    subjects: Array<any>
}

const DisplaySubjects: React.FC<Props> = ({ subjects }) => {
    
    const handleDeleteSubject = (id: string): React.MouseEvent<HTMLElement> | void => {
        console.log(id);
        api.delete(`/subjects/${id}`);
    }

    return (
        <>
            <ul>
                {subjects.map((subject) => (
                    <li key={subject.id}
                        onClick={() => handleDeleteSubject(subject.id)}>
                        {subject.name} {subject.ch}h
                    </li>
                ))}
            </ul>
        </>
    );
}

export default DisplaySubjects;
