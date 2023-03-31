import React, { useState } from "react";
import { Link } from "react-router-dom";


const menus = [
    {
        name: "Student Manager",
        path: "/student-manager"
    },
    {
        name: "Search Tab",
        path: "/search-tab"
    }
]
function Menu(){
    const [selected, setSelected] = useState("Student Manager")
    return (
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <h3>Menu Item</h3>
            {
                menus.map((menu) => (
                    <Link 
                        to={menu.path} 
                        key={menu.name}
                        className={`btn btn-outline-primary w-100 my-1 ${menu.name == selected ? 'active' : ''}`}
                        onClick = {() => setSelected(menu.name)}
                    >{menu.name}</Link>
                ))
            }
        </div>
    )
}

export default Menu;