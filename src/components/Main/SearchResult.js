import React, { useState, useEffect } from "react";
import student_data from '../../data/student_db.json';
import StudentDetail from "./StudentDetail";
function SearchResult({ keyword }) {
    const [students, setStudents] = useState([]);
    const [view, setView] = useState({})
    useEffect(() => {
        let result = student_data.filter((std) => std.student_name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
        setStudents(result);
    }, [keyword])
    console.log(keyword);
    return (
        <>
            <div className="search-result d-flex flex-column align-items-center">
                <table className="table w-75 caption-top">
                    <caption className="text-center text-dark">
                        <h3>Students Info</h3>
                    </caption>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Student Name</th>
                            <th className="text-center">Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((std) => {
                                let trStyle = (std.fe >= 5 && std.react >= 5 && std.java >= 5) ? "tr_active" : 'tr_normal'
                                return (
                                    <tr key={std.id} className={trStyle}>
                                        <td>{std.id}</td>
                                        <td>{std.student_name}</td>
                                        <td>
                                            <button className="btn btn-primary"
                                                onClick={() => setView(std)}
                                            >View</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            {
                Object.keys(view).length > 0 && <StudentDetail student={view} />
            }
        </>

    )
}
export default SearchResult;