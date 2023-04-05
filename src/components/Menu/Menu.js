import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { menus } from '../../data/menu_data.js';
import { MenuContext } from './../../App';

function Menu() {
    const { menuSelected, handleChangeMenu } = useContext(MenuContext)

    return (
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <h3>Menu Item</h3>
            {
                menus.map((menu) => (
                    <Link
                        to={menu.path}
                        key={menu.name}
                        className={`btn btn-outline-primary w-100 my-1 ${menu.name == menuSelected ? 'active' : ''}`}
                        onClick={() => handleChangeMenu(menu.name)}
                    >{menu.name}</Link>
                ))
            }
        </div>
    )
}

export default Menu;