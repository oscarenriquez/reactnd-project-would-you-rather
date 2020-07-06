import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom"
import "./NavMenu.scss"
import {connect} from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const NavMenu = (props) => {
    const { isAuthenticated, authedUser } = props

    return(
        <div>
            <AppBar position="fixed">
                <Toolbar className="toolbar">
                    <Typography variant="h6" className="toolbar-title">
                        React App
                    </Typography>
                </Toolbar>
                <nav className="nav">
                    <NavLink className="nav-item" activeClassName="selected" to="/home" >Home</NavLink>
                    <NavLink className="nav-item" activeClassName="selected" to="/add">New Question</NavLink>
                    <NavLink className="nav-item" activeClassName="selected" to="/leaderboard">Leader Board</NavLink>
                    {isAuthenticated ?
                        <NavLink className="nav-item" activeClassName="selected" to="/logout">
                            <Grid container item alignItems="center" spacing={2}>
                                <Grid item><Avatar alt={authedUser.name} src={authedUser.avatarURL} /></Grid>
                                <Grid item><span>Log Out</span></Grid>
                            </Grid>
                        </NavLink>
                        : <NavLink className="nav-item" activeClassName="selected" to="/login">Login</NavLink>
                    }
                </nav>
            </AppBar>
        </div>
    )
}

const mapStateToProps = ({authedUser}) => ({
    isAuthenticated: authedUser !== '',
    authedUser
})

export default connect(mapStateToProps) (NavMenu)