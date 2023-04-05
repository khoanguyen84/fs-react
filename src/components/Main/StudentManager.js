import React, { useState, useEffect } from "react";
import TableRow from './TableRow';
import studentService from '../../services/studentService.js';
import StudentService from "../../services/studentService.js";
import Spinner from "../Spinner/Spinner";

function StudentManager() {
    const [state, setState] = useState({
        loading: false,
        students: []
    });
    useEffect(() => {
        try {
            async function getData() {
                setState({ ...state, loading: true })
                let studentRes = await studentService.getStudents();
                setState({
                    ...state,
                    students: studentRes.data,
                    loading: false
                });
            }
            getData()
        } catch (error) {

        }
    }, [])

    const handleSaveStudent = async (student) => {
        setState({ ...state, loading: true });
        let updateRes = await studentService.updateStudent(student);
        if (updateRes.data) {
            console.log(updateRes.data);
            let studentRes = await studentService.getStudents();
            setState({
                ...state,
                students: studentRes.data,
                loading: false
            });
        }
    }

    const handleRemoveStudent = async (student) => {
        let confirmed = window.confirm(`Are you sure to remove student: ${student.student_name}?`);
        if (confirmed) {
            setState({ ...state, loading: true });
            let DeleteRes = await StudentService.removeStudent(student.id);
            if (DeleteRes.data) {
                let studentRes = await studentService.getStudents();
                setState({
                    ...state,
                    students: studentRes.data,
                    loading: false
                })
            }
        }
    }
    const { students, loading } = state;
    return (

        <div className="container">
            {
                loading ? <Spinner /> : (
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
                )
            }
        </div>

    )
}

export default StudentManager;