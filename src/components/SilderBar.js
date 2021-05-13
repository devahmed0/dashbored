import React from 'react'
import { NavLink  , useRouteMatch } from "react-router-dom";

const SilderBar = ({ match }) => {

    return (
        <>
            {/* silderbar content */}
            <input type="checkbox" id="nav_toggle" />
            <div className="sildebar">
                <div className="silder_brand"> 
                    <h3><span className="fas fa-money-bill-wave-alt"></span><span>Administration</span></h3>
                </div> 
                <div className="silder_menu" >
                    <ul>
                        <li>
                            <NavLink exact  to="/admin"  activeClassName="active"><span className="fas fa-id-card"></span><span>Dashboard </span></NavLink >
                        </li>
                        <li>
                            <NavLink  to="/admin/users" activeClassName="active"><span className="fas fa-user-friends"></span><span>Users</span></NavLink >
                        </li>
                        <li>
                            <NavLink  to="/admin/blog"  ><span className="fab fa-blogger-b"></span><span>Blog</span></NavLink >
                        </li>
                        <li>       
                            <NavLink  to="*"><span className="fa fa-columns"></span><span>Users</span></NavLink >
                        </li>
                        <li>
                            <NavLink  to="*"><span className="fa fa-columns"></span><span>Users</span></NavLink >
                        </li>
                        <li>
                            <NavLink  to="*"><span className="fa fa-columns"></span><span>Users</span></NavLink >
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default SilderBar
