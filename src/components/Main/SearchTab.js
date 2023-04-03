import React, { useState } from "react";
import student_data from '../../data/student_db.json';
import TR from "./TR";
import StudentDetail from "./StudentDetail";

function SearchTab() {
    const [keyword, setKeyword] = useState("");
    const [data, setData] = useState(student_data);
    const [student, setStudent] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        setData((prev) => {
            return keyword ?
                prev.filter((std) => std.student_name.toLowerCase().includes(keyword.toLocaleLowerCase()))
                : student_data;
        })
    }
    return (
        <div className="container">
            <div className="search-area d-flex flex-column align-items-center">
                <h3 className="text-center">Search Form</h3>
                <form className="w-50" onSubmit={handleSearch}>
                    <div className="row">
                        <div className="col-md-10">
                            <input type="search" className="form-control"
                                onInput={(e) => setKeyword(e.target.value)}
                            />
                            {
                                !keyword ?
                                    <span className="fst-italic text-danger">Student Name you entered is not valid, please try again!</span>
                                    : null
                            }

                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="search-result d-flex flex-column align-items-center">
                <table className="table caption-top w-75 align-items-center">
                    <caption className="text-center text-dark">
                        <h3>Students Info Table</h3>
                    </caption>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Student Name</th>
                            <th className="text-center">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((std) => {
                                const bgColor = (std.java >= 5 && std.fe >= 5 && std.react >= 5) ? "#e0e0e0" : "";
                                return (
                                    <tr key={std.id} style={{backgroundColor: bgColor}}>
                                        <td>{std.id}</td>
                                        <td>{std.student_name}</td>
                                        <td className="text-center">
                                            <button className="btn btn-primary btn-sm"
                                                onClick={() => setStudent(std)}
                                            >View</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            {student && <StudentDetail props={student} />}
        </div>
    )
}

export default SearchTab;