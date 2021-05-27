import React, { useState } from "react";
import {
    Route,
    Switch,
    BrowserRouter,
    Link,
    NavLink,
} from "react-router-dom";

import Proptypes from 'prop-types'

import Settings from "../settings/Settings"
import Signup from "../signup/Signup"
import Updates from "../updates/Updates"

const Router = (props) =>{
    return(
      <BrowserRouter>
        <Switch>
        <Route exact path="/">
            <Updates />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/updates">
            <Updates />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
        </Switch>
      </BrowserRouter>
    )
}
Router.propTypes = {
}

export default Router;