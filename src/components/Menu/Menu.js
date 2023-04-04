import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";


const menus = [
    {
        name: "Student Manager",
        path: "/student-manager"
    },
    {
        name: "Create Student",
        path: "/create-student"
    },
    {
        name: "Search Tab",
        path: "/search-tab"
    }
]
function Menu(){
    const [selected, setSelected] = useState("/student-manager");

    const location = useLocation();
    return (
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <h3>Menu Item</h3>
            {
                menus.map((menu) => (
                    <Link 
                        to={menu.path} 
                        key={menu.name}
                        className={`btn btn-outline-primary w-100 my-1 ${menu.path == selected ? 'active' : ''}`}
                        onClick = {() => setSelected(location.pathname)}
                    >{menu.name}</Link>
                ))
            }
        </div>
    )
}

export default Menu;