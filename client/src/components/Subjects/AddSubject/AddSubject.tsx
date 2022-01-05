import React, { useState } from "react";
import './AddSubject.css';

interface Props {
    createSubject: any
}

const AddSubject: React.FC<Props> = ({ createSubject }) => {

    const [newSubject, setNewSubject] = useState({
        subject: "",
        ch: "",
        mandatory: false
    });

    const handleTypedInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        const { name, value, type } = target;
        // se for checkbox, atribua true (obrigatorio) ou false (optativa)
        const correctedValue = type === "checkbox" ? target.checked : value;

        setNewSubject((prev) => ({ ...prev, [name]: correctedValue }));
    }

    // submete
    const handleSubmitSubject = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        createSubject(newSubject);
    }

    return (
        <>
            <form onSubmit={handleSubmitSubject} className="subjectsForm">
                <div>
                    <input
                        placeholder="Matéria"
                        name="name"
                        type="text"
                        onChange={handleTypedInfo} />
                </div>
                <div>
                    <input
                        placeholder="CH"
                        name="ch"
                        type="number"
                        onChange={handleTypedInfo} />
                </div>
                <div className="mandatory">
                    <span>Obrigatória</span>
                    <input 
                        type="checkbox"
                        name="mandatory"
                        onChange={handleTypedInfo}
                    />
                </div>
                <div>
                    <input type="submit" style={{ display: "none" }} />
                </div>
            </form>

        </>
    );
}

export default AddSubject;