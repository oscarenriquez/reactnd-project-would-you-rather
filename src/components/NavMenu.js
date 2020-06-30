import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom"
import "./NavMenu.scss"

const NavMenu = (props) => {
    return(
        <div>
            <AppBar position="fixed">
                <Toolbar className="toolbar">
                    <Typography variant="h6" className="toolbar-title">
                        React App
                    </Typography>
                </Toolbar>
                <nav className="nav">
                    <NavLink className="nav-item" activeClassName="selected" to="/Home" >Home</NavLink>
                    <NavLink className="nav-item" activeClassName="selected" to="/NewQuestion">New Question</NavLink>
                    <NavLink className="nav-item" activeClassName="selected" to="/LeaderBoard">Leader Board</NavLink>
                    <NavLink className="nav-item" activeClassName="selected" to="/Login">Login</NavLink>
                </nav>
            </AppBar>
        </div>
    )
}

export default NavMenu