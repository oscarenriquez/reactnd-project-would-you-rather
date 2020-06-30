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
import AnswerQuestion from "./components/AnswerQuestion";
import ViewResult from "./components/ViewResult";
import PrivateRoute from "./components/PrivateRoute";

const App = React.memo((props) => {
  useEffect(()=>{
    props.dispatch(fetchUsers)
    props.dispatch(fetchQuestions)
  })
  return (
      <Layout>
          <Switch>
              <Redirect exact path="/" to="/Login" />
              <PrivateRoute path="/Home" component={Home} />
              <PrivateRoute path="/AnswerQuestion/:questionId" component={AnswerQuestion}/>
              <PrivateRoute path="/ViewResult/:questionId" component={ViewResult}/>
              <PrivateRoute path="/NewQuestion" component={NewQuestion}/>
              <PrivateRoute path="/LeaderBoard" component={LeaderBoard}/>
              <Route path="/Login" component={Login}/>
          </Switch>
      </Layout>
  );
})

export default connect()( App );
