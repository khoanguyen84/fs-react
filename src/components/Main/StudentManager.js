import React, { useState, useEffect } from "react";
import student_data from '../../data/student_db.json';
import TR from "./TR";

function StudentManager() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        setStudents(student_data);
    }, [])

    const handleUpdateStudent = (std) => {
        setStudents((prev) => {
            let pos = prev.findIndex((s) => s.id == std.id);
            prev[pos] = { ...std }
            return prev;
        })
    }
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
                        // students.map((std) => (
                        //     <TR props={std} handleSave={handleUpdateStudent} />
                        // ))
                        students.map((std) => {
                            console.log(std);
                            return <TR props={std} handleSave={handleUpdateStudent} />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default StudentManager;