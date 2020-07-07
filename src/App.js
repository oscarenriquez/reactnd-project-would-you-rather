import React, {useEffect} from 'react';
import Layout from "./components/Layout";
import {Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import NewQuestion from "./components/NewQuestion";
import LeaderBoard from "./components/LeaderBoard";
import Login from "./components/Login";
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {fetchUsers} from "./actions/userActions";
import {fetchQuestions} from "./actions/questionActions";
import Page404 from "./components/Page404";
import ViewQuestion from "./components/ViewQuestion";
import Logout from "./components/Logout";

const App = (props) => {

  useEffect(() => {
    props.dispatch(fetchQuestions)
    props.dispatch(fetchUsers)
  })

  return (
      <Layout>
          <Switch>
              <Redirect exact path="/" to="/login" />
              <Route path="/home" component={Home} />
              <Route path="/questions/:question_id" component={ViewQuestion}/>
              <Route path="/add" component={NewQuestion}/>
              <Route path="/leaderboard" component={LeaderBoard}/>
              <Route path="/login" component={Login}/>
              <Route path="/logout" component={Logout}/>
              <Route component={Page404} />
          </Switch>
      </Layout>
  );
}



export default connect()( App );
