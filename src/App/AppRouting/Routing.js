import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Containers/Home/Home'
import Login from '../Authentication/Login'
import Register from '../Authentication/Register';
import Forgetpassword from '../Components/ForgetPassword';

export default class Routing extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgetpassword" component={Forgetpassword} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    )
  }
};
