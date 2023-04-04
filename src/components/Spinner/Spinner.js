import React from "react";

function Spinner() {
    return (
        <div className="container-fluid bg-spinner vh-100 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-warning" role="status">
            </div>
            <span class="text-warning ms-2">Loading...</span>
        </div>
    )
}
export default Spinner;