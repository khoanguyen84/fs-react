import React, { useState, useEffect } from "react";
import student_data from '../../data/student_db.json';

function StudentManager(){
    const [students, setStudents] = useState([]);
    useEffect(() => {
        setStudents(student_data);
    }, [])
    console.log(students);
    return (
        <div className="container">
            <table className="table caption-top">
                <caption className="text-center text-dark">
                    <h3>Students Info Table</h3>
                </caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Student Name</th>
                        <th className="text-center">Java</th>
                        <th className="text-center">FE</th>
                        <th className="text-center">React</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((std) => (
                            <tr key={std.id}>
                                <td>{std.id}</td>
                                <td>{std.student_name}</td>
                                <td className="text-center">{std.java}</td>
                                <td className="text-center">{std.fe}</td>
                                <td className="text-center">{std.react}</td>
                                <td className="text-center">
                                    <i role={"button"} className="fa fa-edit me-2"></i>
                                    <i role={"button"} className="fa fa-times text-danger fw-bolder"></i>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default StudentManager;