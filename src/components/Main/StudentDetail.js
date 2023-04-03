import React from "react";

function StudentDetail({ student }) {
    const { id, student_name, fe, java, react } = student;
    return (
        <div className="student-detail d-flex flex-column align-items-center">
            <h3>Student Detail</h3>
            <div className="w-100 border border-primary">
                <div className="bg-primary">
                    <p className="text-center py-1 text-white">{student_name}</p>
                </div>
                <div className="row px-2">
                    <div className="col-md-4 text-center">
                        <p>Java</p>
                        <div className="bg-success">
                            <p className="text-center py-2 text-white">{java}</p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <p>FE</p>
                        <div className="bg-success">
                            <p className="text-center py-2 text-white">{fe}</p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <p>React</p>
                        <div className="bg-success">
                            <p className="text-center py-2 text-white">{react}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-50">
                <div className="bg-primary">
                    <p className="text-center py-3 text-white">
                        {((java + react + fe)/3).toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default StudentDetail;