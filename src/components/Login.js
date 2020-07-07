import React, {useState, useRef} from "react";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import {connect} from "react-redux";
import {login} from "../actions/loginActions";
import Avatar from "@material-ui/core/Avatar";
import Loading from "./Loading";

const Login = (props) => {
    const {users, authedUser, history} = props
    const [newUser, setNewUser] = useState(authedUser)
    const wrapper = useRef(null);

    if(authedUser && authedUser.id) {
        if(history) {
            history.push("/home")
        }
    }

    if(!users || Object.keys(users).length === 0) {
        return (
            <Loading />
        )
    }

    const handleChange = (event) => {
        const {value} = event.target
        setNewUser(users[value]);
    }

    const handelLogin = () => {
        if(newUser && newUser.id) {
            sessionStorage.setItem("authedUser", JSON.stringify(newUser))
            props.dispatch(login(newUser))
            if(history) {
                history.push('/home')
            }
        }
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
                                            <Avatar alt={newUser.name} src={newUser.avatarURL} />
                                        </Grid>
                                        <Grid item xs={10}>
                                            <select
                                                value={newUser ? newUser.id : ''}
                                                onChange={handleChange}
                                                placeholder={"Select User"}
                                                ref={wrapper}
                                                style={{width: "100%", display: "content"}}
                                                >
                                                <option value="" disabled>-- select user ---</option>
                                                {
                                                    Object.keys(users).map(k => (
                                                        <option key={users[k].id} value={users[k].id}>
                                                            {users[k].name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardActions>
                                    <Button disabled={!newUser || !newUser.id} onClick={handelLogin} variant="contained" color="primary" style={{width: "100%"}}>
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

const mapStateToProps = ({users, authedUser}) => ({
  users, authedUser
})

export default connect(mapStateToProps)( Login )