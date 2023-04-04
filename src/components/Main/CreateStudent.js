import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StudentService from "../../services/studentService";

function CreateStudent() {
    const [student, setStudent] = useState({});
    const navigate = useNavigate();
    const handleInputValue = (e) => {
        setStudent({
            ...student,
            [e.target.name]: [e.target.name] == 'student_name' ? e.target.value : Number(e.target.value)
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let createRes = await StudentService.createStudent(student);
        if(createRes.data){
            navigate("/fs-react/student-manager", { replace: true })
        }
    }
    return (
        <div className="container d-flex align-items-center flex-column ">
            <h3>Create Student</h3>
            <form onSubmit={handleSubmit} className="w-100">
                <div className="row">
                    <div className="col-md-6">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control"
                            name="student_name"
                            onInput={handleInputValue}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Java</label>
                        <input type="number" className="form-control"
                            name="java"
                            onInput={handleInputValue}
                            required
                        />
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-md-6">
                        <label className="form-label">FE</label>
                        <input type="number" className="form-control"
                            name="fe"
                            onInput={handleInputValue}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">React</label>
                        <input type="number" className="form-control"
                            name="react"
                            onInput={handleInputValue}
                            required
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-warning me-2">
                            <i className="fa fa-add me-2"></i>
                            Create
                        </button>
                        <Link to={"/fs-react/student-manager"} className="btn btn-dark">
                            <i className="fa fa-times me-2"></i>
                            Cancel
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default CreateStudent;