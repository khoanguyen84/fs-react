import React from "react";

function StudentDetail({ props }) {
    const { id, student_name, java, fe, react } = props;
    return (
        <div className="container d-flex align-items-center flex-column">
            <h3>Detail</h3>
            <div className="w-100 border border-primary pb-1">
                <div className="bg-primary py-1">
                    <p className="text-white text-center">{student_name}</p>
                </div>
                <div className="p-1 d-flex justify-content-between">
                    <div className="d-flex align-items-center flex-column w-25">
                        <p>Java</p>
                        <div className="bg-success w-100">
                            <p className="text-center text-white">{java}</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center flex-column  w-25">
                        <p>FE</p>
                        <div className="bg-success w-100">
                            <p className="text-center text-white">{fe}</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center flex-column  w-25">
                        <p>React</p>
                        <div className="bg-success w-100">
                            <p className="text-center text-white">{react}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center w-100">
                <div className="bg-primary w-25">
                    <p className="text-center text-white">
                        {((java + fe + react) / 3).toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default StudentDetail;