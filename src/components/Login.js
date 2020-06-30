import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import {People} from "@material-ui/icons";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import {connect} from "react-redux";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {login} from "../actions/loginActions";
import Avatar from "@material-ui/core/Avatar";

const Login = (props) => {
    const {users, user} = props
    const [newUser, setNewUser] = useState(user)

    const handleChange = (event) => {
        const {value} = event.target
        setNewUser(value);
    }

    const handelLogin = () => {
        props.dispatch(login(newUser))
        props.history.push("home")
    }

    return (
        <div>
            <div>
                <Grid container justify="center">
                    <Grid item xs={12} sm={12} md={6}>
                        <Card className="card">
                            <form>
                                <CardHeader
                                    className="card-header"
                                    title="Welcome to the Would You Rather App!"
                                    subheader="Please sign in to continue"
                                />
                                <CardContent className="card-content">
                                    <Grid container alignItems="center">
                                        <Grid item xs={2}>
                                            <People style={{width: "80px"}} />
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Select
                                                variant="outlined"
                                                value={newUser}
                                                onChange={handleChange}
                                                placeholder={"Select User"}
                                                style={{width: "100%"}}
                                                >
                                                {
                                                    Object.keys(users).map(k => (
                                                        <MenuItem key={users[k].id} value={users[k].id}>
                                                            <Avatar alt={users[k].name} src={users[k].avatarURL} />
                                                            {users[k].name}
                                                        </MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={handelLogin} variant="contained" color="primary" style={{width: "100%"}}>
                                        Get Stared
                                    </Button>
                                </CardActions>
                            </form>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

const mapStateToProps = ({users, user}) => ({
  users, user
})

export default connect(mapStateToProps)( Login )