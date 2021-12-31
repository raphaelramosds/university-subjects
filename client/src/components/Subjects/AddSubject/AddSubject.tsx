import React, { useState } from "react";

interface Props {
    updateSubject: any
}

const AddSubject: React.FC<Props> = ({ updateSubject }) => {

    const [newSubject, setNewSubject] = useState({
        subject: '',
        ch: '',
        mandatory: false
    });

    const handleTypedInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        const { name, value, type } = target;
        // se for checkbox, atribua true (obrigatorio) ou false (optativa   )
        const correctedValue = type === 'checkbox' ? target.checked : value;

        setNewSubject((prev) => ({ ...prev, [name]: correctedValue }));
    }

    // submete
    const handleSubmitSubject = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        updateSubject(newSubject);
    }

    return (
        <>
            <form onSubmit={handleSubmitSubject}>
                <input placeholder="Matéria"
                    name="name"
                    type="text"
                    onChange={handleTypedInfo} />
                <input placeholder="Carga Horária"
                    name="ch"
                    type="number"
                    onChange={handleTypedInfo} />
                Obrigatoria?
                <input type="checkbox"
                    name="mandatory"
                    onChange={handleTypedInfo}
                />
                <input type="submit" style={{display: "none"}}/>
            </form>

        </>
    );
}

export default AddSubject;