import React, { useState, useEffect } from "react";
import StudentService from "../../services/studentService";

function TableRow({ props, handleSaveStudent, handleRemoveStudent }) {

    const [selected, setSelected] = useState(0);
    const [student, setStudent] = useState({})

    useEffect(() => {
        try {
            async function getData(){
                let studentRes = await StudentService.getStudent(props.id)
                setStudent(studentRes.data)
            }
            getData();
        } catch (error) {
            
        }
    }, [selected])
    const handleInputValue = (e) => {
        setStudent({
            ...student,
            [e.target.name]: [e.target.name] == 'student_name' ? e.target.value : Number(e.target.value)
        })
    }

    const handleUpdate = () => {
        handleSaveStudent(student);
        setSelected(0)
    }
    const { id, student_name, fe, java, react } = student;
    return (
        <tr key={id}>
            <td>{id}</td>
            <td>
                {
                    selected ? (
                        <input className="form-control w-100"
                            type="text" value={student_name}
                            name="student_name"
                            onInput={handleInputValue}
                        />
                    ) : student_name

                }
            </td>
            <td className="text-center">
                {
                    selected ? (
                        <input className="form-control w-100"
                            type="number" value={java}
                            name="java"
                            onInput={handleInputValue}
                        />
                    ) : java
                }
            </td>
            <td className="text-center">
                {
                    selected ? (
                        <input className="form-control w-100"
                            type="number" value={fe}
                            name="fe"
                            onInput={handleInputValue}
                        />
                    ) : fe
                }
            </td>
            <td className="text-center">
                {
                    selected ? (
                        <input className="form-control w-100"
                            type="number" value={react}
                            name="react"
                            onInput={handleInputValue}
                        />
                    ) : react
                }
            </td>
            <td className="text-center">
                {
                    selected ? (
                        <i role={"button"} className="fa fa-check text-success me-2"
                            onClick={handleUpdate}
                        ></i>
                    ) : (
                        <i role={"button"} className="fa fa-edit me-2"
                            onClick={() => setSelected(id)}
                        ></i>
                    )
                }
                <i role={"button"}
                    className="fa fa-times text-danger fw-bolder"
                    onClick={() => handleRemoveStudent(student)}
                ></i>
            </td>
        </tr>
    )
}

export default TableRow;