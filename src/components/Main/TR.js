import React, { useState, useEffect } from "react";
function TR({ props, handleSave }, ) {
    const { id, student_name, java, fe, react } = props;
    const [selected, setSelected] = useState(0);
    const [student, setStudent] = useState({})

    useEffect(() => {
        setStudent(props)
    }, [])
    const handleInputValue = (e) => {
        setStudent({
            ...student,
            [e.target.name] : [e.target.name] == "student_name" ? e.target.value : Number(e.target.value)
        })
    }
    const handleUpdate = () => {
        handleSave(student)
        setSelected(0);
    }

    return (
        <tr key={id}>
            <td>{id}</td>
            <td>
                {
                    selected ? (
                        <input className="w-100" 
                                name="student_name" 
                                type="text" value={student.student_name} 
                                onInput={handleInputValue} />
                    ) : student.student_name
                }
            </td>
            <td className="text-center">
                {
                    selected ? (
                        <input className="w-100" 
                                type="number" value={student.java}
                                name="java"
                                onInput={handleInputValue} />
                    ) : student.java
                }
            </td>
            <td className="text-center">
                {
                    selected ? (
                        <input className="w-100" 
                            type="number" value={student.fe} 
                            name="fe"
                            onInput={handleInputValue}/>
                    ) : student.fe
                }
            </td>
            <td className="text-center">
                {
                    selected ? (
                        <input className="w-100" 
                        type="number" value={student.react} 
                        name="react"
                        onInput={handleInputValue}/>
                    ) : student.react
                }
            </td>
            <td className="text-center">
                {
                    selected ? (
                        <i role={"button"} className="fa fa-check text-success me-2"
                            onClick={handleUpdate}
                        ></i>

                    ) :
                        (
                            <i role={"button"} className="fa fa-edit me-2"
                                onClick={() => setSelected(id)}
                            ></i>
                        )
                }

                <i role={"button"} className="fa fa-times text-danger fw-bolder"></i>
            </td>
        </tr>
    )
}

export default TR;