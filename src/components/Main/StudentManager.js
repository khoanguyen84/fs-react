import React, { useState, useEffect } from "react";
import student_data from '../../data/student_db.json';
import TableRow from './TableRow';

function StudentManager() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        setStudents(student_data);
    }, [])

    const handleSaveStudent = (student) => {
        setStudents((prev) => {
            let position = prev.findIndex((std) => std.id == student.id);
            prev[position] = { ...student };
            return prev;
        })
    }

    const handleRemoveStudent = (student) => {
        let confirmed = window.confirm(`Are you sure to remove student: ${student.student_name}?`);
        if(confirmed){
            setStudents((prev) => {
                return prev.filter(item => item.id != student.id);
            })
        }
    }
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
                            <TableRow key={std.id} props={std}
                                handleSaveStudent={handleSaveStudent}
                                handleRemoveStudent={handleRemoveStudent}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default StudentManager;